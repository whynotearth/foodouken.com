<template>
  <div>
    <div class="text-center">
      <div class="my-8">
        <div class="logo mx-auto h-40 w-40 p-5 rounded-full">
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  created() {
    this.fetchHomeData();
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
      title: this.home.title,
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

<style scoped>
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-leave-to {
  opacity: 0;
}

.logo {
  background: #002b31;
}
</style>
