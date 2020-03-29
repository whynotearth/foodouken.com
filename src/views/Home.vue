<template>
  <div class="home">
    <hero-section />
    <hr class="my-8 border-gray-700" />
    <section class="flex flex-row my-4">
      <div class="w-8/12 border-r border-gray-700">
        <card-holder />
      </div>
      <div class="w-4/12 "></div>
    </section>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import CardHolder from '@/components/cards/CardHolder.vue';

export default {
  name: 'Home',
  components: {
    HeroSection,
    CardHolder
  }
};
</script>
