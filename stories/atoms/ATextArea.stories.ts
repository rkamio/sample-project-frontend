import { action } from '@storybook/addon-actions'
import ATextArea from '@/components/atoms/ATextArea.vue'

export default {
  title: '/Atoms/ATextArea',
  component: ATextArea,
  excludeStories: /.*Data$/,
}

const actionsData = {
  onInput: action('onInput'),
}

export const aTextAreaData = {
  placeholder: 'textarea',
  value: 'test',
}

const aTextAreaTemplate = `
<div style="height:50vh">
  <a-text-area v-bind="aTextArea" @input="onInput"></a-text-area>
</div>
`

export const Default = () => ({
  components: { ATextArea },
  template: aTextAreaTemplate,
  props: {
    aTextArea: {
      default: () => aTextAreaData,
    },
  },
  methods: actionsData,
})
