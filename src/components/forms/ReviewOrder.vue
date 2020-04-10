<template>
  <div class="w-full">
    <cart />
    <div class="w-full text-left">
      <h4 class="text-white text-2xl mb-5">Customer Details</h4>
      <div class="flex">
        <img class="w-6 h-6 mr-6" :src="home" alt="" />
        <h6 class="text-gray-500">Delivery Address</h6>
      </div>
      <p class=" mb-5">{{ getStreet }}</p>
      <div class="flex">
        <img class="w-6 h-6 mr-6" :src="person" alt="" />
        <h6>Customer Name</h6>
      </div>
      <p class=" mb-5">{{ getName }}</p>
      <div class="flex">
        <img class="w-6 h-6 mr-6" :src="phone" alt="" />
        <h6>Phone Number</h6>
      </div>
      <p class=" mb-5">{{ getPhone }}</p>
      <div class="flex">
        <img class="w-6 h-6 mr-6" :src="email" alt="" />
        <h6>Email</h6>
      </div>
      <p class=" mb-5">{{ getEmail }}</p>
      <div class="flex">
        <img class="w-6 h-6 mr-6" :src="dollar" alt="" />
        <h6>Payment Method</h6>
      </div>
      <p class=" mb-5">{{ getPaymentMethod }}</p>
      <div class="flex">
        <img class="w-6 h-6 mr-6" :src="clock" alt="" />
        <h6>Estimated Delivery Time</h6>
      </div>
      <p class=" mb-5">{{ getDeliveryTime }}</p>
    </div>
    <div class="w-full text-center my-4">
      <Button title="Submit Order" @clicked="submit" />
    </div>
  </div>
</template>
<script>
import home from '@/assets/home.png';
import person from '@/assets/person.png';
import phone from '@/assets/phone-dark.png';
import email from '@/assets/email.png';
import dollar from '@/assets/dollar.png';
import clock from '@/assets/clock.png';
import Cart from '@/components/cart/Cart.vue';
import Button from '@/components/Button.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ReviewOrder',
  components: {
    Cart,
    Button
  },
  data() {
    return {
      home,
      person,
      phone,
      email,
      dollar,
      clock
    };
  },
  computed: {
    ...mapGetters('form', [
      'getName',
      'getStreet',
      'getPhone',
      'getEmail',
      'getSpecialRequest',
      'getPaymentMethod'
    ]),
    getDeliveryTime() {
      return '45 Minutes';
    }
  },
  methods: {
    ...mapMutations('form', ['pageChange']),
    submit() {
      // TODO: push customer data to database
      this.pageChange(6);
    }
  }
};
</script>
