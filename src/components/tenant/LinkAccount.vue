<template>
  <div class="px-8">
    <div class="py-10">
      <h4 class="tg-body-mobile text-white text-opacity-84">
        Link your Facebook or Google account to get started!
      </h4>
    </div>
    <AuthButtons />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AuthButtons from '@/components/auth/AuthButtons';

export default {
  name: 'LinkAccount',
  components: {
    AuthButtons
  },
  created() {
    this.ping()
      .then(result => {
        if (result && result.isAuthenticated) {
          this.$emit('nextStep');
        }
      })
      .catch(() => {});
  },
  methods: {
    ...mapActions('auth', ['ping'])
  }
};
</script>
