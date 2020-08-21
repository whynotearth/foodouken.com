<template>
  <div
    class="relative flex flex-row items-center px-2 my-2 transition-all duration-300"
  >
    <div
      class="absolute top-0 left-0 w-4 h-4 rounded-full cursor-pointer select-none bg-button"
      @click="remove"
    >
      <img
        :src="cancel"
        alt="Remove from cart"
        draggable="false"
        class="pointer-events-none"
      />
    </div>
    <img
      :src="cartItem.product.imageUrl"
      class="w-12 h-12 my-auto"
      alt="Product image"
    />
    <div class="flex flex-col w-full mx-2 truncate">
      <span class="text-gray-400 truncate">{{ cartItem.product.name }} </span>
      <div v-if="cartItem.product.discountPercent">
        <span class="mr-1 text-gray-500 line-through">
          {{ cartItem.product.originalPrice | formatPrice }}
        </span>
        <span class="text-gray-500">{{ cartItem.product.price | formatPrice }}</span>
      </div>
      <span v-else class="text-gray-500">{{ cartItem.product.price | formatPrice }}</span>
    </div>
    <div class="flex items-center text-lg font-bold text-gray-500">
      <div class="w-6 cursor-pointer select-none" @click="decrement">
        <img
          :src="minus"
          alt="-"
          class="py-4 pointer-events-none"
          draggable="false"
        />
      </div>
      <input
        type="number"
        name="quantity"
        min="1"
        v-model.number="cartItem.count"
        class="w-8 py-3 font-bold text-center text-white bg-transparent"
      />
      <div class="w-6 cursor-pointer select-none" @click="increment">
        <img
          :src="plus"
          alt="+"
          class="py-4 pointer-events-none"
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import plus from '@/assets/plus.png';
import minus from '@/assets/minus.png';
import cancel from '@/assets/cancel.png';

export default {
  name: 'CartItem',
  data() {
    return {
      plus: plus,
      minus: minus,
      cancel: cancel
    };
  },
  props: {
    cartItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('cart/incrementCartProduct', this.cartItem.product);
    },
    decrement() {
      this.$store.dispatch('cart/decrementCartProduct', this.cartItem.product);
    },
    remove() {
      this.$store.dispatch('cart/removeCartProduct', this.cartItem.product);
    }
  },
  filters: {
    formatPrice: price => {
      return `$${price.toFixed(2)}`;
    }
  }
};
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
