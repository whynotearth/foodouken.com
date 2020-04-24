<template>
  <div class="grid xs:grid-cols-1 sm:grid-cols-2 gap-6">
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
