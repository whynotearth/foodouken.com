<template>
  <transition name="slide-down">
    <div
      class="fixed rounded-md bottom-0 left-0 right-0 mx-4 bg-footer text-white"
      v-if="showSnackBar"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SnackBar',
  props: {
    showSnackBar: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.slide-down-leave-active {
  animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.slide-down-leave /* .fade-leave-active below version 2.1.8 */ {
  animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@keyframes slide-out-bottom {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(1000px);
    opacity: 0;
  }
}
</style>
