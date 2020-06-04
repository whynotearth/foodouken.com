<template>
  <div>
    <transition name="fade">
      <router-view class="container mx-auto min-h-screen" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TenantLayout',
  computed: {
    ...mapGetters({
      orgData: 'shop/getOrgData'
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
