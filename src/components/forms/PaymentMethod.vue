<template>
  <div class="select-none">
    <div class="w-full bg-secondary rounded-lg shadow mb-2">
      <RadioInput v-model="paymentMethod" value="Cash" class="p-5" />
      <hr class="border-gray-700" />
      <RadioInput
        v-model="paymentMethod"
        value="ABA Bank Transfer"
        class="p-5"
      />
    </div>
    <CheckoutNavBar
      nextStepText="Review your order ►"
      @previousStep="decrementPage"
      @nextStep="pageChange(5)"
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
  methods: {
    ...mapMutations('form', ['pageChange', 'updatePaymentMethod']),
    decrementPage() {
      const pageToGo = this.page - 1;
      this.pageChange(pageToGo);
    }
  },
  computed: {
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

<style></style>
