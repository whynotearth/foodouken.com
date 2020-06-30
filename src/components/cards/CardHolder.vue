<template>
  <div class="grid xs:grid-cols-1 sm:grid-cols-2 gap-6">
    <template v-for="product in getProducts">
      <product-card
        v-if="product.isAvailable"
        :product="product"
        :key="product.id"
      />
    </template>
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
