<template>
  <form action="" class="max-w-sm m-auto">
    <customer-info />
  </form>
</template>

<script>
import CustomerInfo from '@/components/forms/CustomerInfo';

export default {
  name: 'CheckoutForm',
  components: {
    CustomerInfo
  }
};
</script>

<style></style>
