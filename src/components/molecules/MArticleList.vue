<template>
  <div class="article-list">
    <div v-for="article in articles" :key="article.id">
      <a-article-headline
        :article-id="article.id"
        :title="article.title"
        :updated-at="article.updatedAt"
        @click="onArticleClick"
      ></a-article-headline>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import AArticleHeadline from '@/components/atoms/AArticleHeadline.vue'
import { Article } from '@/models/articles/Article'

export default Vue.extend({
  name: 'MArticleList',
  components: {
    AArticleHeadline,
  },
  props: {
    articles: {
      type: Array as PropType<Article[]>,
      default: () => [],
    },
  },
  methods: {
    onArticleClick(event: Event) {
      this.$emit('article-click', event)
    },
  },
})
</script>

<style lang="scss">
@import '../../assets/css/main';

.article-list {
  display: grid;
  row-gap: 5px;
}
</style>
