<template>
  <div class="h-full">
    <hero-section />
    <hr class="my-8 border-gray-700" />
    <section class="flex md:flex-row flex-col-reverse my-4">
      <div class="md:w-8/12 md:border-r border-white">
        <category-holder />
        <h3
          v-if="selectedCategory"
          class="text-5xl text-white font-bold text-center mb-4"
        >
          {{ selectedCategory.title || 'Select a category' }}
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
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    HeroSection,
    CardHolder,
    CategoryHolder,
    Button,
    Cart
  },
  methods: {
    fetchSiteData() {
      this.$store.dispatch('category/loadPageData');
    }
  },
  computed: {
    ...mapGetters('category', ['selectedCategory'])
  },
  mounted() {
    this.fetchSiteData();
  }
};
</script>
