<template>
  <input
    type="button"
    :value="label"
    :class="aButtonClass"
    class="button"
    @click="onClick"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'primary',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    aButtonClass() {
      if (this.outlined) {
        return {
          [`button__${this.color}-outlined`]: true,
        }
      } else {
        return {
          [`button__${this.color}`]: true,
        }
      }
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
})
</script>

<style lang="scss">
@import '../../assets/css/main';

.button {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
  background: transparent;
  font-weight: bold;
  padding: 10px 30px;

  &__primary {
    background-color: $primary;
    color: $bright;
  }

  &__primary-outlined {
    background-color: $bright;
    color: $primary;
    border: solid 1px $primary;
  }

  &__secondary {
    background-color: $secondary;
    color: $bright;
  }

  &__secondary-outlined {
    background-color: $bright;
    color: $secondary;
    border: solid 1px $light;
  }

  &__accent {
    background-color: $accent;
    color: $bright;
  }

  &__accent-outlined {
    background-color: $bright;
    color: $accent;
    border: solid 1px $accent;
  }
}
</style>
