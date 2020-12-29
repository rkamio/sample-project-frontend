import { action } from '@storybook/addon-actions'
import AInput from '@/components/atoms/AInput.vue'

export default {
  title: '/Atoms/AInput',
  component: AInput,
  excludeStories: /.*Data$/,
}

const actionsData = {
  onInput: action('onInput'),
}

export const aInputData = {
  placeholder: 'input',
  value: 'test',
}

const aInputTemplate = `
<a-input v-bind="aInput" @input="onInput"></a-input>
`

export const Default = () => ({
  components: { AInput },
  template: aInputTemplate,
  props: {
    aInput: {
      default: () => aInputData,
    },
  },
  methods: actionsData,
})
