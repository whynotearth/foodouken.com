<template>
  <div>
    <Spinner class="min-h-screen" v-if="getLoading" />
    <transition name="fade">
      <div v-show="!getLoading">
        <BaseSiteBanner title="Maintenance Mode" />
        <router-view
          class="md:px-8 pb-8 px-4 max-w-screen-xxl mx-auto min-h-screen"
        />
        <Footer />
        <CreditFooter />
      </div>
    </transition>
  </div>
</template>

<script>
import BaseSiteBanner from '@/components/BaseSiteBanner';
import Footer from '@/components/Footer.vue';
import Spinner from '@/components/Spinner.vue';
import CreditFooter from '@/components/CreditFooter.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ShopLayout',
  components: {
    Footer,
    Spinner,
    CreditFooter,
    BaseSiteBanner
  },
  computed: {
    ...mapGetters('shop', ['getLoading'])
  }
};
</script>
