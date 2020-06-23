<template>
<div>
  <product-detail
      v-if="selectedProduct"
      :productInfo="{ productId: selectedProduct.id, categoryId: getCategory.id }"
      @clearSelectedProduct="selectedProduct = null"
    />
  <div class="grid xs:grid-cols-1 sm:grid-cols-2 gap-6">
    <product-card
      :product="product"
      v-for="product in getProducts"
      :key="product.id"
      @productClicked="changeSelectedProduct(product)"
    />
  </div>
</div>
</template>

<script>
import ProductCard from '@/components/cards/ProductCard.vue';
import { mapGetters } from 'vuex';
import ProductDetail from '@/components/ProductDetail.vue';

export default {
  name: 'CardHolder',
  components: {
    ProductCard,
    ProductDetail
  },
  data() {
    return {
      selectedProduct: null
    };
  },
  computed: {
    ...mapGetters('category', ['getCategory', 'getProducts'])
  },
  methods: {
    changeSelectedProduct(product) {
      this.selectedProduct = product;
    }
  }
};
</script>

<style></style>
