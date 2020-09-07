<template>
  <div
    v-bind:class="{'safe-top safe-left safe-right safe-bottom mt-10': isMobile}"
  >
    <Spinner class="min-h-screen" v-if="getLoading" />
    <transition name="fade">
      <div v-show="!getLoading">
        <BaseSiteBanner  v-if="!isMobile">
          Foodouken is now in Open Beta
          <a
            href="https://www.reddit.com/r/opensource/comments/herzsw/we_are_foodukencom_an_opensource_food_delivery/?utm_medium=android_app&utm_source=share"
            class="underline"
          >
            #DeleteFoodPanda
          </a>
          ✊
        </BaseSiteBanner>
        <div class="flex justify-end mr-3 cursor-pointer">
          <img
            class="w-10 h-10"
            src="../assets/round-avatar.png"
            v-if="isAuthenticated"
            @click="performRedirect"
          />
          <span
            class="text-sm md:text-lg text-button"
            v-else
            @click="performRedirect"
          >
            Login
          </span>
        </div>
        <router-view
          class="min-h-screen px-4 pb-8 mx-auto md:px-8 max-w-screen-xxl"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import BaseSiteBanner from '@/components/BaseSiteBanner.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'DefaultLayout',
  components: {
    Spinner,
    BaseSiteBanner
  },
  data() {
    return {
      isAuthenticated: false,
      apiError: '',
      isMobile: process.env.VUE_APP_MOBILE === 'true'
    };
  },
  computed: {
    ...mapGetters('home', ['getLoading'])
  },
  created() {
    this.ping()
      .then(response => {
        if (response.isAuthenticated) {
          this.isAuthenticated = response.isAuthenticated;
        }
      })
      .catch(error => {
        this.isAuthenticated = false;
        this.apiError = error.response.data.title
          ? error.response.data.title
          : 'Something went wrong, try again.';
        throw error;
      });
  },
  methods: {
    ...mapActions('auth', ['ping']),
    performRedirect() {
      this.$router.push({ name: this.isAuthenticated ? 'Account' : 'LogIn' });
    }
  }
};
</script>
