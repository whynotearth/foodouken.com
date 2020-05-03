<template>
  <div>
    <BaseAppBarHeader title="Settings" />
    <div class="container">
      <settings-button title="My Account" to-link="Account"></settings-button>
      <settings-button title="My Business" to-link="Business"></settings-button>
      <settings-button >
        <button
          @click.prevent="logout()"
          v-slot="{ linkStyling }"
          :class="linkStyling"
        >
          <span class="mr-2 text-error">Log Out</span>
          <img :src="arrowForward" />
        </button>
      </settings-button>
    </div>
  </div>
</template>
<script>
import BaseAppBarHeader from '@/components/BaseAppBarHeader.vue';
import SettingsButton from '@/components/settings/SettingsButton.vue';
import arrowForward from '@/assets/arrow-forward.png';

export default {
  name: 'SettingsPage',
  components: { BaseAppBarHeader, SettingsButton },
  data() {
    return {
      arrowForward
    };
  },
  methods: {
    async logout() {
      // Auth is not yet implemented; Copied from Volkswagen
      try {
        await this.$store.dispatch('auth/logout');
        return this.$router.push({ name: 'AuthLogin' });
      } catch (error) {
        return error;
      }
    }
  }
};
</script>
