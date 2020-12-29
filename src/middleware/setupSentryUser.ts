export default function ({ $sentry }: any): void {
  $sentry.configureScope((scope: any) => {
    scope.setUser({ id: 'hoge', username: 'hogehoge' })
  })
}
