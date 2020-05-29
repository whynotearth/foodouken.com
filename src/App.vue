<template>
  <div id="app" class="font-sans bg-background h-full text-white text-lg">
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
  scroll-behavior: smooth;
  background-color: #003037;
  touch-action: manipulation;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
