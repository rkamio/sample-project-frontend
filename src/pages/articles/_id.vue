<template>
  <div class="article">
    <div class="article__back-link">
      <nuxt-link to="/articles">一覧へ戻る</nuxt-link>
    </div>
    <o-change-article-form
      :title="article ? article.title : ''"
      :body="article ? article.body : ''"
      @title-input="onTitleInput"
      @body-input="onBodyInput"
      @update-click="onUpdateClick"
      @delete-click="onDeleteClick"
    ></o-change-article-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createNamespacedHelpers } from 'vuex'
import OChangeArticleForm from '@/components/organisms/OChangeArticleForm.vue'
import { Article } from '@/models/articles/Article'
const { mapActions, mapGetters } = createNamespacedHelpers('articles')

export default Vue.extend({
  name: 'ArticleId',
  components: {
    OChangeArticleForm,
  },
  data() {
    return {
      updatingTitle: '',
      updatingBody: '',
    }
  },
  computed: {
    ...mapGetters(['getArticleById']),
    article(): Article {
      return this.getArticleById(this.$route.params.id)
    },
  },
  mounted() {
    this.updatingTitle = this.article.title
    this.updatingBody = this.article.body
  },
  methods: {
    ...mapActions(['deleteArticle', 'updateArticle']),
    onTitleInput(input: string) {
      this.updatingTitle = input
    },
    onBodyInput(input: string) {
      this.updatingBody = input
    },
    onDeleteClick() {
      this.redirectArticles()
      this.deleteArticle(this.article.id)
    },
    onUpdateClick() {
      const updatingArticle = {
        id: this.article.id,
        title: this.updatingTitle,
        body: this.updatingBody,
      }
      this.updateArticle(updatingArticle)
      this.redirectArticles()
    },
    redirectArticles() {
      this.$router.push({ name: 'articles' })
    },
  },
})
</script>

<style lang="scss">
@import '../../assets/css/main';

.article {
  display: grid;
  row-gap: 30px;

  &__back-link {
    justify-self: end;
  }
}
</style>
