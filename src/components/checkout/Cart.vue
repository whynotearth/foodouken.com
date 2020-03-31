<template>
  <div class="bg-secondary shadow-md rounded-lg mb-4 p-4 max-w-sm m-auto">
    <cart-item v-for="x in 2" :key="x" />
    <hr class="my-4" />
    <span class="text-gray-500">Sub total</span>
    <br />
    <span class="text-gray-500">Delivery fee</span>
    <br />
    <span class="text-gray-400 text-2xl font-bold">Total</span>
  </div>
</template>

<script>
import CartItem from '@/components/checkout/CartItem.vue';

export default {
  name: 'Cart',
  components: {
    CartItem
  }
};
</script>

<style></style>
