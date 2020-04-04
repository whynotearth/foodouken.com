<template>
  <div
    v-on:click="addCartProduct(product)"
    class="bg-secondary flex flex-row shadow-md rounded-lg h-24 mb-4"
  >
    <img
      :src="product.image"
      alt="Product image"
      class="w-3/12 h-full object-cover rounded-l-lg"
    />
    <p class="my-auto">
      <span class="mx-4 text-gray-400 my-1 inline-block text-lg">
        {{ this.product.name }}
      </span>
      <br />
      <span class="mx-4 text-gray-500 my-1 inline-block">
        ${{ this.product.price }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addCartProduct(product) {
      this.$store.dispatch('cart/addCartProduct', product);
    }
  }
};
</script>

<style></style>
