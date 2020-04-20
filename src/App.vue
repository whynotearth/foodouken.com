<template>
  <div id="app" class="font-sans bg-primary h-full text-gray-300 text-lg">
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
