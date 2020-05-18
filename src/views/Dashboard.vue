<template>
  <LayoutFixedScrollable>
    <template #header>
      <BaseAppBarHeader title="Foodouken" :to-link="{ name: 'Home' }" />
      <router-link
        to="/settings"
        class="absolute top-0 right-0 px-0 py-4 md:px-6 text-sm z-10"
      >
        <img
          src="https://res.cloudinary.com/whynotearth/image/upload/v1588775654/Volkswagen/cms/wheel_2_prifka.svg"
        />
      </router-link>
    </template>
    <template #content>
      <div class="min-h-full relative bg-background">
        <div class="em-low">
          Hello
        </div>
      </div>
    </template>
  </LayoutFixedScrollable>
</template>

<script>
import LayoutFixedScrollable from '@/components/LayoutFixedScrollable';
import BaseAppBarHeader from '@/components/BaseAppBarHeader';

export default {
  name: 'Dashboard',
  components: {
    LayoutFixedScrollable,
    BaseAppBarHeader
  },
  computed: {},
  methods: {}
};
</script>
