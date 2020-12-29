import { action } from '@storybook/addon-actions'
import OChangeArticleForm from '@/components/organisms/OChangeArticleForm.vue'

export default {
  title: '/Organisms/OChangeArticleForm',
  component: OChangeArticleForm,
  excludeStories: /.*Data$/,
}

const actionsData = {
  onTitleInput: action('onTitleInput'),
  onBodyInput: action('onBodyInput'),
  onDeleteClick: action('onDeleteClick'),
  onUpdateClick: action('onUpdateClick'),
}

export const oChangeArticleFormData = {
  title: 'title',
  body: 'body',
}

const oChangeArticleFormTemplate = `
<o-change-article-form 
  v-bind="oChangeArticleForm"
  @title-input="onTitleInput"
  @body-input="onBodyInput"
  @delete-click="onDeleteClick"
  @update-click="onUpdateClick"
></o-change-article-form>
`

export const Default = () => ({
  components: { OChangeArticleForm },
  template: oChangeArticleFormTemplate,
  props: {
    oChangeArticleForm: {
      default: () => oChangeArticleFormData,
    },
  },
  methods: actionsData,
})
