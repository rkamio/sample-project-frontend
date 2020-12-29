import { action } from '@storybook/addon-actions'
import MArticleList from '@/components/molecules/MArticleList.vue'

export default {
  title: '/Molecules/MArticleList',
  component: MArticleList,
  excludeStories: /.*Data$/,
}

const actionsData = {
  onArticleClick: action('onArticleClick'),
}

export const mArticleListData = {
  articles: [
    { id: '1', title: 'test', body: 'test', updatedAt: '2020-01-01' },
    { id: '2', title: 'hoge', body: 'hoge', updatedAt: '2020-01-02' },
  ],
}

const mArticleListTemplate = `
<m-article-list 
  v-bind="mArticleList"
  @article-click="onArticleClick"
></m-article-list>
`

export const Default = () => ({
  components: { MArticleList },
  template: mArticleListTemplate,
  props: {
    mArticleList: {
      default: () => mArticleListData,
    },
  },
  methods: actionsData,
})
