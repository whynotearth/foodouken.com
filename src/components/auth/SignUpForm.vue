<template>
  <div class="h-screen w-screen flex items-stretch justify-center items-center">
    <div class="h-full w-full flex flex-col justify-between">
      <div>
        <StepperTop
          class="clear-margin"
          :navigation="navigation"
          :page="page"
        />
        <div class="my-4">
          <transition name="fade" mode="out-in">
            <keep-alive>
              <component
                :is="component"
                :ref="component"
                @nextStep="nextStep"
              ></component>
            </keep-alive>
          </transition>
          <div v-if="errors" class="px-4 text-error text-xs">
            <div v-for="(error, key) in errors" :key="key">
              <p v-for="(detail, key) in error" :key="key">{{ detail }}</p>
            </div>
          </div>
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
        :firstPageStepBack="true"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import StepperTop from '@/components/BaseStepperTopBar';
import StepperBottom from '@/components/BaseStepperBottomBar';
import BusinessInfo from '@/components/tenant/BusinessInfo';
import LinkAccount from '@/components/tenant/LinkAccount';
import Notifications from '@/components/tenant/Notifications';
import BusinessHours from '@/components/tenant/BusinessHours';
import PaymentMethods from '@/components/tenant/PaymentMethods';

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
      ],
      errors: null
    };
  },
  computed: {
    ...mapGetters('tenant', ['page']),
    component() {
      return this.navigation[this.page - 1].step;
    }
  },
  created() {
    if (
      !this.$route.query.signUpStarted &&
      this.$route.params.step !== 'business-info'
    ) {
      this.$router.replace({ params: { step: 'business-info' } });
    }
  },
  methods: {
    ...mapMutations('tenant', ['pageChange', 'resetCreateTenantForm']),
    ...mapActions('tenant', ['createTenant']),
    ...mapActions('auth', ['ping']),
    previousStep() {
      if (this.page > 1) {
        this.pageChange(this.page - 1);
      } else if (this.page === 1) {
        this.$router.push({ name: 'Welcome' });
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
      this.createTenant()
        .then(res => {
          this.$router.push({
            name: 'SignUpSuccess',
            params: { slug: res }
          });
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },
  destroyed() {
    this.updateIsSignUpStarted(false);
  },
  watch: {
    component(step) {
      this.$router.push({ name: 'SignUp', params: { step } }).catch(() => {});
    },
    '$route.params.step': {
      immediate: true,
      handler() {
        const stepFromUrl = this.$route.params.step;
        const index = this.navigation.findIndex(
          nav => nav.step === stepFromUrl
        );

        if (index >= 0) {
          this.pageChange(index + 1);
        } else if (index < 0) {
          this.$router.push({ name: 'Welcome' });
        }
      }
    }
  }
};
</script>
