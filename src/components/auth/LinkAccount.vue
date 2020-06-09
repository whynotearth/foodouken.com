<template>
  <div class="px-8">
    <div class="py-10">
      <h4 class="tg-body-mobile text-white text-opacity-84">
        Link your Facebook or Google account to get started!
      </h4>
    </div>
    <div>
      <div class="py-3">
        <Button
          title="Log In With Facebook"
          class="tg-color-label-mobile text-white text-opacity-84 rounded-full py-3 md:px-5"
          @clicked="oauth('Facebook')"
        >
          <template #icon>
            <img class="md:mr-5" :src="facebookLogo" alt="facebook-icon" />
          </template>
        </Button>
      </div>
      <div class="py-3">
        <Button
          title="Log In With Google"
          class="tg-color-label-mobile text-white text-opacity-84 rounded-full py-3 md:px-5"
          @clicked="oauth('Google')"
        >
          <template #icon>
            <img class="md:mr-5" :src="googleLogo" alt="google-icon" />
          </template>
        </Button>
      </div>
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
      facebookLogo,
      googleLogo
    };
  },
  computed: {
    ...mapGetters('auth', {
      oauthLink: 'oauth'
    })
  },
  methods: {
    ...mapMutations('auth', ['updateProvider']),
    ...mapActions('auth', ['updateReturnUrl', 'ping']),
    async oauth(provider) {
      await this.updateProvider(provider);
      await this.updateReturnUrl(window.location.href);
      const redirectUrl = await this.oauthLink;
      window.location.assign(redirectUrl);
      this.ping();
    }
  }
};
</script>
