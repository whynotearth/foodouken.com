<template>
  <div class="flex flex-row border-b border-gray-700 py-2">
    <img
      src="https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg"
      class="h-12 w-12"
      alt="Product image"
    />
    <div class="w-auto mx-2 w-full">
      <span class="text-gray-400">{{ trimmedTitle }} </span>
      <br />
      <span class="text-gray-500">${{ price }}</span>
    </div>
    <div class="flex text-gray-500 font-bold text-lg">
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
        v-model="quantity"
        class="bg-transparent w-8 py-3 text-center"
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
import plus from '@/assets/plus.svg';
import minus from '@/assets/minus.svg';

export default {
  name: 'CartItem',
  data() {
    return {
      trimmedTitle: 'Eggs Benedict...',
      price: 8,
      quantity: 1,
      plus: plus,
      minus: minus
    };
  },
  methods: {
    increment() {
      if (this.quantity >= 10) {
        return;
      }
      this.quantity++;
    },
    decrement() {
      if (this.quantity <= 1) {
        return;
      }
      this.quantity--;
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
