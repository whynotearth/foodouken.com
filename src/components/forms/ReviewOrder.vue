<template>
  <div class="w-full">
    <cart />
    <div class="w-full text-left text-white">
      <h4 class="text-4xl font-bold mb-5">Customer Details</h4>
      <div class="flex">
        <img class="w-6 h-6 mr-6" :src="home" alt="" />
        <h6 class="text-gray-500 text-xl font-bold">Delivery Address</h6>
      </div>
      <div class="mb-5">
        <a
          v-if="address.type === 'link'"
          class="underline"
          :href="address.value"
        >
          View location
        </a>
        <p v-if="address.type === 'text'">
          {{ address.value }}
        </p>
      </div>
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
      <p class=" mb-5">
        {{ new Date(getTotalTime).toString().substring(0, 21) }}
      </p>
    </div>
    <span class="text-red-600" v-if="orderError">
      {{ orderError }}
    </span>
    <CheckoutNavBar
      nextStepText="Submit Order ►"
      @previousStep="decrementPage"
      @nextStep="submitForm"
    />
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
import CheckoutNavBar from '@/components/forms/CheckoutNavBar.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'ReviewOrder',
  components: {
    Cart,
    CheckoutNavBar
  },
  data() {
    return {
      home,
      person,
      phone,
      email,
      dollar,
      clock,
      orderError: ''
    };
  },
  computed: {
    ...mapGetters('form', [
      'getName',
      'getTown',
      'getFloor',
      'getApartment',
      'getParking',
      'getBuildingName',
      'getStreet',
      'getAddressOption',
      'getGoogleLocation',
      'getPhone',
      'getEmail',
      'getSpecialRequest',
      'getPaymentMethod',
      'page',
      'getTotalTime',
      'getGoogleLocation'
    ]),
    ...mapGetters('cart', ['cartItems', 'subTotal', 'total', 'totalTax']),
    ...mapGetters('shop', ['getDeliveryFee']),
    address() {
      let address = {
        type: '',
        value: ''
      };
      if (this.getAddressOption === 'Use my location') {
        address.type = 'link';
        address.value = this.getGoogleLocation;
        return address;
      } else {
        this.getApartment.length > 0
          ? (address.value += `Apartment: ${this.getApartment}, `)
          : '';
        this.getFloor.length > 0
          ? (address.value += `Floor: ${this.getFloor}, `)
          : '';
        this.getBuildingName.length > 0
          ? (address.value += `Floor: ${this.getBuildingName}, `)
          : '';
        this.getStreet.length > 0
          ? (address.value += `Street: ${this.getStreet}, `)
          : '';
        this.getTown.length > 0
          ? (address.value += `Town: ${this.getTown}, `)
          : '';
        this.getParking.length > 0
          ? (address.value += `Street: ${this.getTown}, `)
          : '';
        address.type = 'text';
        return address;
      }
    }
  },
  methods: {
    ...mapMutations('form', ['pageChange']),
    ...mapActions('form', ['ping', 'register', 'submit']),
    decrementPage() {
      const pageToGo = this.page - 1;
      this.pageChange(pageToGo);
    },
    submitForm() {
      let orders = this.cartItems.map(ci => {
        return {
          name: ci.product.name,
          count: ci.count,
          price: ci.product.price
        };
      });
      const formData = {
        orders: orders,
        subTotal: this.subTotal,
        deliveryFee: this.getDeliveryFee,
        amount: this.total,
        tax: this.totalTax,
        deliveryDateTime: this.getTotalTime,
        paymentMethod: this.getPaymentMethod,
        message: this.getSpecialRequest,
        userTimeZoneOffset: new Date().getTimezoneOffset()
      };
      this.ping()
        .catch(() => {
          this.register().catch(error => {
            this.orderError = error.response.data[0].description;
          });
        })
        .finally(() => {
          this.submit(formData)
            .then(() => {
              this.pageChange(6);
            })
            .catch(() => {
              this.orderError = 'Something went wrong, please try again';
            });
        });
    }
  }
};
</script>
