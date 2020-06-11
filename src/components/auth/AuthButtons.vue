<template>
  <div>
    <div
      class="py-3"
      v-for="({ name, logo }, index) in socialMediaProviders"
      :key="index"
    >
      <Button
        :title="
          isLoggedInViaPovider(name)
            ? `Logged In With ${name}`
            : `Log In With ${name}`
        "
        :disabled="isLoggedInViaPovider(name)"
        class="tg-color-label-mobile text-white text-opacity-84 rounded-full py-3 md:px-5"
        @clicked="oauth(name)"
      >
        <template #icon>
          <img class="md:mr-5" :src="logo" :alt="`${name}-icon`" />
        </template>
      </Button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';
import Button from '@/components/Button.vue';
import facebookLogo from '@/assets/facebook2.png';
import googleLogo from '@/assets/google.png';

export default {
  name: 'LinkAccount',
  components: {
    Button
  },
  data() {
    return {
      socialMediaProviders: [
        {
          name: 'Facebook',
          logo: facebookLogo
        },
        {
          name: 'Google',
          logo: googleLogo
        }
      ]
    };
  },
  computed: {
    ...mapGetters('auth', {
      oauthLink: 'oauth'
    }),
    ...mapGetters('auth', ['getUser', 'isAuthenticated'])
  },
  created() {
    if (this.isAuthenticated) {
      this.$emit('loginSuccess')
    }
  },
  methods: {
    ...mapMutations('auth', ['updateProvider']),
    ...mapActions('auth', ['updateReturnUrl', 'ping']),
    async oauth(provider) {
      await this.updateProvider(provider);
      await this.updateReturnUrl(window.location.href);
      const redirectUrl = await this.oauthLink;
      window.location.assign(redirectUrl);
      await this.ping();
    },
    isLoggedInViaPovider(provider) {
      return (
        this.getUser &&
        this.getUser.loginProviders &&
        this.getUser.loginProviders.includes(provider)
      );
    }
  }
};
</script>
