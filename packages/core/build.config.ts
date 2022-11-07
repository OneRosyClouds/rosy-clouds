import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/core.ts'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
