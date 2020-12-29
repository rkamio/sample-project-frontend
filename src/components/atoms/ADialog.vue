<template>
  <transition name="dialog" appear>
    <div class="dialog__overlay" @click="onOutsideClick">
      <div class="dialog__window" @click.stop="onInsideClick">
        <div class="dialog__content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ADialog',
  methods: {
    onOutsideClick() {
      this.$emit('outside-click')
    },
    onInsideClick() {},
  },
})
</script>

<style lang="scss" scoped>
@import '../../assets/css/main';

.dialog {
  &__overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  &__window {
    height: 70%;
    width: 70%;
    overflow: hidden;
    background-color: $bright;
  }

  &__content {
    height: 100%;
    padding: 30px;
  }
}

// transition
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.4s;
  .dialog__window {
    transition: opacity 0.4s, transform 0.4s;
  }
}
.dialog-leave-active {
  transition: opacity 0.6s ease 0.4s;
}
.dialog-enter,
.dialog-leave-to {
  opacity: 0;
  .dialog__window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
