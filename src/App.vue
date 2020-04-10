<template>
  <div id="app" class="font-sans bg-primary h-full text-gray-300 text-lg">
    <Spinner class="min-h-screen" v-if="getLoading" />
    <div v-show="!getLoading">
      <router-view
        class="md:px-8 pb-8 px-4 max-w-screen-xxl mx-auto min-h-screen"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Spinner from '@/components/Spinner.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Footer,
    Spinner
  },
  computed: {
    ...mapGetters('home', ['getLoading'])
  }
};
</script>

<style>
html,
body {
  scroll-behavior: smooth;
  background-color: #003037;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
