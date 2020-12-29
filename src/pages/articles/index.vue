<template>
  <div class="articles">
    <div class="articles__new-button">
      <a-button
        color="primary"
        label="新規作成"
        :outlined="true"
        @click="onNewButtonClick"
      ></a-button>
    </div>
    <a-dialog v-if="dialogOpened" @outside-click="onCancelClick">
      <o-create-article-form
        :title="newArticleTitle"
        :body="newArticleBody"
        @title-input="onNewArticleTitleInput"
        @body-input="onNewArticleBodyInput"
        @create-click="onCreateClick"
        @cancel-click="onCancelClick"
      ></o-create-article-form>
    </a-dialog>
    <m-article-list
      :articles="articles"
      @article-click="onArticleClick"
    ></m-article-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createNamespacedHelpers } from 'vuex'
import OCreateArticleForm from '@/components/organisms/OCreateArticleForm.vue'
import MArticleList from '@/components/molecules/MArticleList.vue'
import AButton from '@/components/atoms/AButton.vue'
import ADialog from '@/components/atoms/ADialog.vue'
import { Article } from '@/models/articles/Article'
const { mapActions, mapGetters } = createNamespacedHelpers('articles')

export default Vue.extend({
  name: 'Articles',
  components: {
    OCreateArticleForm,
    MArticleList,
    AButton,
    ADialog,
  },
  data() {
    return {
      dialogOpened: false,
      newArticleTitle: '',
      newArticleBody: '',
    }
  },
  computed: {
    ...mapGetters(['articles']),
  },
  methods: {
    ...mapActions(['createArticle']),
    onNewArticleTitleInput(input: string) {
      this.newArticleTitle = input
    },
    onNewArticleBodyInput(input: string) {
      this.newArticleBody = input
    },
    onArticleClick(event: Event) {
      this.$router.push({
        path: `/articles/${event}`,
      })
    },
    onNewButtonClick() {
      this.dialogOpened = true
    },
    onCancelClick() {
      this.dialogOpened = false
    },
    onCreateClick() {
      const creatingArticle: Article = {
        title: this.newArticleTitle,
        body: this.newArticleBody,
      }
      this.createArticle(creatingArticle)
      this.dialogOpened = false
    },
  },
})
</script>

<style lang="scss">
.articles {
  display: grid;
  row-gap: 50px;

  &__new-button {
    justify-self: end;
    margin-right: 15px;
  }
}
</style>
