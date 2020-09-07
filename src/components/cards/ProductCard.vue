<template>
  <div
    v-if="product"
    @click="addCartProduct(product)"
    class="flex flex-row h-24 mb-4 transition duration-300 transform rounded-lg shadow-md cursor-pointer product-card bg-secondary hover:opacity-75"
  >
    <img
      :src="product.imageUrl"
      alt="Product image"
      class="object-cover w-20 h-full rounded-l-lg p-1/2"
    />
    <div class="my-auto">
      <p class="mx-4 my-1 text-base text-gray-400 break-words md:text-lg">
        {{ product.name }}
      </p>
      <div v-if="product.discountPercent > 0" class="mx-4 text-xs sm:text-sm">
        <span class="px-1 my-1 text-white rounded bg-button">
          {{ product.discountPercent }}% OFF
        </span>
        <div class="my-1 text-gray-500">
          <span class="mr-1 line-through">{{
            product.originalPrice | formatPrice
          }}</span>
          <span>{{ product.price | formatPrice }}</span>
        </div>
      </div>
      <p v-else class="block mx-4 my-1 text-gray-500">
        {{ product.price | formatPrice }}
      </p>
    </div>
    <div class="relative flex-grow">
      <div
        class="absolute flex items-center justify-center w-10 h-10 border border-solid rounded-full cursor-pointer select-none ripple text-align-center btn-plus"
      >
        <img
          src="@/assets/add.png"
          class="pointer-events-none"
          draggable="false"
          alt="+"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('cart', ['addCartProduct'])
  },
  filters: {
    formatPrice: price => {
      return `$${price.toFixed(2)}`;
    }
  }
};
</script>

<style scoped>
.btn-plus {
  right: 10px;
  bottom: -20px;
  background: #0f292d;
  border-color: #0e9ec2;
  color: #0e9ec2;
}
.ripple {
  background-position: center;
  transition: background 0.4s;
}
.product-card:hover .ripple {
  background: #1d484f radial-gradient(circle, transparent 1%, #1d484f 1%)
    center/15000%;
}
.ripple:focus {
  background-color: #217e8f;
  background-size: 100%;
  transition: background 0s;
}
</style>
