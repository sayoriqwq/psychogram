import { createHash } from 'node:crypto'
import { readdir, readFile, stat } from 'node:fs/promises'
import { join, relative } from 'node:path'

const root = process.cwd()
const pairs = [
  ['harness', 'assets/managed/harness'],
  ['template', 'assets/managed/template'],
  ['projections/codex.md', 'assets/managed/projections/codex.md'],
] as const

async function files(path: string): Promise<string[]> {
  const entries = await readdir(path)
  const nested = await Promise.all(entries.sort().map(async (entry) => {
    const location = join(path, entry)
    return (await stat(location)).isDirectory() ? files(location) : [location]
  }))
  return nested.flat()
}

async function digest(path: string): Promise<string> {
  return createHash('sha256').update(await readFile(path)).digest('hex')
}

for (const [source, asset] of pairs) {
  const sourcePath = join(root, source)
  const assetPath = join(root, asset)
  const sourceFiles = (await stat(sourcePath)).isDirectory() ? await files(sourcePath) : [sourcePath]
  const assetFiles = (await stat(assetPath)).isDirectory() ? await files(assetPath) : [assetPath]
  const sourceRelative = sourceFiles.map(file => relative(sourcePath, file))
  const assetRelative = assetFiles.map(file => relative(assetPath, file))
  if (JSON.stringify(sourceRelative) !== JSON.stringify(assetRelative))
    throw new Error(`asset paths differ: ${source}`)

  for (const file of sourceRelative) {
    if (await digest(join(sourcePath, file)) !== await digest(join(assetPath, file)))
      throw new Error(`asset bytes differ: ${source}/${file}`)
  }
}
