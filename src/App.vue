<template>
  <div
    id="app"
    class="font-sans bg-background h-full text-white text-lg antialiased"
  >
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
    <transition name="fade">
      <div
        v-if="overlayModel.title || overlayModel.message"
        class="w-full h-full fixed block top-0
        left-0 z-110"
      >
        <BaseOverlaySuccess
          :title="overlayModel.title"
          :message="overlayModel.message"
        />
      </div>
    </transition>
    <SnackBar :showSnackBar="showPrivacySnackBar">
      <div
        class="flex items-center justify-between text-white w-full h-12 tg-caption-mobile leading-4 p-4"
      >
        <p>
          Gotta agree to
          <a
            class="underline cursor-pointer"
            target="_blank"
            href="/privacy-policy"
          >
            terms and conditions
          </a>
        </p>
        <p
          class="text-button uppercase cursor-pointer"
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
      showPrivacySnackBar: true
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
