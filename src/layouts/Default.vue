<template>
  <div>
    <Spinner class="min-h-screen" v-if="getLoading" />
    <transition name="fade">
      <div v-show="!getLoading">
        <router-view
          class="md:px-8 pb-8 px-4 max-w-screen-xxl mx-auto min-h-screen"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'DefaultLayout',
<<<<<<< HEAD
  components: {
    Spinner
=======
  components: { Spinner, BaseSiteBanner },
  data() {
    return {
      maintenanceMode: false
    };
>>>>>>> f7e1e8c... chore: disable maintenance mode
  },
  computed: {
    ...mapGetters('home', ['getLoading'])
  }
};
</script>
