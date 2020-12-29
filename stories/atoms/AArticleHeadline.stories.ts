import { action } from '@storybook/addon-actions'
import AArticleHeadline from '@/components/atoms/AArticleHeadline.vue'

export default {
  title: '/Atoms/AArticleHeadline',
  component: AArticleHeadline,
  excludeStories: /.*Data$/,
}

const actionsData = {
  onClick: action('onClick'),
}

export const aArticleHeadlineData = {
  articleId: 'id',
  title: 'タイトル',
  updatedAt: '2020-01-01',
}

const aArticleHeadlineTemplate = `<a-article-headline v-bind="aArticleHeadline" @click="onClick"></a-article-headline>`
export const Default = () => ({
  components: { AArticleHeadline },
  template: aArticleHeadlineTemplate,
  props: {
    aArticleHeadline: {
      default: () => aArticleHeadlineData,
    },
  },
  methods: actionsData,
})
