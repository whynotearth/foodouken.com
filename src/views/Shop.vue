<template>
  <div class="h-full">
    <!-- Structured SEO Data starts -->
    <script v-html="orgData.custom" type="application/ld+json" />
    <!-- Structured SEO Data ends -->
    <hero-section :heroData="orgData" />
    <hr class="my-8 border-gray-700" />
    <section class="flex lg:flex-row flex-col-reverse my-4 min-h-screen">
      <div class="lg:w-8/12 lg:border-r border-white lg:pr-8">
        <category-holder />
        <transition name="fade" mode="out-in">
          <Spinner v-if="loadingCategory" class="min-h-screen" />
          <card-holder v-else />
        </transition>
      </div>
      <div class="lg:w-4/12 lg:ml-4">
        <div ref="checkoutFormContainer">
          <checkout-form v-if="form && cart.length" />
        </div>
        <h3
          class="text-5xl text-white font-bold text-center mb-8"
          :class="cart.length ? 'block' : 'hidden lg:block'"
          v-if="page < 5"
        >
          Cart
        </h3>
        <template v-if="cart.length && page < 5">
          <cart />
          <p class="text-gray-500 text-center text-lg my-4">
            Estimated Delivery Time: 45 minutes.
          </p>
          <div v-if="!form" class="max-w-sm my-4 m-auto hidden lg:block">
            <Button title="Order now" @clicked="triggerForm(true)" />
          </div>
        </template>
        <empty-cart v-else-if="!cart.length" />
      </div>
    </section>
    <div
      v-if="cart.length && !form"
      class="sticky inset-x-0 bottom-0 mt-8 pb-2"
    >
      <Button
        class="lg:hidden"
        title="Order now"
        :titleRight="subTotal | formatPrice"
        @clicked="showForm()"
      />
    </div>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import CardHolder from '@/components/cards/CardHolder.vue';
import CategoryHolder from '@/components/categories/CategoryHolder.vue';
import Button from '@/components/Button.vue';
import Cart from '@/components/cart/Cart.vue';
import EmptyCart from '@/components/cart/EmptyCart.vue';
import CheckoutForm from '@/components/forms/CheckoutForm.vue';
import Spinner from '@/components/Spinner.vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'shop',
  components: {
    HeroSection,
    CardHolder,
    CategoryHolder,
    Button,
    Cart,
    EmptyCart,
    CheckoutForm,
    Spinner
  },
  created() {
    this.fetchshopData(this.$route.params.slug);
  },
  methods: {
    showForm() {
      this.triggerForm(true);
      this.$refs.checkoutFormContainer.scrollIntoView();
    },
    ...mapActions('shop', ['fetchshopData']),
    ...mapMutations('form', ['triggerForm'])
  },
  computed: {
    ...mapGetters({
      orgData: 'shop/getOrgData',
      loadingCategory: 'category/getCategoryLoading',
      cart: 'cart/cartItems',
      subTotal: 'cart/subTotal',
      form: 'form/getFormActive',
      page: 'form/page'
    })
  },
  filters: {
    formatPrice: price => {
      return `$${price.toFixed(2)}`;
    }
  }
};
</script>

<style scoped>
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-leave-to {
  opacity: 0;
}
</style>
