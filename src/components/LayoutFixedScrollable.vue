<template functional>
  <div class="page h-full flex flex-col">
    <slot name="header" />
    <div class="flex-grow z-2 overflow-y-hidden">
      <div
        class="px-0 overflow-y-auto overflow-x-hidden flex flex-col h-full narrow-scrollbars"
      >
        <slot name="content" />
      </div>
    </div>
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  name: 'LayoutFixedScrollable'
};
</script>
