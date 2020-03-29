<template>
  <div class="flex border-b border-gray-700 py-2">
    <img
      src="https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg"
      class="h-12 w-12"
      alt="item image"
    />
    <div class="w-full mx-2">
      <span class="text-gray-400">{{ trimmedTitle }} </span>
      <br />
      <span class="text-gray-500">${{ price }}</span>
    </div>
    <div>
      <input
        type="number"
        name="quantity"
        v-model="quantity"
        class="bg-transparent w-10 align-middle text-gray-500"
      />
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
  }
};
</script>

<style></style>
