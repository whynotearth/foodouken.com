<template>
  <div>
    <BaseAppBarHeader title="My Business" toLink="/settings/" />
    <div class="container">
      <settings-button
        title="Business Info"
        to-link="BusinessInfo"
      ></settings-button>
      <settings-button
        title="Business Hours"
        to-link="BusinessHours"
      ></settings-button>
      <settings-button
        title="Location"
        to-link="BusinessLocation"
      ></settings-button>
    </div>
  </div>
</template>
<script>
import BaseAppBarHeader from '@/components/BaseAppBarHeader.vue';
import SettingsButton from '@/components/settings/SettingsButton.vue';
import arrowForward from '@/assets/arrow-forward.png';

export default {
  name: 'BusinessPage',
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
