<template>
  <div class="h-full">
    <hero-section :heroData="orgData" />
    <hr class="my-8 border-gray-700" />
    <section class="flex md:flex-row flex-col-reverse my-4">
      <div class="md:w-8/12 md:border-r border-white">
        <category-holder :categories="categories" />
        <h3
          v-if="category"
          class="text-5xl text-white font-bold text-center mb-4"
        >
          {{ loadingCategory ? 'Loading category...' : category.title }}
        </h3>
        <p class="text-gray-500 text-center mb-8 text-lg">
          Prices per piece
        </p>
        <card-holder />
      </div>
      <div class="md:w-4/12 md:ml-4">
        <h3 class="text-5xl text-white font-bold text-center mb-8">
          Cart
        </h3>
        <cart />
        <p class="text-gray-500 text-center text-lg">
          Estimated Delivery Time: 45 minutes.
        </p>
        <div class="w-full text-center my-4">
          <Button title="Order now" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import CardHolder from '@/components/cards/CardHolder.vue';
import CategoryHolder from '@/components/categories/CategoryHolder.vue';
import Button from '@/components/Button.vue';
import Cart from '@/components/checkout/Cart.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    HeroSection,
    CardHolder,
    CategoryHolder,
    Button,
    Cart
  },
  created() {
    this.fetchHomeData();
  },
  methods: {
    ...mapActions('home', ['fetchHomeData'])
  },
  computed: {
    ...mapGetters({
      category: 'category/getCategory',
      loadingCategory: 'category/getCategoryLoading',
      orgData: 'home/getOrgData',
      categories: 'home/getCategories'
    })
  }
};
</script>
