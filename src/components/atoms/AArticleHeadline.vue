<template>
  <div class="article-headline" @click="onClick">
    <div class="article-headline__title">{{ title }}</div>
    <div class="article-headline__updated-at">{{ updatedAt }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AArticleHeadline',
  props: {
    articleId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    updatedAt: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('click', this.articleId)
    },
  },
})
</script>

<style lang="scss">
@import '../../assets/css/main';

.article-headline {
  display: grid;
  margin: 0 10px 0 10px;
  padding: 0 10px 0 10px;
  grid-template-columns: auto 1fr;
  align-items: end;
  @extend %text-regular;

  &__title {
    font-size: 20px;
  }

  &__updated-at {
    justify-self: end;
  }
}

.article-headline:hover {
  background-color: $light;
  border-radius: 5px;
}
</style>
