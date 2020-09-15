<template>
  <div
    class="mt-6 sm:-mx-1 md:mx-3 lg:mx-2 min-h-screen w-full flex flex-col justify-between"
  >
    <span v-if="apiError" class="my-8 mx-4 text-sm text-red-600">
      {{ apiError }}
    </span>

    <BusinessHours
      :tenantBusinessHours="tenant.businessHours"
      :isSignUpFlow="false"
    />
  </div>
</template>

<script>
import BusinessHours from '@/components/tenant/BusinessHours.vue';
import { mapActions } from 'vuex';

export default {
  name: 'ViewBusinessHours',
  components: {
    BusinessHours
  },
  data() {
    return {
      tenant: {},
      apiError: ''
    };
  },
  created() {
    this.init();
  },
  methods: {
    ...mapActions('tenant', ['fetchTenantDetails']),
    async init() {
      let slug = this.$route.params.tenantSlug;
      this.fetchTenantDetails({ slug: slug })
        .then(tenant => {
          this.tenant = tenant;
          this.promotionValue = tenant.promotionPercent;
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
