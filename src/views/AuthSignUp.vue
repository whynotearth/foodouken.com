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
  methods: {
    ...mapMutations('tenant', ['resetCreateTenantForm'])
  },
  destroyed() {
    this.resetCreateTenantForm();
  }
};
</script>
