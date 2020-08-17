<template>
  <transition name="slide-down">
    <div
      class="fixed rounded-md bottom-0 left-0 right-0 mx-4 bg-footer text-lg text-white"
      v-if="showSnackBar"
    >
      <div
        class="flex items-center justify-between text-white w-full h-12 text-xs leading-4 p-4"
      >
        <slot></slot>
      </div>
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
  -webkit-animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.slide-down-leave /* .fade-leave-active below version 2.1.8 */ {
  -webkit-animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@-webkit-keyframes slide-out-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
}
@keyframes slide-out-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
}
</style>
