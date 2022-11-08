import { execaCommandSync } from 'execa'
import fse from 'fs-extra'
import fsg from 'fast-glob'
import { DIST_PATH } from '../config/path'
let css = ''
function runPackageBuild(packagesName: string) {
  // 终端执行shell
  execaCommandSync(`pnpm -F ${packagesName} run build`, {
    stdio: 'inherit',
    encoding: 'utf-8',
  })
}

function createDistDir() {
  execaCommandSync('mkdir -p dist', {
    stdio: 'inherit',
    encoding: 'utf-8',
  })
}

function copyDirToDist() {
  fse.copySync('./packages/core/dist', './dist/core')
  fse.copySync('./packages/operate/dist', './dist/operate')
}

function findCssFiles() {
  const files = fsg.sync('./packages/core/**/**.css')
  return files
}

function copyFile(from: string, to: string) {
  fse.copySync(from, to)
}

function copyCssFiles() {
  const cssFiles = findCssFiles()
  cssFiles.forEach((cssFile) => {
    css += `${fse.readFileSync(cssFile, 'utf-8')}\n`
    const names = cssFile.split('/')
    const to = `${DIST_PATH}/${names[names.length - 2]}/${names[names.length - 1]}`
    copyFile(cssFile, to)
  })
  createAllCss()
}

function createAllCss() {
  fse.writeFileSync('./dist/all.css', css)
}

function createExporterIndexFile() {
  const coreIndex = './core/index.ts.mjs'
  const operateIndex = './operate/index.ts.mjs'
  const body = `export * from '${coreIndex}'\nexport * from '${operateIndex}'`
  fse.writeFileSync('./dist/index.mjs', body)
}

function mergeDTs() {
  const coreDTs = './core/index.ts.d.ts'
  const operateDTs = './operate/index.ts.d.ts'
  const body = `export * from '${coreDTs}'\nexport * from '${operateDTs}'`
  fse.writeFileSync('./dist/index.d.ts', body)
}

function main() {
  execaCommandSync('rm -rf dist', {
    stdio: 'inherit',
    encoding: 'utf-8',
  })
  createDistDir()
  runPackageBuild('@rosy-clouds/operate')
  runPackageBuild('@rosy-clouds/core')
  copyDirToDist()
  copyCssFiles()
  createExporterIndexFile()
  mergeDTs()
}
main()

