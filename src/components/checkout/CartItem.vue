<template>
  <div class="flex flex-row py-2">
    <img
      :src="cartItem.product.image"
      class="h-12 w-12 my-auto"
      alt="Product image"
    />
    <div class="w-auto mx-2 w-full flex flex-col truncate">
      <span class="text-gray-400 truncate">{{ cartItem.product.name }} </span>
      <span class="text-gray-500">${{ cartItem.product.price }}</span>
    </div>
    <div class="flex items-center text-gray-500 font-bold text-lg">
      <div class="cursor-pointer w-6 select-none" @click="decrement">
        <img
          :src="minus"
          alt="-"
          class="pointer-events-none py-4"
          draggable="false"
        />
      </div>
      <input
        type="number"
        name="quantity"
        min="1"
        v-model="cartItem.count"
        class="bg-transparent w-8 py-3 text-center font-bold"
      />
      <div class="cursor-pointer w-6 select-none" @click="increment">
        <img
          :src="plus"
          alt="+"
          class="pointer-events-none py-4"
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import plus from '@/assets/plus.png';
import minus from '@/assets/minus.png';

export default {
  name: 'CartItem',
  data() {
    return {
      plus: plus,
      minus: minus
    };
  },
  props: ['cartItem'],
  methods: {
    increment() {
      this.$store.dispatch('cart/incrementCartProduct', this.cartItem.product);
    },
    decrement() {
      this.$store.dispatch('cart/decrementCartProduct', this.cartItem.product);
    }
  }
};
</script>

<style>
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
