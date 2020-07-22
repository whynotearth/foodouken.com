<template>
  <div>
    <div class="mt-6">
      <h3 class="mx-4 tg-h3-mobile text-white text-opacity-84">
        Account Settings
      </h3>
      <settings-button title="My Account" :to="{ name: 'Account' }" />
    </div>
    <hr class="border-gray-700" />
    <div class="my-6">
      <div v-for="tenant in tenants" :key="tenant.slug">
        <h3 class="mx-4 capitalize tg-h3-mobile text-white text-opacity-84">
          {{ tenant.name }}
        </h3>
        <!-- <settings-button title="Dashboard" :to="{ name: 'Dashboard' }" /> -->
        <settings-button
          title="Menu"
          :to="{
            name: 'MenuCategoryList',
            params: {
              tenantSlug: tenant.slug
            }
          }"
        />
        <settings-button
          title="Promotions"
          :to="{
            name: 'Promotion',
            params: {
              tenantSlug: tenant.slug
            }
          }"
        />
      </div>
    </div>
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
      arrowForward,
      tenants: [],
      apiError: ''
    };
  },
  created() {
    this.init();
  },
  methods: {
    ...mapActions('auth', ['logout']),
    ...mapActions('tenant', ['fetchUserTenants']),
    init() {
      this.fetchUserTenants()
        .then(tenants => {
          this.tenants = tenants;
        })
        .catch(error => {
          this.apiError = error.response.data.title
            ? error.response.data.title
            : 'Something went wrong, try again.';
          throw error;
        });
    },
    signOut() {
      this.logout().then(() => {
        this.$router.push({ name: 'Home' });
      });
    }
  }
};
</script>
