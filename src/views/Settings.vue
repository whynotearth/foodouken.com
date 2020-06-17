<template>
  <div>
    <BaseAppBarHeader title="Settings" />
    <div>
      <!--
      <settings-button title="My Account" to-link="Account"></settings-button>
      <settings-button
        title="My Business"
        to-link="Business"
      ></settings-button>
      -->
      <settings-button v-slot="{ linkStyling }">
        <button @click.prevent="signOut()" :class="linkStyling">
          <span class="mr-2 text-error">Log Out</span>
          <img :src="arrowForward" />
        </button>
      </settings-button>
    </div>
    <BaseNavigationBottom />
  </div>
</template>
<script>
import BaseAppBarHeader from '@/components/BaseAppBarHeader.vue';
import SettingsButton from '@/components/settings/SettingsButton.vue';
import arrowForward from '@/assets/arrow-forward.png';
import BaseNavigationBottom from '@/components/BaseNavigationBottom.vue';
import { mapActions } from 'vuex';

export default {
  name: 'SettingsPage',
  components: {
    BaseAppBarHeader,
    SettingsButton,
    BaseNavigationBottom
  },
  data() {
    return {
      arrowForward
    };
  },
  methods: {
    ...mapActions('auth', ['logout']),
    signOut() {
      this.logout().then(() => {
        this.$router.push({ name: 'Welcome' });
      });
    }
  }
};
</script>
