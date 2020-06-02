<template>
  <div class="">
    <SignUpForm />
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  components: {
    SignUpForm: () => import('@/components/forms/SignUpForm.vue')
  }
};
</script>
