<template>
  <div class="page h-full flex flex-col position-relative">
    <slot name="header" />
    <div class="flex-grow z-10 overflow-y-auto narrow-scrollbars">
      <div class="px-0 flex flex-col h-full">
        <transition name="fadeslow" mode="out-in">
          <slot v-if="isVisible" name="content" />
        </transition>
      </div>
    </div>
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  name: 'LayoutFixedScrollable',
  data: () => ({
    isVisible: false
  }),
  mounted() {
    this.isVisible = true;
  }
};
</script>
