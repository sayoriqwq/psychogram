import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/prelude.ts'],
  outDir: 'dist',
  format: 'esm',
  dts: true,
  deps: {
    neverBundle: ['@sayoriqwq/prelude-contract', 'effect'],
  },
})
