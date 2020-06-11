<template>
  <div class="clear">
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from '@/components/auth/SignUpForm.vue';

export default {
  name: 'SignUp',
  components: {
    SignUpForm
  }
};
</script>

<style scoped>
.clear {
  @apply max-w-none mx-0 !important;
}
</style>
