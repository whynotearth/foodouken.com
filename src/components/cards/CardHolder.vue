<template>
  <div class="grid md:grid-cols-2 gap-6 md:mr-8">
    <product-card
      :product="product"
      v-for="product in getProducts"
      :key="product.id"
    />
  </div>
</template>

<script>
import ProductCard from '@/components/cards/ProductCard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'CardHolder',
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters('category', ['getProducts'])
  }
};
</script>

<style></style>
