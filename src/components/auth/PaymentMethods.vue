<template>
  <div class="px-6">
    <div class="my-4">
      <h6 class="tg-body-mobile text-white text-opacity-54">
        Select the payment methods that you accept:
      </h6>
    </div>
    <div>
      <div
        class="my-8"
        v-for="(paymentMethod, key) in paymentMethods"
        :key="key"
      >
        <CheckBox
          v-model="selectedPaymentMethods"
          :value="paymentMethod.id"
          :label="paymentMethod.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from '@/components/inputs/CheckBox';
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'PaymentMethods',
  components: { CheckBox },
  data() {
    return {};
  },
  computed: {
    ...mapState('auth', ['paymentMethods']),
    ...mapGetters('auth', ['getSelectedPaymentMethods']),
    selectedPaymentMethods: {
      get() {
        return this.getSelectedPaymentMethods;
      },
      set(value) {
        this.updateSelectedPaymentMethods(value);
      }
    }
  },
  methods: {
    ...mapMutations('auth', ['updateSelectedPaymentMethods'])
  }
};
</script>
