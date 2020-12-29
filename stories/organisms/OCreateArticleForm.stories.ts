import { action } from '@storybook/addon-actions'
import OCreateArticleForm from '@/components/organisms/OCreateArticleForm.vue'

export default {
  title: '/Organisms/OCreateArticleForm',
  excludeStories: /.*Data$/,
}

const actionsData = {
  onTitleInput: action('onTitleInput'),
  onBodyInput: action('onBodyInput'),
  onCancelClick: action('onCancelClick'),
  onCreateClick: action('onCreateClick'),
}

export const oCreateArticleFormData = {
  title: '',
  body: '',
}

const oCreateArticleFormTemplate = `
<o-create-article-form 
  v-bind="oCreateArticleForm"
  @title-input="onTitleInput"
  @body-input="onBodyInput"
  @cancel-click="onCancelClick"
  @create-click="onCreateClick"
></o-create-article-form>
`

export const Default = () => ({
  components: { OCreateArticleForm },
  template: oCreateArticleFormTemplate,
  props: {
    oCreateArticleForm: {
      default: () => oCreateArticleFormData,
    },
  },
  methods: actionsData,
})
