<template>
  <div class="bg-secondary shadow-md rounded-lg mb-4 p-4 max-w-sm m-auto">
    <cart-item
      v-for="cartItem in cart"
      :cart-item="cartItem"
      :key="cartItem.product.id"
    />
    <hr class="my-4" />
    <span class="text-gray-500">Sub total</span>
    <br />
    <span class="text-gray-500">Delivery fee</span>
    <br />
    <span class="text-gray-400 text-2xl font-bold">Total</span>
  </div>
</template>

<script>
import CartItem from '@/components/cart/CartItem.vue';

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  computed: {
    cart() {
      return this.$store.state.cart.cartItems;
    }
  }
};
</script>

<style></style>
