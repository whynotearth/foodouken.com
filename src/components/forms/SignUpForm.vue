<template>
  <div class="h-screen flex justify-center items-center">
    <div class="h-full w-full flex flex-col justify-between max-w-sm md:m-auto">
      <div>
        <checkout-stepper class="clear-margin" :navigation="navigation" :pageS="page" />
        <div class="my-4">
          <transition name="fade" mode="out-in">
            <keep-alive>
              <component :is="component" :ref="component"></component>
            </keep-alive>
          </transition>
        </div>
      </div>
      <checkout-nav-bar
        :pageS="page"
        :nextStepText="`${navigation[page] && page < navigation.length ? 'NEXT STEP' : 'FINISH' } ►`"
        @previousStep="previousStep"
        @nextStep="nextStep"
        class="clear-margin"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

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
  mounted() {
    const stepFromUrl = this.$route.params.step;
    const ind = this.navigation.findIndex(nav => nav.step === stepFromUrl);

    if (ind > 0) {
      this.pageChange(ind + 1)
    } else if (ind < 0) {
      this.$router.push({name: 'Welcome'})
    }
  },
  computed: {
    ...mapGetters('auth', ['page']),
    component() {
      return this.navigation[this.page - 1].step;
    }
  },
  methods: {
    ...mapMutations('auth', ['pageChange']),
    ...mapActions('auth', ['signUp']),
    previousStep() {
      if (this.page > 1) {
        this.pageChange(this.page - 1)
      }
    },
    nextStep() {
      let valid = true;
      const isThereValidationAtComponent = !!this.$refs[this.component].$v;
      if (isThereValidationAtComponent) {
        this.$refs[this.component].$v.$touch();
        valid = !this.$refs[this.component].$v.$invalid;
      }

      if (valid) {
        if (this.page < this.navigation.length) {
          this.pageChange(this.page + 1)
        } else {
          this.register();
        }
      }
    },
    register() {
      this.signUp().then(data => {
        console.log(data);
        // this.$router.push({name: 'SignUpSuccess', params: { slug: 'bang-bang-bakery'}})
      }).catch(err => {
        console.log(err);
      });
    }
  },
  watch: {
    component(step) {
      this.$router.push({ name: 'SignUp', params: { step } })
        .catch(() => {})
    }
  }
};
</script>

<style scoped>
  .clear-margin {
    @apply m-0 !important;
  }
</style>