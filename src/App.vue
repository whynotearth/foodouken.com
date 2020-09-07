<template>
  <div
    id="app"
    class="h-full font-sans text-lg antialiased text-white bg-background"
  >
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
    <transition name="fade">
      <div
        v-if="overlayModel.title || overlayModel.message"
        class="fixed top-0 left-0 block w-full h-full z-110"
      >
        <BaseOverlaySuccess
          :title="overlayModel.title"
          :message="overlayModel.message"
        />
      </div>
    </transition>
    <SnackBar v-if="!isMobile" :showSnackBar="showPrivacySnackBar">
      <div
        class="flex items-center justify-between w-full h-12 p-4 leading-4 text-white tg-caption-mobile"
      >
        <p>
          Gotta agree to
          <a
            class="underline cursor-pointer"
            target="_blank"
            href="https://hub.paulchrisluke.com/-temporary-slug-7a760197-2d5d-4314-876c-ade5923d6dd8"
          >
            terms and conditions
          </a>
        </p>
        <p
          class="uppercase cursor-pointer text-button"
          @click="setSnackBarCookie"
        >
          Agree
        </p>
      </div>
    </SnackBar>
  </div>
</template>

<script>
import BaseOverlaySuccess from '@/components/BaseOverlaySuccess.vue';
import SnackBar from '@/components/SnackBar.vue';
import cookie from '@/utils/cookie';

export default {
  name: 'App',
  components: { BaseOverlaySuccess, SnackBar },
  computed: {
    overlayModel() {
      return this.$store.getters['overlay/model'];
    }
  },
  data() {
    return {
      showPrivacySnackBar: true,
      isMobile: process.env.VUE_APP_MOBILE === 'true'
    };
  },
  beforeMount() {
      let showSnackBar = cookie.getCookie('privacy-snackbar');
      //if bannerCookie === 1 that means user has seen the banner and dismissed it
      if (showSnackBar == 1) {
        this.showPrivacySnackBar = false;
      } else {
        this.showPrivacySnackBar = true;
      }
  },
  mounted() {
    if (this.isMobile) {
      //add ios padding alert
    }
  },
  methods: {
    setSnackBarCookie() {
      this.showPrivacySnackBar = false;
      //set cookie with name 'snackbar'. Set value to 1 which means true. Set expiration to 7 days.
      cookie.setCookie('privacy-snackbar', 1, 365);
    }
  }
};
</script>

<style>
html,
body {
  @apply bg-background;

  scroll-behavior: smooth;
  touch-action: manipulation;
}
</style>
