<template>
  <div>
    <BaseAppBarHeader
      class="flex items-center bg-gray-200 h-24"
      :title="appBar.title"
      :toLink="appBar.backRoute"
    /><br />
    <transition name="fade" mode="out-in">
      <router-view class="container mx-auto"></router-view>
    </transition>
    <div class="container" v-if="$router.currentRoute.path === '/settings'">
      <settings-button title="My Account" to-link="Account"></settings-button>
      <settings-button title="My Business" to-link="Business"></settings-button>
      <settings-button v-slot="{ linkStyling }">
        <button @click.prevent="logout()" :class="linkStyling">
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
  },
  computed: {
    appBar() {
      if (this.$route.meta.appBar) return this.$route.meta.appBar;
      return {
        title: 'Navbar',
        backRoute: { name: 'Home' }
      };
    }
  }
};
</script>
<style scoped>
.container {
  max-width: 768px;
}
</style>
