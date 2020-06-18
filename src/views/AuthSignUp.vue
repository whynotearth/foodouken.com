<template>
  <div class="clear-margin clear-max-width">
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from '@/components/auth/SignUpForm.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'SignUp',
  components: {
    SignUpForm
  },
  created() {
    this.updateIsSignUpStarted(true);
  },
  destroyed() {
    this.updateIsSignUpStarted(false);
  },
  methods: {
    ...mapMutations('auth', ['updateIsSignUpStarted'])
  }
};
</script>
