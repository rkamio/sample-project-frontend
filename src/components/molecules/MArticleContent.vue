<template>
  <div class="article-content">
    <div class="article-content__title">
      <a-input
        :placeholder="titlePlaceholder"
        :value="title"
        @input="onTitleInput"
      ></a-input>
    </div>
    <div class="article-content__body">
      <a-text-area
        :placeholder="bodyPlaceholder"
        :value="body"
        @input="onBodyInput"
      ></a-text-area>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AInput from '@/components/atoms/AInput.vue'
import ATextArea from '@/components/atoms/ATextArea.vue'

export default Vue.extend({
  name: 'MArticleContent',
  components: {
    AInput,
    ATextArea,
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
    titlePlaceholder() {
      return 'タイトル'
    },
    bodyPlaceholder() {
      return '本文'
    },
  },
  methods: {
    onTitleInput(event: Event) {
      this.$emit('title-input', event)
    },
    onBodyInput(event: Event) {
      this.$emit('body-input', event)
    },
  },
})
</script>

<style lang="scss">
.article-content {
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 30px;

  &__title {
    width: 400px;
  }

  &__body {
    height: 300px;
  }
}
</style>
