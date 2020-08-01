<template>
  <div>
    <BaseAppBarHeader
      v-if="appBar"
      :title="appBar.title"
      :toLink="appBar.backRoute"
      :icon="appBar.icon"
    >
      <template #menu v-if="appBar.newItem">
        <div class="flex-grow">
          <router-link
            :to="{ name: isAuthenticated ? 'Account' : 'LogIn' }"
            class="relative float-right"
          >
            <img
              src="../assets/round-avatar.png"
              class="w-8 h-8 my-auto cursor-pointer"
              v-if="isAuthenticated"
            />
            <span class="text-sm md:text-lg text-button" v-else>
              Login
            </span>
          </router-link>
        </div>
      </template>
    </BaseAppBarHeader>
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
import BaseSiteBanner from '@/components/BaseSiteBanner.vue';
import BaseAppBarHeader from '@/components/BaseAppBarHeader';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ShopLayout',
  components: {
    Footer,
    Spinner,
    CreditFooter,
    BaseSiteBanner,
    BaseAppBarHeader
  },
  data() {
    return {
      isAuthenticated: false
    };
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
  computed: {
    ...mapGetters('shop', ['getLoading']),
    appBar() {
      return this.$route.meta.appBar;
    }
  },
  methods: {
    ...mapActions('auth', ['ping']),
    performRedirect() {
      this.$router.push({ name: this.isAuthenticated ? 'Account' : 'LogIn' });
    }
  }
};
</script>
