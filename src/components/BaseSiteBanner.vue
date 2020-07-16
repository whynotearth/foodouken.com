<template>
<transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
  >
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
      <svg 
        @click="setBannerCookie()"
        class="absolute top-0 right-0 md:mt-2 mr-1 md:mr-2 h-8 w-8 cursor-pointer hover:bg-red-500 hover:rounded"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor">
          <path d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
</transition>
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
