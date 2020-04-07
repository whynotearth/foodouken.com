<template>
  <form action="" class="max-w-sm m-auto">
    <customer-info v-if="page === 1" />
    <customer-address v-if="page === 2" />
  </form>
</template>

<script>
import CustomerInfo from '@/components/forms/CustomerInfo';
import CustomerAddress from '@/components/forms/CustomerAddress';
import { mapGetters } from 'vuex';

export default {
  name: 'CheckoutForm',
  components: {
    CustomerInfo,
    CustomerAddress
  },
  computed: {
    ...mapGetters('form', ['page'])
  }
};
</script>

<style></style>
