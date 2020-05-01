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
    ...mapGetters({
      orgData: 'shop/getOrgData',
      getLoading: 'home/getLoading',
    })
  },
  metaInfo() {
    return {
      title: this.orgData.custom.name,
      meta: [
        { name: 'keywords', content: this.orgData.custom.keyword },
        { name: 'description', content: this.orgData.custom.description },
        // OpenGraph data
        { property: 'og:title', content: this.orgData.custom.name },
        { property: 'og:site_name', content: 'Foodouken' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: this.orgData.custom.url },
        { property: 'og:image', content: this.orgData.custom.image },
        {
          property: 'og:description',
          content: this.orgData.custom.description
        },
        // Twitter card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: this.orgData.custom.name },
        {
          name: 'twitter:description',
          content: this.orgData.custom.description
        },
        { name: 'twitter:image', content: this.orgData.custom.image },
        // Google / Schema.org markup:
        { itemprop: 'name', content: this.orgData.custom.name },
        { itemprop: 'description', content: this.orgData.custom.description },
        { itemprop: 'image', content: this.orgData.custom.image }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: this.orgData.custom
        }
      ]
    };
  }
};
</script>
