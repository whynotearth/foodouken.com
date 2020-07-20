<template>
  <div>
    <div class="text-center">
      <div class="my-8">
        <div class="bg-logo mx-auto h-40 w-40 p-5 rounded-full">
          <img :src="home.custom.logo" alt="Logo image" />
        </div>
      </div>
      <h1 class="text-white text-4xl font-bold">{{ home.title }}</h1>
      <h2 class="text-2xl text-gray-500 font-semibold mb-8">
        {{ home.description }}
      </h2>
      <p
        class="text-gray-500 text-base mt-2 text-justify lg:text-center mx-auto max-w-lg"
      >
        {{ home.custom.description }}
      </p>
    </div>
    <hr class="my-8 border-gray-700" />
    <section class="flex my-4 lg:max-w-3xl xl:max-w-5xl mx-auto">
      <ul
        class="flex flex-wrap w-full items-stretch justify-center h-full mx-auto"
      >
        <li
          v-for="tenant in activeTenants"
          :key="tenant.slug"
          class="w-full py-2 md:w-1/2 md:px-2 xl:w-1/3"
        >
          <router-link
            :to="{
              name: 'Shop',
              params: { slug: tenant.slug, isActive: tenant.isActive }
            }"
            class="bg-secondary rounded-md overflow-hidden flex flex-col h-full"
          >
            <tenant-card :tenant="tenant" />
          </router-link>
        </li>
      </ul>
    </section>
    <hr class="my-8 border-gray-700" />
    <section class="flex my-4 lg:max-w-3xl xl:max-w-5xl mx-auto">
      <ul
        class="flex flex-wrap w-full items-stretch justify-center h-full mx-auto"
      >
        <li
          v-for="tenant in inactiveTenants"
          :key="tenant.slug"
          class="w-full py-2 md:w-1/2 md:px-2 xl:w-1/3"
        >
          <div
            class="bg-secondary rounded-md overflow-hidden flex flex-col h-full"
          >
            <tenant-card :tenant="tenant" />
          </div>
        </li>
      </ul>
    </section>
    <CreditFooter />
  </div>
</template>

<script>
import CreditFooter from '@/components/CreditFooter.vue';
import TenantCard from '@/components/tenant/TenantCard.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    CreditFooter,
    TenantCard
  },
  created() {
    this.fetchHomeData();
  },
  mounted() {
    this.fetchTenants();
  },
  methods: {
    ...mapActions('home', ['fetchHomeData', 'fetchTenants'])
  },
  computed: {
    ...mapGetters({
      home: 'home/getHomeData',
      tenants: 'home/getTenants',
      loading: 'home/getLoading'
    }),
    activeTenants() {
      return this.tenants.filter(el => el.isActive);
    },
    inactiveTenants() {
      return this.tenants.filter(el => !el.isActive);
    }
  },
  metaInfo() {
    return {
      title: this.home.custom.name,
      meta: [
        { name: 'keywords', content: this.home.custom.keyword },
        { name: 'description', content: this.home.custom.description },
        // OpenGraph data
        { property: 'og:title', content: this.home.custom.name },
        { property: 'og:site_name', content: 'Foodouken' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: this.home.custom.url },
        { property: 'og:image', content: this.home.custom.image },
        {
          property: 'og:description',
          content: this.home.custom.description
        },
        // Twitter card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: this.home.custom.name },
        {
          name: 'twitter:description',
          content: this.home.custom.description
        },
        { name: 'twitter:image', content: this.home.custom.image },
        // Google / Schema.org markup:
        { itemprop: 'name', content: this.home.custom.name },
        { itemprop: 'description', content: this.home.custom.description },
        { itemprop: 'image', content: this.home.custom.image }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: this.home.custom
        }
      ]
    };
  }
};
</script>
