import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/operate.ts'],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
