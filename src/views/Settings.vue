<template>
  <div>
    <BaseAppBarHeader title="Settings" :to-link="'/'" />
    <div class="container px-0 md:px-6">
      <div class="flex items-strech items-center border-b-1 border-divider">
        <router-link
          :to="{ name: 'EmailLists' }"
          class="link-fordward block flex-grow justify-between flex h-full items-center cursor-pointer select-none px-4 pr-6 py-5"
        >
          <span class="mr-2 tg-body-mobile ">My business</span>
          <font-awesome-icon :icon="angleRight" />
        </router-link>
      </div>
      <div class="flex items-strech items-center border-b-1 border-divider">
        <a
          @click.prevent="logout()"
          href="#"
          class="link-fordward block flex-grow justify-between flex h-full items-center cursor-pointer select-none px-4 pr-6 py-5"
        >
          <span class="mr-2 tg-body-mobile text-error">Log Out</span>
          <font-awesome-icon :icon="angleRight" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import BaseAppBarHeader from '@/components/BaseAppBarHeader.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleRight);

export default {
  name: 'SettingsPage',
  components: { BaseAppBarHeader },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('auth/logout');
        return this.$router.push({ name: 'Home' });
      } catch (error) {
        // TODO: snackbar
        console.log('logout failed');
      }
    }
  },
  computed: {
    angleRight() {
      return faAngleRight;
    }
  }
};
</script>
<style scoped>
.text-gray {
  color: rgba(0, 0, 0, 0.54);
}
</style>
