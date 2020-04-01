<template>
  <div class="grid md:grid-cols-2 gap-6 md:mr-8">
    <product-card v-for="x in 5" :key="x" />
  </div>
</template>

<script>
import ProductCard from '@/components/cards/ProductCard.vue';

export default {
  name: 'CardHolder',
  components: {
    ProductCard
  }
};
</script>

<style></style>
