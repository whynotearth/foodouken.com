<template>
  <div id="app" class="font-sans bg-primary h-full text-gray-300 text-lg">
    <Spinner class="min-h-screen" v-if="getLoading" />
    <transition name="fade">
      <div v-show="!getLoading">
        <router-view class="md:px-8 pb-8 px-4 max-w-screen-xxl mx-auto min-h-screen" />
        <Footer />
        <CreditFooter />
      </div>
    </transition>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Spinner from '@/components/Spinner.vue';
import CreditFooter from '@/components/CreditFooter.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Footer,
    Spinner,
    CreditFooter
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
  touch-action: manipulation;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
