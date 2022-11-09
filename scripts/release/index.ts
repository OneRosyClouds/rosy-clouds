import { execaCommandSync } from 'execa'
function runPackageBuild(packagesName: string) {
  // 终端执行shell
  execaCommandSync(`pnpm -F ${packagesName} run release`, {
    stdio: 'inherit',
    encoding: 'utf-8',
  })
}

function main() {
  runPackageBuild('@rosy-clouds/operate')
  runPackageBuild('@rosy-clouds/core')
}
main()

