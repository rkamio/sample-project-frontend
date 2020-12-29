import { action } from '@storybook/addon-actions'
import OHeader from '@/components/organisms/OHeader.vue'

export default {
  title: '/Organisms/OHeader',
  component: OHeader,
  excludeStories: /.*Data$/,
}

const actionsData = {
  onTitleClick: action('onTitleClick'),
}

export const oHeaderData = {
  title: 'タイトル',
}

const oHeaderTemplate = `<o-header v-bind="oHeader" @title-click="onTitleClick"></o-header>`
export const Default = () => ({
  components: { OHeader },
  template: oHeaderTemplate,
  props: {
    oHeader: {
      default: () => oHeaderData,
    },
  },
  methods: actionsData,
})
