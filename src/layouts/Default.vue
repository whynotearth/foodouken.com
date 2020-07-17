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
        <div class="flex justify-end cursor-pointer mr-3">
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
          class="md:px-8 pb-8 px-4 max-w-screen-xxl mx-auto min-h-screen"
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
      apiError: ''
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
