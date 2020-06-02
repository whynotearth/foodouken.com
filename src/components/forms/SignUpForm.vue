<template>
  <div class="max-w-sm m-auto">
    <checkout-stepper :navigation="navigation" />
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="component"></component>
      </keep-alive>
    </transition>
    <checkout-nav-bar
      :page="page"
      :nextStepText="`${navigation[page] ? navigation[page].name : 'SUBMIT' } ►`"
      @previousStep="previousStep"
      @nextStep="nextStep"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'SignUpForm',
  components: {
    CheckoutStepper: () => import('./CheckoutStepper'),
    CheckoutNavBar: () => import('./CheckoutNavBar'),
    BusinessInfo: () => import('./BusinessInfo'),
    LinkAccount: () => import('./LinkAccount'),
    Notifications: () => import('./Notifications'),
    BusinessHours: () => import('./BusinessHours'),
    PaymentMethods: () => import('./PaymentMethods'),
    SignUpSuccess: () => import('./SignUpSuccess')
  },
  data() {
    return {
      navigation: [
        {
          step: 'business-info',
          name: 'Business Info'
        },
        {
          step: 'link-account',
          name: 'Link Account'
        },
        {
          step: 'notifications',
          name: 'Notifications'
        },
        {
          step: 'business-hours',
          name: 'Business Hours'
        },
        {
          step: 'payment-methods',
          name: 'Payment Methods'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('form', ['page']),
    component() {
      return this.navigation[this.page - 1].step;
    },
    
  },
  methods: {
    ...mapMutations('form', ['pageChange']),
    previousStep() {
      if (this.page > 1) {
        this.pageChange(this.page - 1)
      }
    },
    nextStep() {
      if (this.page < this.navigation.length) {
        this.pageChange(this.page + 1)
      } else {
        this.register();
      }
    },
    register() {
      console.log('Register');
      // register shop
    }
  }
};
</script>
