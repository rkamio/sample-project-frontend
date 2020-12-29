<template>
  <div class="header">
    <div class="header__title" @click="onTitleClick">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'OHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    onTitleClick() {
      this.$emit('title-click')
    },
  },
})
</script>

<style lang="scss">
@import '../../assets/css/main';

.header {
  background-color: $dark;
  padding: 7px 10px 7px 10px;

  display: grid;

  &__title {
    font-size: 25px;
    font-weight: bold;
    color: $bright;
    cursor: pointer;
  }
}
</style>
