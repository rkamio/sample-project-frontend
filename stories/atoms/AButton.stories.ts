import { action } from '@storybook/addon-actions'
import AButton from '@/components/atoms/AButton.vue'

export default {
  title: '/Atoms/AButton',
  component: AButton,
  excludeStories: /.*Data$/,
}

const actionsData = {
  onClick: action('onClick'),
}

export const aButtonData = {
  label: '確定',
  color: 'primary',
  outlined: true,
}

const aButtonTemplate = `<a-button v-bind="aButton" @click="onClick"></a-button>`
export const Default = () => ({
  components: { AButton },
  template: aButtonTemplate,
  props: {
    aButton: {
      default: () => aButtonData,
    },
  },
  methods: actionsData,
})
