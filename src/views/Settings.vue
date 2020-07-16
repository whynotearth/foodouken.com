<template>
  <div>
    <settings-button title="My Account" to-link="Account"></settings-button>
    <!-- <settings-button title="My Business" to-link="Business"></settings-button> -->
    <settings-button v-slot="{ linkStyling }">
      <button @click.prevent="signOut()" :class="linkStyling">
        <span class="mr-2 text-error">Log Out</span>
        <img :src="arrowForward" />
      </button>
    </settings-button>
  </div>
</template>

<script>
import SettingsButton from '@/components/settings/SettingsButton.vue';
import arrowForward from '@/assets/arrow-forward.png';
import { mapActions } from 'vuex';

export default {
  name: 'SettingsPage',
  components: {
    SettingsButton
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
        this.$router.push({ name: 'Home' });
      });
    }
  }
};
</script>
