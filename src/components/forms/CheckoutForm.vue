<template>
  <div class="max-w-sm m-auto">
    <checkout-stepper v-if="page < 6" />
    <transition name="fade">
      <customer-info @pageChange="onPageChange" v-if="page === 1" />
      <customer-address @pageChange="onPageChange" v-if="page === 2" />
      <delivery-time @pageChange="onPageChange" v-if="page === 3" />
      <payment-method @pageChange="onPageChange" v-if="page === 4" />
      <review-order @pageChange="onPageChange" v-if="page === 5" />
      <thank-you @pageChange="onPageChange" v-if="page === 6" />
    </transition>
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

const orderingStepsSlug = [
  'your-info',
  'your-address',
  'delivery-time',
  'payment-method',
  'review-order',
  'thanks'
];

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
  },
  methods: {
    onPageChange(page) {
      this.changeRoute({ orderingStepSlug: orderingStepsSlug[page - 1] });
    },
    changeRoute(params) {
      const nextStepRoute = {
        ...this.$router.currentRoute,
        params: {
          ...this.$router.currentRoute.params,
          ...params
        }
      };

      this.$router.push(nextStepRoute).catch(() => {
        // Nothing
      });
    }
  }
};
</script>
