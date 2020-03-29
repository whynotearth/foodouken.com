<template>
  <div class="grid md:grid-cols-2 gap-4 md:mr-4">
    <category-card v-for="x in 5" :key="x" />
  </div>
</template>

<script>
import CategoryCard from '@/components/cards/CategoryCard.vue';

export default {
  name: 'CardHolder',
  components: {
    CategoryCard
  }
};
</script>

<style></style>
