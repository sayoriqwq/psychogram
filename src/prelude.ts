import { Effect } from 'effect'
import {
  defineHarnessModule,
  MODULE_PROTOCOL_V1,
  V1_FEATURE,
  type DirectoryEntry,
  type HarnessModule,
  type ObservationError,
} from '@sayoriqwq/prelude-contract'

const managedTree = {
  kind: 'ManagedTree' as const,
  id: 'psychogram.managed-protocol',
  sourceRoot: 'assets/managed',
  targetRoot: 'psychogram/managed',
}

const rootRouting = {
  kind: 'ManagedBlock' as const,
  id: 'psychogram.root-agent-routing',
  path: 'AGENTS.md',
  blockId: 'psychogram-routing',
  content: `## Psychogram protocol

Route Psychogram protocol work through \`psychogram/managed/harness/agents/router.md\`.
The managed protocol is maintained by the Artifact; real concept-wiki content under
\`psychogram/wikis/\` remains target-owned.`,
}

function wikiEntry(entries: ReadonlyArray<DirectoryEntry> | undefined): string | undefined {
  return entries
    ?.filter(entry => entry.kind === 'file' && entry.name.endsWith('.md'))
    .map(entry => entry.name)
    .sort()[0]
}

/**
 * The only target observation is the target-owned wiki directory. Planning never
 * turns that observation into an Output, so Prelude cannot claim wiki content.
 */
export const harnessModule: HarnessModule<ObservationError> = defineHarnessModule({
  descriptor: {
    harnessId: 'psychogram',
    protocolVersion: MODULE_PROTOCOL_V1,
    requiredFeatures: [
      V1_FEATURE.artifactAssets,
      V1_FEATURE.blockingIssues,
      V1_FEATURE.managedBlock,
      V1_FEATURE.managedTree,
      V1_FEATURE.targetChecks,
      V1_FEATURE.targetObservation,
    ],
  },
  plan: context => Effect.map(
    context.target.readDirectory('psychogram/wikis'),
    (wikiEntries) => {
      const entry = wikiEntry(wikiEntries)
      return {
        outputs: [managedTree, rootRouting],
        requirements: [],
        checks: [{
          id: 'psychogram.protocol-readable',
          summary: 'Check that the managed Psychogram protocol and target-owned wiki entry are readable',
          packageRoot: context.integration.packageRoot,
          argv: [
            'node',
            '--input-type=module',
            '--eval',
            "import { readFile } from 'node:fs/promises'; await Promise.all(process.argv.slice(1).map(path => readFile(path)))",
            'psychogram/managed/harness/lead.md',
            'psychogram/managed/template/wiki/lead.md',
            'psychogram/managed/projections/codex.md',
            `psychogram/wikis/${entry ?? 'prelude.md'}`,
          ],
        }],
        issues: entry === undefined
          ? [{
            id: 'psychogram.wiki-entry-missing',
            summary: 'The target-owned Psychogram wiki has no Markdown entry page',
            detail: 'Create or restore a Markdown entry page under psychogram/wikis/. Prelude will not create wiki content.',
            evidence: 'psychogram/wikis/ is missing or contains no Markdown files.',
            guidance: 'assets/guidance/target-owned-wiki.md',
          }]
          : [],
      }
    },
  ),
})
