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
  async created() {
    const user = await this.ping();
    if (user && user.isAuthenticated) {
      this.$emit('nextStep');
    }
  },
  methods: {
    ...mapActions('auth', ['ping'])
  }
};
</script>
