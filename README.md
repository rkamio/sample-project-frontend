# sample-project-frontend
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Requirements
``` BASH
$ node --version
v14.5.0

$ yarn --version
1.22.10
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Storybook
```bash
$ yarn add --dev @nuxtjs/storybook
$ yarn nuxt storybook eject
$ mkdir stories
```

## ts-jest
``` BASH
$ yarn add -D @types/jest
# tsconfig.jsonのtypesに追加
```
## SRE/Growth Hack
### Sentry
- gmailアカウント
- nuxt.config.jsいじる

### GoogleAnalytics
- Univarsal Analytics
  - https://ja.nuxtjs.org/faq/ga/
  - https://google-analytics.nuxtjs.org/setup

- GA4
  - GoogleTagManager
    - https://github.com/nuxt-community/gtm-module

### その他
- アンケート: https://www.qualtrics.com/jp/ 

## TODO
- ストアの型付けちゃんとやる
- Circle CI ^ Travis CI

## メモ
- Atoms(原子): @/components/atoms
    - ボタンやテキスト入力などの分けられない単位。

- Molecules(分子): @/components/molecules
    - ボタンやテキスト入力を組み合わせたフォームなど。
    - ユーザーの動作を促すもの。

- Organisms(有機体): @/components/organisms
    - フォームだったりボタンなど組み合わせたヘッダーなど。
    - コンテンツが完結しているもの。

- Templates(テンプレート): @/layouts
    - ヘッダーとかフッターを組み合わせたページの枠組み。

- Pages(ページ): @/pages
    - テンプレートの枠組みに内容を入れた状態がページ。

参考: https://qiita.com/AJIKING/items/9ab941209af8562d7b2e
参考: https://note.com/rhirayamaaan/n/nac9882b14b44
参考: https://engineer.retty.me/entry/2018/12/01/120019

