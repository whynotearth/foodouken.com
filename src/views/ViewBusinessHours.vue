<template>
  <div class="p-4 w-full flex items-center justify-center">
    <BusinessHours :isSignUpFlow="false" />
  </div>
</template>

<script>
import BusinessHours from '@/components/tenant/BusinessHours.vue';

export default {
  name: 'ViewBusinessHours',
  components: {
    BusinessHours
  },
  methods: {}
};
</script>
