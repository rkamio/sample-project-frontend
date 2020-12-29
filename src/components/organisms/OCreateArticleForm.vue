<template>
  <div class="create-article-form">
    <m-article-content
      :title="title"
      :body="body"
      @title-input="onTitleInput"
      @body-input="onBodyInput"
    ></m-article-content>
    <div class="create-article-form__buttons">
      <a-button
        :color="cancelButtonColor"
        :label="cancelButtonLabel"
        :outlined="true"
        @click="onCancelClick"
      ></a-button>
      <a-button :label="createButtonLabel" @click="onCreateClick"></a-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MArticleContent from '@/components/molecules/MArticleContent.vue'
import AButton from '@/components/atoms/AButton.vue'

export default Vue.extend({
  name: 'OCreatedArticleForm',
  components: {
    MArticleContent,
    AButton,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    body: {
      type: String,
      default: '',
    },
  },
  computed: {
    cancelButtonColor() {
      return 'secondary'
    },
    cancelButtonLabel() {
      return 'キャンセル'
    },
    createButtonLabel() {
      return '作成'
    },
  },
  methods: {
    onTitleInput(event: Event) {
      this.$emit('title-input', event)
    },
    onBodyInput(event: Event) {
      this.$emit('body-input', event)
    },
    onCancelClick() {
      this.$emit('cancel-click')
    },
    onCreateClick() {
      this.$emit('create-click')
    },
  },
})
</script>

<style lang="scss">
@import '../../assets/css/main';

.create-article-form {
  display: grid;
  row-gap: 30px;

  &__buttons {
    justify-self: end;
  }
}
</style>
