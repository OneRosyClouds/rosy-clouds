import path from 'path'
import fs from 'fs-extra'
import { CORE_SRC } from '../config/path'

function main() {
  const [, , model, name] = process.argv

  const isExists = checkDirIsExists(path.resolve(CORE_SRC, model))

  if (!isExists) {
    console.log(`模块 ${model} 不存在`)
    return
  }

  const modelPath = path.resolve(CORE_SRC, model, name)
  const waitingForTheGeneratedFiles = [`${name}.ts`, `${name}.css.css`, `${name}.transitions.css`]
  const files = waitingForTheGeneratedFiles.map(file => path.resolve(modelPath, file))
  console.log({ modelPath })

  fs.mkdirpSync(modelPath)
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    if (!fs.existsSync(file))
      fs.writeFileSync(file, '')
  }
}

function checkDirIsExists(dir: string) {
  return fs.existsSync(dir)
}

main()
