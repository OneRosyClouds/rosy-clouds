import path from 'path'
import { fileURLToPath } from 'url'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
import css from 'rollup-plugin-import-css'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  input: 'index.ts',
  output: [
    {
      file: path.resolve(__dirname, 'dist/index.es.js'),
      format: 'es',
      sourcemap: true, // ts中的sourcemap也得变为true
    },
    {
      file: path.resolve(__dirname, 'dist/index.cjs.js'),
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve({
      extensions: ['.ts'],
    }),
    ts({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    }),
    css({
      output: path.resolve(__dirname, 'dist/assets/index.css'),
    }),
  ],
}
