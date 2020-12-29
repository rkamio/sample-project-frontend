import ADialog from '@/components/atoms/ADialog.vue'

export default {
  title: '/Atoms/ADialog',
  component: ADialog,
  excludeStories: /.*Data$/,
}

const actionsData = {}

export const aDialogData = {}

const aDialogTemplate = `
<a-dialog v-bind="aDialog">
  <div>ダイアログコンテンツ</div>
</a-dialog>
`

export const Default = () => ({
  components: { ADialog },
  template: aDialogTemplate,
  props: {
    aDialog: {
      default: () => aDialogData,
    },
  },
  methods: actionsData,
})
