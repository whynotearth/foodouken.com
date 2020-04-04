<template>
  <div class="grid md:grid-cols-2 gap-6 md:mr-8">
    <product-card
      :product="product"
      v-for="product in products"
      :key="product.id"
    />
  </div>
</template>

<script>
import ProductCard from '@/components/cards/ProductCard.vue';

export default {
  name: 'CardHolder',
  components: {
    ProductCard
  },
  computed: {
    products() {
      return this.$store.state['category'].selectedProducts;
    }
  }
};
</script>

<style></style>
