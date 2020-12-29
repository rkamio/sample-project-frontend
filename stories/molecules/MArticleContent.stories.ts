import { action } from '@storybook/addon-actions'
import MArticleContent from '@/components/molecules/MArticleContent.vue'

export default {
  title: '/Molecules/MArticleContent',
  excludeStories: /.*Data$/,
}

const actionsData = {
  onTitleInput: action('onTitleInput'),
  onBodyInput: action('onBodyInput'),
}

export const mArticleContentData = {}

const mArticleContentTemplate = `
<m-article-content 
  v-bind="mArticleContent"
  @title-input="onTitleInput"
  @body-input="onBodyInput"
>
</m-article-content>
`

export const Default = () => ({
  components: { MArticleContent },
  template: mArticleContentTemplate,
  props: {
    mArticleContent: {
      default: () => mArticleContentData,
    },
  },
  methods: actionsData,
})
