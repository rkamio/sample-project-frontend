<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="onInput"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AInput',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput(event: Event) {
      if (event.target instanceof HTMLInputElement)
        this.$emit('input', event.target.value)
    },
  },
})
</script>

<style lang="scss">
@import '../../assets/css/main';

input[type='text'] {
  width: 100%;
  border: solid 1px $light;
  border-radius: 5px;
  background-color: $bright;
}

input[type='text']:focus {
  outline: none;
  border: solid 1px $dark;
}
</style>
