<template>
  <div class="max-w-sm m-auto">
    <checkout-stepper />
    <customer-info v-if="page === 1" />
    <customer-address v-if="page === 2" />
    <delivery-time v-if="page === 3" />
    <payment-method v-if="page === 4" />
    <review-order v-if="page === 5" />
    <thank-you v-if="page === 6" />
  </div>
</template>

<script>
import CheckoutStepper from '@/components/forms/CheckoutStepper';
import CustomerInfo from '@/components/forms/CustomerInfo';
import CustomerAddress from '@/components/forms/CustomerAddress';
import DeliveryTime from '@/components/forms/DeliveryTime';
import PaymentMethod from '@/components/forms/PaymentMethod';
import ReviewOrder from '@/components/forms/ReviewOrder';
import ThankYou from '@/components/forms/ThankYou';
import { mapGetters } from 'vuex';

export default {
  name: 'CheckoutForm',
  components: {
    CheckoutStepper,
    CustomerInfo,
    CustomerAddress,
    DeliveryTime,
    PaymentMethod,
    ReviewOrder,
    ThankYou
  },
  computed: {
    ...mapGetters('form', ['page'])
  }
};
</script>

<style></style>
