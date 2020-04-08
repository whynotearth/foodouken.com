<template>
  <div class="text-center">
    <div class="mt-8">
      <img
        src="https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg"
        alt="Logo image"
        class="h-48 w-48 m-auto rounded-full"
      />
    </div>
    <h1 class="text-white md:text-6xl text-5xl font-bold">
      {{ heroData.title }}
    </h1>
    <h2 class="md:text-5xl text-3xl text-gray-500 font-bold mb-8">Delivery</h2>
    <div class="text-gray-500 mt-2 whitespace-pre mx-auto max-w-lg">
      {{ heroData.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    heroData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
