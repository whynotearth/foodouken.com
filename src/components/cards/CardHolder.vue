<template>
  <div class="grid xs:grid-cols-1 sm:grid-cols-2 gap-6">
    <template v-for="product in getProducts">
      <product-card
        v-if="product.isAvailable"
        :product="product"
        :key="product.id"
        @productClicked="changeSelectedProduct(product)"
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
      this.$router.push({
        name: 'ShopProductDetail',
        params: {
          slug: this.$route.params.slug,
          categoryId: this.getSelectedCategory.id,
          productId: product.id
        }
      });
    }
  }
};
</script>
