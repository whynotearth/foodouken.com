<template>
  <div
    id="app"
    class="font-sans bg-background h-full text-white text-lg antialiased"
  >
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
html,
body {
  @apply bg-background;

  scroll-behavior: smooth;
  touch-action: manipulation;
}
</style>
