<template>
  <div class="bg-secondary shadow-md rounded-lg mb-4 p-4 max-w-sm m-auto">
    <transition-group name="cart">
      <cart-item
        v-for="cartItem in cartItems"
        :cart-item="cartItem"
        :key="cartItem.product.id"
      />
    </transition-group>
    <hr class="my-4" />
    <div class="grid grid-cols-2 gap-1">
      <span class="text-gray-500 text-sm">Sub-Total</span>
      <div class="text-right">
        <span class="text-gray-500 text-sm">
          {{ subTotal | formatPrice }}
        </span>
      </div>
      <span class="text-gray-500 text-sm">Tax ({{ getTaxRate }}%)</span>
      <div class="text-right">
        <span class="text-gray-500 text-sm">
          {{ getTaxRate ? $options.filters.formatPrice(totalTax) : 'No tax!' }}
        </span>
      </div>
      <span class="text-gray-500 text-sm">Delivery Fee</span>
      <div class="text-right">
        <span class="text-gray-500 text-sm">
          {{
            getDeliveryFee
              ? $options.filters.formatPrice(getDeliveryFee)
              : 'Free delivery!'
          }}
        </span>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-1 mt-2">
      <span class="text-gray-400 text-2xl font-bold">Total</span>
      <div class="text-right">
        <span class="text-gray-400 text-2xl font-bold">
          {{ total | formatPrice }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/cart/CartItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  computed: {
    ...mapGetters('cart', ['cartItems', 'subTotal', 'totalTax', 'total']),
    ...mapGetters('shop', ['getDeliveryFee', 'getTaxRate'])
  },
  filters: {
    formatPrice: price => {
      return `$${price.toFixed(2)}`;
    }
  }
};
</script>

<style scoped>
.cart-enter,
.cart-leave-to {
  opacity: 0;
  transform: translateY(1rem);
}
</style>
