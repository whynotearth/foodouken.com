<template>
  <div class="select-none">
    <div class="w-full bg-secondary rounded-lg shadow mb-2">
      <RadioInput
        v-for="(type, index) in getPaymentMethodTypes"
        :key="index"
        v-model="paymentMethod"
        :value="type"
        class="p-5 border-b border-gray-700 last:border-none"
      />
    </div>
    <CheckoutNavBar
      nextStepText="Review your order ►"
      @previousStep="decrementPage"
      @nextStep="pageChangeWrapper(5)"
    />
  </div>
</template>

<script>
import RadioInput from '@/components/inputs/RadioInput';
import CheckoutNavBar from '@/components/forms/CheckoutNavBar.vue';
import calendar from '@/assets/calendar.png';

import down from '@/assets/down.png';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'PaymentMethod',
  components: { RadioInput, CheckoutNavBar },
  data() {
    return {
      calendar: calendar,
      down: down
    };
  },
  created() {
    this.paymentMethod = this.getPaymentMethodTypes[0];
  },
  methods: {
    ...mapMutations('form', ['pageChange', 'updatePaymentMethod']),
    decrementPage() {
      const pageToGo = this.page - 1;
      this.pageChangeWrapper(pageToGo);
    },
    pageChangeWrapper(page) {
      this.$emit('pageChange', page);
      this.pageChange(page);
    }
  },
  computed: {
    ...mapGetters('shop', ['getPaymentMethodTypes']),
    ...mapGetters('form', ['getPaymentMethod', 'page']),
    paymentMethod: {
      get() {
        return this.getPaymentMethod;
      },
      set(value) {
        this.updatePaymentMethod(value);
      }
    }
  }
};
</script>
