<template>
  <div class="container">
    <div class="header">
      <o-header title="サンプル" @title-click="onTitleClick"></o-header>
    </div>
    <div class="main">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import OHeader from '@/components/organisms/OHeader.vue'

export default Vue.extend({
  name: 'Default',
  components: {
    OHeader,
  },
  methods: {
    onTitleClick() {
      this.$router.push({ name: 'index' })
    },
  },
})
</script>

<style lang="scss">
@import '../assets/css/main';
.container {
  display: grid;
}

.main {
  width: 60vw;
  padding: 30px 30px 30px 30px;
  justify-self: center;
}
</style>
