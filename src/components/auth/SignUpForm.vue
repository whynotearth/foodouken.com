<template>
  <div class="h-screen flex justify-center items-center">
    <div class="h-full w-full flex flex-col justify-between max-w-sm md:m-auto">
      <div>
        <StepperTop
          class="clear-margin"
          :navigation="navigation"
          :page="page"
        />
        <div class="my-4">
          <transition name="fade" mode="out-in">
            <keep-alive>
              <component :is="component" :ref="component"></component>
            </keep-alive>
          </transition>
        </div>
      </div>
      <StepperBottom
        :page="page"
        :nextStepText="
          `${
            navigation[page] && page < navigation.length
              ? 'NEXT STEP'
              : 'FINISH'
          } ►`
        "
        @previousStep="previousStep"
        @nextStep="nextStep"
        class="clear-margin"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import StepperTop from '@/components/BaseStepperTopBar';
import StepperBottom from '@/components/BaseStepperBottomBar';
import BusinessInfo from './BusinessInfo';
import LinkAccount from './LinkAccount';
import Notifications from './Notifications';
import BusinessHours from './BusinessHours';
import PaymentMethods from './PaymentMethods';

export default {
  name: 'SignUpForm',
  components: {
    StepperTop,
    StepperBottom,
    BusinessInfo,
    LinkAccount,
    Notifications,
    BusinessHours,
    PaymentMethods
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
    };
  },
  mounted() {
    const stepFromUrl = this.$route.params.step;
    const ind = this.navigation.findIndex(nav => nav.step === stepFromUrl);

    if (ind > 0) {
      this.pageChange(ind + 1);
    } else if (ind < 0) {
      this.$router.push({ name: 'Welcome' });
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
        this.pageChange(this.page - 1);
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
          this.pageChange(this.page + 1);
        } else {
          this.register();
        }
      }
    },
    register() {
      this.signUp()
        .then(() => {
          this.$router.push({
            name: 'SignUpSuccess',
            params: { slug: 'bang-bang-bakery' }
          });
        })
        .catch(() => {});
    }
  },
  watch: {
    component(step) {
      this.$router.push({ name: 'SignUp', params: { step } }).catch(() => {});
    }
  }
};
</script>

<style scoped>
.clear-margin {
  @apply m-0 !important;
}
</style>
