import { execFile } from 'node:child_process'
import { mkdtemp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { promisify } from 'node:util'
import { describe, expect, test } from 'vitest'
import { Effect, Exit } from 'effect'
import {
  checkProtocolCompatibility,
  decodeHarnessModuleDescriptor,
  decodeModulePlan,
  PRELUDE_V1_SUPPORTED_FEATURES,
  type HarnessModuleContext,
} from '@sayoriqwq/prelude-contract'

import { harnessModule } from '../src/prelude.js'

const run = promisify(execFile)

function context(
  wikiEntries: ReadonlyArray<{ name: string, kind: 'file' | 'directory' | 'symbolicLink' | 'other' }> | undefined,
  packageRoot = '.',
): HarnessModuleContext {
  return {
    integration: { integrationId: 'partita.psychogram', packageRoot },
    artifact: {
      packageName: '@sayoriqwq/psychogram',
      packageVersion: '0.1.0',
      module: '@sayoriqwq/psychogram/prelude',
      resolutionId: 'test-resolution',
    },
    host: {
      supportedProtocolVersions: [1],
      supportedFeatures: [...PRELUDE_V1_SUPPORTED_FEATURES],
    },
    artifactAssets: {
      readBytes: () => Effect.succeed(undefined),
      readText: () => Effect.succeed(undefined),
      readDirectory: () => Effect.succeed(undefined),
    },
    target: {
      readBytes: () => Effect.succeed(undefined),
      readText: () => Effect.succeed(undefined),
      readDirectory: () => Effect.succeed(wikiEntries),
      readPackageManifest: () => Effect.succeed(undefined),
    },
  }
}

describe('Psychogram Prelude Module', () => {
  test('exports a schema-valid descriptor and one bounded managed protocol tree', async () => {
    expect(decodeHarnessModuleDescriptor(harnessModule.descriptor)).toEqual(harnessModule.descriptor)
    expect(checkProtocolCompatibility(harnessModule.descriptor, {
      supportedProtocolVersions: [1],
      supportedFeatures: [...PRELUDE_V1_SUPPORTED_FEATURES],
    })).toEqual({ compatible: true })

    const exported = await import('@sayoriqwq/psychogram/prelude')
    expect(exported.harnessModule.descriptor).toEqual(harnessModule.descriptor)

    const plan = await Effect.runPromise(harnessModule.plan(context([{ name: 'prelude.md', kind: 'file' }])))
    expect(decodeModulePlan(plan)).toEqual(plan)
    expect(plan.outputs).toEqual([
      expect.objectContaining({
        kind: 'ManagedTree',
        sourceRoot: 'assets/managed',
        targetRoot: 'psychogram/managed',
      }),
      expect.objectContaining({ kind: 'ManagedBlock', path: 'AGENTS.md' }),
    ])
    expect(plan.outputs.some(output => 'targetRoot' in output && output.targetRoot.startsWith('psychogram/wikis'))).toBe(false)
    expect(plan.issues).toEqual([])
  })

  test('observes an absent target-owned wiki without taking ownership of it', async () => {
    const plan = await Effect.runPromise(harnessModule.plan(context(undefined)))
    expect(plan.issues).toEqual([expect.objectContaining({ id: 'psychogram.wiki-entry-missing' })])
    expect(plan.outputs.map(output => output.id)).not.toContain('psychogram.wiki-entry-missing')
  })

  test('keeps Output paths scoped while declaring its Check at the integration package root', async () => {
    const plan = await Effect.runPromise(harnessModule.plan(
      context([{ name: 'prelude.md', kind: 'file' }], 'packages/wiki-target'),
    ))
    expect(plan.outputs).toEqual(expect.arrayContaining([
      expect.objectContaining({ targetRoot: 'psychogram/managed' }),
      expect.objectContaining({ path: 'AGENTS.md' }),
    ]))
    expect(plan.checks[0]?.packageRoot).toBe('packages/wiki-target')
  })

  test('selects the same single wiki entry regardless of directory ordering', async () => {
    const entries = [
      { name: 'zeta.md', kind: 'file' as const },
      { name: 'alpha.md', kind: 'file' as const },
      { name: 'notes', kind: 'directory' as const },
    ]
    const forward = await Effect.runPromise(harnessModule.plan(context(entries)))
    const reversed = await Effect.runPromise(harnessModule.plan(context([...entries].reverse())))
    expect(forward).toEqual(reversed)
    expect(forward.checks[0]?.argv.at(-1)).toBe('psychogram/wikis/alpha.md')
  })

  test('the deployed Check reads every managed protocol entry and the selected wiki entry', async () => {
    const plan = await Effect.runPromise(harnessModule.plan(context([{ name: 'prelude.md', kind: 'file' }])))
    const check = plan.checks[0]
    expect(check).toBeDefined()
    if (check === undefined)
      throw new Error('expected Psychogram readability check')

    const root = await mkdtemp(join(tmpdir(), 'psychogram-check-'))
    try {
      const paths = check.argv.slice(4)
      await Promise.all(paths.map(async path => {
        const file = join(root, path)
        await mkdir(join(file, '..'), { recursive: true })
        await writeFile(file, 'readable protocol', 'utf8')
      }))
      await run(check.argv[0], check.argv.slice(1), { cwd: root })
      await rm(join(root, 'psychogram/wikis/prelude.md'))
      await expect(run(check.argv[0], check.argv.slice(1), { cwd: root })).rejects.toThrow()
    }
    finally {
      await rm(root, { recursive: true, force: true })
    }
  })

  test('plans read-only against one real target wiki and preserves its content', async () => {
    const wikiPath = new URL('./fixtures/one-real-wiki/psychogram/wikis/', import.meta.url)
    const entryPath = new URL('./fixtures/one-real-wiki/psychogram/wikis/prelude.md', import.meta.url)
    const before = await readFile(entryPath, 'utf8')
    const wikiEntries = (await readdir(wikiPath, { withFileTypes: true })).map(entry => ({
      name: entry.name,
      kind: entry.isFile() ? 'file' as const : 'directory' as const,
    }))
    let reads = 0
    const observed = context(undefined)
    const target = {
      ...observed.target,
      readDirectory: () => {
        reads++
        return Effect.succeed(wikiEntries)
      },
    }
    const exit = await Effect.runPromiseExit(harnessModule.plan({ ...observed, target }))
    expect(Exit.isSuccess(exit)).toBe(true)
    expect(reads).toBe(1)
    expect(await readFile(entryPath, 'utf8')).toBe(before)
  })
})
