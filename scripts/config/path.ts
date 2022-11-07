import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const ROOT_PATH = path.resolve(__dirname, '../..')

export const PACKAGES_PATH = path.resolve(ROOT_PATH, 'packages')

export const CORE_PATH = path.resolve(PACKAGES_PATH, 'core')

export const CORE_SRC = path.resolve(CORE_PATH, 'src')

export const OPERATE_PATH = path.resolve(PACKAGES_PATH, 'operate')
