<template>
  <div class="index">
    <div class="index__articles">
      <a-button :label="articleApplabel" @click="onArticleClick"></a-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AButton from '@/components/atoms/AButton.vue'

export default Vue.extend({
  name: 'Index',
  middleware: ['setupSentryUser'],
  components: {
    AButton,
  },
  computed: {
    articleApplabel() {
      return 'サンプル CRUDアプリ'
    },
  },
  methods: {
    onArticleClick() {
      this.$router.push({ name: 'articles' })
    },
  },
})
</script>

<style lang="scss">
.index {
  display: grid;
  height: 70vh;
  &__articles {
    align-self: center;
    justify-self: center;
  }
}
</style>
