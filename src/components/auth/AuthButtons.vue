<template>
  <div>
    <div
      class="py-3"
      v-for="({ name, logo }, index) in socialMediaProviders"
      :key="index"
    >
      <Button
        :title="`Log In With ${name}`"
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
import { mapMutations, mapGetters } from 'vuex';
import Button from '@/components/Button.vue';
// import facebookLogo from '@/assets/facebook2.png';
import googleLogo from '@/assets/google.png';

export default {
  name: 'LinkAccount',
  components: {
    Button
  },
  data() {
    return {
      socialMediaProviders: [
        /*
        {
          name: 'Facebook',
          logo: facebookLogo
        },
        */
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
    })
  },
  methods: {
    ...mapMutations('auth', ['updateProvider', 'updateReturnUrl']),
    async oauth(provider) {
      await this.updateProvider(provider);
      await this.updateReturnUrl(window.location.href);
      const redirectUrl = await this.oauthLink;
      window.location.assign(redirectUrl);
    }
  }
};
</script>
