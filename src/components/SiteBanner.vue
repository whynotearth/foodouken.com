<template>
  <div
    v-if="getBannerInfo && getBannerData"
    class="bg-red-600 p-4 fixed top-0 left-0 w-full transition duration-500 ease-in-out z-50 site-banner"
  >
    <div class="flex justify-between items-center">
      <span></span>
      <h2 class="text-white font-bold text-lg not-italic w-3/4 text-center">
        {{ getBannerData[0].bannerText }}
      </h2>
      <span
        @click="onSiteBannerCloseClick"
        class="w-8 cursor-pointer hover:bg-red-700 rounded"
      >
        <img
          class=""
          src="https://user-images.githubusercontent.com/5694308/79037872-0ccf2380-7bff-11ea-8366-604b73c74c2d.png"
          alt="close"
        />
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SiteBanner',
  computed: {
    ...mapGetters('home', ['getBannerData', 'getBannerInfo'])
  },
  methods: {
    ...mapActions('home', [
      'fetchSiteBannerData',
      'changeSiteBannerVisibility'
    ]),
    onSiteBannerCloseClick() {
      const opacityColln = [0.9, 0.7, 0.5, 0.3, 0.1];
      for (let i = 0; i < opacityColln.length; i++) {
        document.querySelector('.site-banner').style.opacity = opacityColln[i];
      }
      setTimeout(() => {
        this.changeSiteBannerVisibility(false);
      }, 200);
    }
  },
  created() {
    this.fetchSiteBannerData();
  },
  watch: {
    getBannerData: function(siteBannerData) {
      if (siteBannerData[0].isActive) {
        this.changeSiteBannerVisibility(true);
      }
    }
  }
};
</script>
