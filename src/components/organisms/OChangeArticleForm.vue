<template>
  <div class="change-article-form">
    <m-article-content
      :title="title"
      :body="body"
      @title-input="onTitleInput"
      @body-input="onBodyInput"
    ></m-article-content>
    <div class="change-article-form__buttons">
      <a-button
        :color="deleteButtonColor"
        :label="deleteButtonLabel"
        :outlined="true"
        @click="onDeleteClick"
      ></a-button>
      <a-button :label="updateButtonLabel" @click="onUpdateClick"></a-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MArticleContent from '@/components/molecules/MArticleContent.vue'
import AButton from '@/components/atoms/AButton.vue'

export default Vue.extend({
  name: 'OChangeArticleForm',
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
    deleteButtonColor() {
      return 'accent'
    },
    deleteButtonLabel() {
      return '削除'
    },
    updateButtonLabel() {
      return '編集'
    },
  },
  methods: {
    onTitleInput(event: Event) {
      this.$emit('title-input', event)
    },
    onBodyInput(event: Event) {
      this.$emit('body-input', event)
    },
    onDeleteClick() {
      this.$emit('delete-click')
    },
    onUpdateClick() {
      this.$emit('update-click')
    },
  },
})
</script>

<style lang="scss">
@import '../../assets/css/main';

.change-article-form {
  display: grid;
  row-gap: 30px;

  &__buttons {
    justify-self: end;
  }
}
</style>
