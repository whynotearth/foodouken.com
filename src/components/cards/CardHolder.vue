<template>
  <div>
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

export default {
  name: 'CardHolder',
  components: {
    ProductCard
  },
  data() {
    return {
      selectedProduct: null
    };
  },
  computed: {
    ...mapGetters('category', ['getSelectedCategory', 'getProducts'])
  },
  methods: {
    changeSelectedProduct(product) {
      this.selectedProduct = product;
      this.$router.push({ name: 'ShopProductDetail', params: { slug: this.$route.params.slug, categoryId: this.getSelectedCategory.id, productId: product.id } });
    }
  }
};
</script>

<style></style>
