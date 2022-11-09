import path from 'path'
import fse from 'fs-extra'
import fsg from 'fast-glob'
import { CORE_PATH } from '../../../scripts/config/path'

let css = ''

async function main() {
  const cssFiles = await findCssFiles()
  await copyCssFiles(cssFiles)
  await generateCssFile()
}
main()

async function generateCssFile() {
  await fse.writeFile(path.resolve(CORE_PATH, 'dist', 'all.css'), css)
}

async function findCssFiles() {
  const cssFiles = fsg('**/**.css', {
    cwd: path.resolve(CORE_PATH, 'src'),
  })
  return cssFiles
}

async function copyCssFiles(cssFiles: string[]) {
  const promises = cssFiles.map((cssFile) => {
    const [model, name, filename] = cssFile.split('/')
    fse.mkdirpSync(path.resolve(CORE_PATH, 'dist', model, name))
    css += fse.readFileSync(path.resolve(CORE_PATH, 'src', cssFile), 'utf-8')
    return fse.copyFile(path.resolve(CORE_PATH, 'src', cssFile), path.resolve(CORE_PATH, 'dist', model, name, filename))
  })
  await Promise.all(promises)
}
