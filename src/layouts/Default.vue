<template>
  <div>
    <Spinner class="min-h-screen" v-if="getLoading" />
    <transition name="fade">
      <div v-show="!getLoading">
        <BaseSiteBanner>
          Foodouken is now in Open Beta
          <a
            href="https://www.reddit.com/r/opensource/comments/herzsw/we_are_foodukencom_an_opensource_food_delivery/?utm_medium=android_app&utm_source=share"
            class="underline"
          >
            #DeleteFoodPanda
          </a>
          ✊
        </BaseSiteBanner>
        <router-view
          class="md:px-8 pb-8 px-4 max-w-screen-xxl mx-auto min-h-screen"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import BaseSiteBanner from '@/components/BaseSiteBanner.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'DefaultLayout',
  components: {
    Spinner,
    BaseSiteBanner
  },
  computed: {
    ...mapGetters('home', ['getLoading'])
  }
};
</script>
