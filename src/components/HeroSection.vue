<template>
  <div class="text-center">
    <div class="mt-8">
      <transition name="fade">
        <img
          v-if="heroData.logoUrl"
          :src="heroData.logoUrl"
          alt="Logo image"
          class="h-48 w-48 m-auto rounded-full"
        />
      </transition>
    </div>
    <h1 class="text-white md:text-6xl text-5xl font-bold">
      {{ heroData.name }}
    </h1>
    <h2 class="md:text-5xl text-3xl text-gray-500 font-bold mb-8">Delivery</h2>
    <p class="text-gray-500 mt-2 whitespace-pre-wrap mx-auto max-w-lg">
      {{ heroData.description }}
    </p>
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
