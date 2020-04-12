<template>
  <div class="w-full">
    <cart />
    <div class="w-full text-left text-white">
      <h4 class="text-4xl font-bold mb-5">Customer Details</h4>
      <div class="flex">
        <img class="w-6 h-6 mr-6" :src="home" alt="" />
        <h6 class="text-gray-500 text-xl font-bold">Delivery Address</h6>
      </div>
      <p class=" mb-5">{{ getStreet }}</p>
      <div class="flex">
        <img class="w-6 h-6 mr-6" :src="person" alt="" />
        <h6 class="text-gray-500 text-xl font-bold">Customer Name</h6>
      </div>
      <p class=" mb-5">{{ getName }}</p>
      <div class="flex">
        <img class="w-6 h-6 mr-6" :src="phone" alt="" />
        <h6 class="text-gray-500 text-xl font-bold">Phone Number</h6>
      </div>
      <p class=" mb-5">{{ getPhone }}</p>
      <div class="flex">
        <img class="w-6 h-6 mr-6" :src="email" alt="" />
        <h6 class="text-gray-500 text-xl font-bold">Email</h6>
      </div>
      <p class=" mb-5">{{ getEmail }}</p>
      <div class="flex">
        <img class="w-6 h-6 mr-6" :src="dollar" alt="" />
        <h6 class="text-gray-500 text-xl font-bold">Payment Method</h6>
      </div>
      <p class=" mb-5">{{ getPaymentMethod }}</p>
      <div class="flex">
        <img class="w-6 h-6 mr-6" :src="clock" alt="" />
        <h6 class="text-gray-500 text-xl font-bold">Estimated Delivery Time</h6>
      </div>
      <p class=" mb-5">{{ getDeliveryTime }}</p>
    </div>
    <div class="w-full text-center my-4 flex">
      <div
        class="bg-footer w-1/3 uppercase text-left text-sm font-semibold px-4 py-4"
        @click="decrementPage"
        v-if="page != 1"
      >
        ◄ Back
      </div>
      <div
        class="bg-button flex-grow uppercase text-right text-sm font-semibold px-4 py-4"
        @clicked="submit"
      >
        Submit Order ►
      </div>
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
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ReviewOrder',
  components: {
    Cart
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
      'getPaymentMethod',
      'page'
    ]),
    getDeliveryTime() {
      return '45 Minutes';
    }
  },
  methods: {
    ...mapMutations('form', ['pageChange']),
    decrementPage() {
      const pageToGo = this.page - 1;
      this.pageChange(pageToGo);
    },
    submit() {
      // TODO: push customer data to database
      this.pageChange(6);
    }
  }
};
</script>
