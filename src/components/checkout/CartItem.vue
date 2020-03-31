<template>
  <div class="flex border-b border-gray-700 py-2">
    <img
      src="https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg"
      class="h-12 w-12"
      alt="Product image"
    />
    <div class="w-full mx-2">
      <span class="text-gray-400">{{ trimmedTitle }} </span>
      <br />
      <span class="text-gray-500">${{ price }}</span>
    </div>
    <div class="flex text-gray-500 font-bold text-lg">
      <div
        class="border-2 border-gray-500 rounded-full m-auto p-0 h-8 w-8 text-center cursor-pointer select-none"
        @click="decrement"
      >
        -
      </div>
      <input
        type="number"
        name="quantity"
        min="1"
        v-model="quantity"
        class="bg-transparent w-8 py-3 text-center"
      />
      <div
        class="border-2 border-gray-500 rounded-full m-auto p-0 h-8 w-8 text-center cursor-pointer select-none"
        @click="increment"
      >
        +
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  data() {
    return {
      trimmedTitle: 'Eggs Benedict...',
      price: 8,
      quantity: 1
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
