<template>
  <div>
    <Spinner class="min-h-screen" v-if="getLoading" />
    <transition name="fade">
      <div v-show="!getLoading">
        <router-view class="max-w-screen-xxl mx-auto min-h-screen" />
      </div>
    </transition>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'TenantLayout',
  components: {
    Spinner
  },
  computed: {
    ...mapGetters('home', ['getLoading'])
  }
};
</script>
