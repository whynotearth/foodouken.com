<template>
  <div>
    <BaseAppBarHeader title="Settings" />
    <div class="container">
      <settings-button title="My Account" to-link="Account"></settings-button>
      <settings-button title="My Business" to-link="Business"></settings-button>

      <div class="flex items-stretch items-center">
        <button
          @click.prevent="logout()"
          class="block flex-grow justify-between flex h-full items-center cursor-pointer select-none px-4 pr-6 py-5"
        >
          <span class="mr-2 text-error">Log Out</span>
          <img :src="arrowForward" />
        </button>
      </div>
      <hr class="border-white opacity-25" />
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
  mounted() {
    this.$store.commit('home/changeHomeLoading', false);
  },
  methods: {
    async logout() {
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
<style scoped>
.text-gray {
  color: rgba(0, 0, 0, 0.54);
}
</style>
