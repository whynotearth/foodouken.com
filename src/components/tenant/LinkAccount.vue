<template>
  <div class="px-8">
    <div class="py-10">
      <h4 class="tg-body-mobile text-white text-opacity-84">
        Link your Facebook or Google account to get started!
      </h4>
    </div>
    <AuthButtons />
    <div
      v-if="!isAuthenticated && $v.isAuthenticated.$dirty"
      class="text-red-600 text-xs"
    >
      To go on with next step you should sign up.
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import AuthButtons from '@/components/auth/AuthButtons';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'LinkAccount',
  components: {
    AuthButtons
  },
  data() {
    return {
      isAuthenticated: null
    };
  },
  validations: {
    isAuthenticated: {
      required,
      isValid: value => value === true
    }
  },
  async created() {
    if (this.$route.query.token) {
      await this.updateToken(this.$route.query.token);
    }

    this.ping()
      .then(result => {
        if (result && result.isAuthenticated) {
          this.isAuthenticated = true;
        }

        if (
          this.$router.history._startLocation.includes(
            this.$route.params.step
          ) &&
          this.$route.query.signUpStarted
        ) {
          this.$emit('nextStep');
        }
      })
      .catch(() => {
        this.isAuthenticated = false;
      });
  },
  methods: {
    ...mapActions('auth', ['ping']),
    ...mapMutations('auth', ['updateToken'])
  }
};
</script>
