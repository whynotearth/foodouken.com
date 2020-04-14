<template>
  <div id="app" class="font-sans bg-primary h-full text-gray-300 text-lg">
    <Spinner class="min-h-screen" v-if="getLoading" />
    <div v-show="!getLoading">
      <SiteBanner />
      <router-view
        class="md:px-8 pb-8 px-4 max-w-screen-xxl mx-auto min-h-screen"
        :class="getBannerInfo ? ' pt-16' : ''"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Spinner from '@/components/Spinner.vue';
import SiteBanner from '@/components/SiteBanner.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Footer,
    Spinner,
    SiteBanner
  },
  computed: {
    ...mapGetters('home', ['getLoading', 'getBannerInfo'])
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
