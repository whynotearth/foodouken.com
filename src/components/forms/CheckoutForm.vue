<template>
  <div>
    <div class="max-w-sm m-auto bg-footer shadow-md mb-4">
      <div class="flex items-center p-2">
        <div class="flex-1 text-2xl">
          <a @click="decrementPage" v-if="page != 1">←</a>
        </div>
        <div class="flex-grow text-center">
          <h3 class="text-2xl font-bold">{{ pageHeader }}</h3>
        </div>
        <div class="flex-1 text-2xl text-right">
          <a @click="incrementPage" v-if="page != pageCount">→</a>
        </div>
      </div>
      <div class="flex justify-center pb-4">
        <div v-for="pageNum in pageCount" :key="pageNum" class="rounded-full">
          <svg
            class="h-4 w-4 stroke-current fill-current"
            :class="[pageNum === page ? 'text-button' : 'text-inactive']"
          >
            <circle cx="8" cy="8" r="4" />
          </svg>
        </div>
      </div>
    </div>
    <form action="" class="max-w-sm m-auto">
      <customer-info v-if="page === 1" />
      <customer-address v-if="page === 2" />
      <delivery-time v-if="page === 3" />
      <payment-method v-if="page === 4" />
    </form>
  </div>
</template>

<script>
import CustomerInfo from '@/components/forms/CustomerInfo';
import CustomerAddress from '@/components/forms/CustomerAddress';
import DeliveryTime from '@/components/forms/DeliveryTime';
import PaymentMethod from '@/components/forms/PaymentMethod';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'CheckoutForm',
  data() {
    return {
      pageCount: 4
    };
  },
  components: {
    CustomerInfo,
    CustomerAddress,
    DeliveryTime,
    PaymentMethod
  },
  methods: {
    ...mapMutations('form', ['pageChange']),
    incrementPage() {
      const pageToGo = this.page + 1;
      this.pageChange(pageToGo);
    },
    decrementPage() {
      const pageToGo = this.page - 1;
      this.pageChange(pageToGo);
    }
  },
  computed: {
    ...mapGetters('form', ['page']),
    pageHeader() {
      switch (this.page) {
        case 1: {
          return 'Customer Info';
        }
        case 2: {
          return 'Customer Address';
        }
        case 3: {
          return 'Delivery Time';
        }
        case 4: {
          return 'Payment Method';
        }
        default: {
          return '';
        }
      }
    }
  }
};
</script>

<style></style>
