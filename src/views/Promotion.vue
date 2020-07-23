<template>
  <div class="p-4">
    <p class="text-sm md:text-lg text-white text-opacity-84">
      Promotion will be applied store-wide.
    </p>
    <span v-if="apiError" class="my-8 mx-4 text-sm text-red-600">
      {{ apiError }}
    </span>
    <div class="my-4 shadow-1dp bg-secondary rounded-lg p-2 max-w-sm">
      <MaterialInput
        class="mt-3"
        label="Discount"
        type="number"
        :value="tenant.promotionPercent"
        @input="getPromotionValue"
      />
      <hr class="border-white border-opacity-12" />
      <div class="flex justify-between py-2 px-1">
        <p class="text-base">
          Promotion Status <br />
          <span class="text-sm font-light text-gray-500">
            Current Status -
            {{ tenant.hasPromotion ? 'Actived' : 'InActivated' }}
          </span>
        </p>
        <BaseToggleSwitch :value="tenant.hasPromotion" @change="changeStatus" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseToggleSwitch from '@/components/inputs/BaseToggleSwitch.vue';
import MaterialInput from '@/components/inputs/MaterialInput.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Promotion',
  components: {
    MaterialInput,
    BaseToggleSwitch
  },
  data() {
    return {
      tenant: {},
      apiError: '',
      promotionValue: 0
    };
  },
  created() {
    this.init();
  },
  methods: {
    ...mapActions('tenant', ['fetchTenantDetails', 'changePromotionStatus']),
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
    },
    changeStatus(value) {
      let paylod = {
        slug: this.tenant.slug,
        hasPromotion: value,
        promotionPercent: this.promotionValue
      };
      this.changePromotionStatus(paylod)
        .then(this.init)
        .catch(error => {
          this.apiError = error.response.data.title
            ? error.response.data.title
            : 'Something went wrong, try again.';
          throw error;
        });
    },
    getPromotionValue(value) {
      this.promotionValue = value;
    }
  }
};
</script>
