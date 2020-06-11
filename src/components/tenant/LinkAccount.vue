<template>
  <div class="px-8">
    <div class="py-10">
      <h4 class="tg-body-mobile text-white text-opacity-84">
        Link your Facebook or Google account to get started!
      </h4>
    </div>
    <AuthButtons @loginSuccess="loginSuccess"/>
  </div>
</template>

<script>
import AuthButtons from '@/components/auth/AuthButtons';

export default {
  name: 'LinkAccount',
  components: {
    AuthButtons
  },
  created() {
    if (this.isSignUpSuccessed) {
      this.$emit('nextStep');
    }
  },
  methods: {
    ...mapMutations('auth', ['updateIsSignUpSuccessed']),
    loginSuccess() {
      this.updateIsSignUpSuccessed(true);
    }
  },
  computed: {
    ...mapGetters('auth', ['isSignUpSuccessed']),
  }
};
</script>
