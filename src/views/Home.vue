<template>
  <div>
    <div class="text-center">
      <div class="my-8">
        <div class="bg-logo mx-auto h-40 w-40 p-5 rounded-full">
          <img :src="home.custom.logo" alt="Logo image" />
        </div>
      </div>
      <h1 class="text-white text-4xl font-bold">
        {{ home.title }}
      </h1>
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
          v-for="tenant in tenants"
          :key="tenant.slug"
          class="w-full py-2 md:w-1/2 md:px-2 xl:w-1/3"
        >
          <router-link
            :to="{ name: 'Shop', params: { slug: tenant.slug } }"
            class="bg-secondary rounded-md overflow-hidden flex flex-col  h-full"
          >
            <div
              class="relative overflow-hidden w-full"
              style="padding-bottom: 45%"
            >
              <img
                :src="tenant.logo"
                class="absolute w-full object-cover"
                :alt="tenant.name"
              />
            </div>
            <h3 class="font-bold px-5 pt-5 text-xl">{{ tenant.name }}</h3>
            <ul
              class="text-sm text-gray-500 flex flex-wrap items-center mr-auto ml-0 self-end px-5 pb-5 mt-auto"
            >
              <li
                v-for="(tag, i) in tenant.tags"
                :key="i"
                class="tag pr-2 py-2"
              >
                <span v-text="tag" class="px-3 py-1 rounded mx-auto bg-tag" />
              </li>
            </ul>
          </router-link>
        </li>
      </ul>
    </section>
    <CreditFooter />
  </div>
</template>

<script>
import CreditFooter from '@/components/CreditFooter.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    CreditFooter
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
    })
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
