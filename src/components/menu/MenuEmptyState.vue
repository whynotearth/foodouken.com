<template>
  <div class="bottom-0 flex flex-col items-center">
    <slot name="image">
      <img class="w-40 m-auto mb-6 md:w-64" :src="Hadooken" />
    </slot>
    <!-- <h1
      class="mb-4 text-2xl font-bold tracking-wider text-gray-300 md:text-4xl"
    > -->
    <h1 class="mb-4 tg-h1-mobile">
      <slot name="heading"></slot>
    </h1>
    <h2 class="mb-8 tg-body-mobile">
      <slot name="description"></slot>
    </h2>
    <slot name="action"></slot>
  </div>
</template>

<script>
import Hadooken from '@/assets/hadooken.png';
import Plus from '@/assets/plus.png';
import Button from '@/components/Button.vue';

export default {
  name: 'MenuItemEmptyState',
  data() {
    return {
      Hadooken,
      Plus,
      Button
    };
  }
};
</script>
