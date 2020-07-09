<template>
  <div v-if="showBanner"
    class="top-0 w-full z-100"
    :class="
      backdrop ? 'fixed h-screen w-screen bg-black bg-opacity-54' : 'sticky'
    "
  >
    <div
      class="p-2 text-center tg-body-mobile-bold md:tg-desktop-bolded-caption"
      :class="background"
    >
      <slot>Site Banner</slot>
    </div>
    <svg @click="setBannerCookie()" class="absolute top-0 right-0 h-8 w-8 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
  </div>
</template>

<script>
import cookie from '@/utils/cookie'
export default {
  name: 'BaseSiteBanner',
  props: {
    background: {
      type: String,
      default: 'bg-red-600'
    },
    backdrop: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      showBanner: false
      }
  },
  beforeMount () {
    var bannerCookie = cookie.getCookie("banner");
    //if bannerCookie === 1 that means user has seen the banner and dismissed it
    if (bannerCookie == 1){
      this.showBanner = false;
    } else {
      this.showBanner = true;
    }
  },
  methods: {
    setBannerCookie: function () {
      this.showBanner= false;
      //set cookie with name 'banner'. Set value to 1 which means true. Set expiration to 7 days.
      cookie.setCookie("banner",1,7);
    }
  }
};
</script>
