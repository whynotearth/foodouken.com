<template>
  <div>
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
import SettingsButton from '@/components/settings/SettingsButton.vue';
import arrowForward from '@/assets/arrow-forward.png';

export default {
  name: 'BusinessPage',
  components: { SettingsButton },
  data() {
    return {
      arrowForward
    };
  },
  computed: {
    appBar() {
      if (this.$route.meta.appBar) return this.$route.meta.appBar;
      return {
        title: 'Navbar',
        backRoute: { name: 'Home' }
      };
    }
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
