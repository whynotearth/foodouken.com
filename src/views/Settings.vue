<template>
  <LayoutFixedScrollable class="clear-margin clear-max-width">
    <template #header>
      <BaseAppBarHeader title="Settings" />
    </template>

    <template #content class="container">
      <div>
        <settings-button v-slot="{ linkStyling }">
          <button @click.prevent="signOut()" :class="linkStyling">
            <span class="mr-2 text-error">Log Out</span>
            <img :src="arrowForward" />
          </button>
        </settings-button>
      </div>
    </template>
    <template #footer>
      <BaseNavigationBottom />
    </template>
  </LayoutFixedScrollable>
</template>
<script>
import BaseAppBarHeader from '@/components/BaseAppBarHeader.vue';
import SettingsButton from '@/components/settings/SettingsButton.vue';
import arrowForward from '@/assets/arrow-forward.png';
import BaseNavigationBottom from '@/components/BaseNavigationBottom.vue';
import LayoutFixedScrollable from '@/components/LayoutFixedScrollable.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SettingsPage',
  components: {
    BaseAppBarHeader,
    SettingsButton,
    BaseNavigationBottom,
    LayoutFixedScrollable
  },
  data() {
    return {
      arrowForward
    };
  },
  computed: {
    ...mapGetters('auth', ['getUser'])
  },
  methods: {
    ...mapActions('auth', ['logout']),
    signOut() {
      const payload = {
        provider: this.getUser.loginProviders && this.getUser.loginProviders[0]
      };
      if (payload.provider) {
        this.logout(payload).then(() => {
          this.$router.push({ name: 'Welcome' });
        });
      }
    }
  }
};
</script>
