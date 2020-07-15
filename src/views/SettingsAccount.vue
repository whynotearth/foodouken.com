<template>
  <div class="p-4">
    <h3 class="tg-h3-mobile text-white text-opacity-84">Business Management</h3>
    <span v-if="apiError" class="my-8 mx-4 text-sm text-red-600">
      {{ apiError }}
    </span>
    <transition-group
      name="fade"
      mode="out-in"
      class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4"
    >
      <div
        v-for="tenant in tenants"
        :key="tenant.slug"
        class="shadow-1dp bg-secondary rounded-lg p-2 max-w-sm"
      >
        <MenuItem
          :name="tenant.name"
          :image="tenant.logoUrl"
          @clicked="manageTenant(tenant)"
        >
          <template #subHeading>
            Foodouken
          </template>
        </MenuItem>
        <hr class="hr-divider" />
        <div class="flex justify-between py-2 px-1">
          <p class="text-base">
            Site Activation <br />
            <span class="text-sm font-light text-gray-500">
              Current Status - {{ getStatus() }}
            </span>
          </p>
          <BaseToggleSwitch
            :value="tenant.isActive"
            :key="tenant.slug"
            @change="changeStatus($event, tenant.slug)"
          />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem';
import BaseToggleSwitch from '@/components/inputs/BaseToggleSwitch.vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'SettingsAccount',
  components: { MenuItem, BaseToggleSwitch },
  data() {
    return {
      apiError: '',
      tenants: []
    };
  },
  created() {
    this.init();
  },
  beforeDestroy() {
    this.tenants = [];
    this.apiError = '';
  },
  computed: {
    ...mapGetters({
      getIsActive: 'tenant/getIsActive'
    })
  },
  methods: {
    ...mapActions('tenant', ['fetchUserTenants', 'changeActiveStatus']),
    ...mapMutations(['updateIsActive']),
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
    manageTenant(tenant) {
      this.$router.push({
        name: 'MenuCategoryList',
        params: { tenantSlug: tenant.slug, tenant: tenant }
      });
    },
    getStatus() {
      return this.getIsActive ? 'Active' : 'Draft Mode';
    },
    changeStatus(event, slug) {
      this.changeActiveStatus({ slug: slug, isActive: event })
        .then(() => {
          this.getStatus();
        })
        .catch(error => {
          this.apiError = error.response.data.title
            ? error.response.data.title
            : 'Something went wrong, try again.';
          throw error;
        });
    }
  }
};
</script>

<style scoped>
.hr-divider {
  background-color: #1f1f1f;
}
</style>
