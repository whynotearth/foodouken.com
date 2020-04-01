<template>
  <div id="app" class="font-sans bg-primary h-full max-w-screen-xl">
    <Navbar />
    <router-view class="md:mx-8 pb-5 mx-4" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
