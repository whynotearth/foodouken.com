<template>
  <div class="h-full">
    <hero-section :heroData="orgData" />
    <hr class="my-8 border-gray-700" />
    <section class="flex lg:flex-row flex-col-reverse my-4">
      <div class="lg:w-8/12 lg:border-r border-white lg:pr-8">
        <category-holder :categories="categories" />
        <h3 class="text-5xl text-white font-bold text-center mb-4">
          {{ category.title }}
        </h3>
        <p class="text-gray-500 text-center mb-8 text-lg">Prices per piece</p>
        <transition name="products-container" mode="out-in">
          <Spinner v-if="loadingCategory" />
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
        >
          Cart
        </h3>
        <template v-if="cart.length">
          <cart />
          <p class="text-gray-500 text-center text-lg my-4">
            Estimated Delivery Time: 45 minutes.
          </p>
          <div v-if="!form" class="w-full text-center my-4 hidden lg:block">
            <Button title="Order now" @clicked="triggerForm(true)" />
          </div>
        </template>
        <empty-cart v-else-if="!cart.length" />
      </div>
    </section>
    <div
      v-if="cart.length && !form"
      class="sticky inset-x-0 bottom-0 mt-8 pb-4"
    >
      <div
        class="flex flex-row items-center p-2 bg-button rounded-lg shadow-md lg:hidden"
      >
        <div class="flex-1" />
        <div class="flex-grow text-center">
          <a @click.prevent="showForm" class="font-semibold">Order Now</a>
        </div>
        <div class="flex-1 text-right">
          {{ total | formatPrice }}
        </div>
      </div>
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
  name: 'Home',
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
    this.fetchHomeData();
  },
  methods: {
    showForm() {
      this.triggerForm(true);
      this.$refs.checkoutFormContainer.scrollIntoView();
    },
    ...mapActions('home', ['fetchHomeData']),
    ...mapMutations('form', ['triggerForm'])
  },
  computed: {
    ...mapGetters({
      category: 'category/getCategory',
      loadingCategory: 'category/getCategoryLoading',
      orgData: 'home/getOrgData',
      categories: 'home/getCategories',
      cart: 'cart/cartItems',
      total: 'cart/total',
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
.products-container-enter-active,
.products-container-leave-active {
  transition: opacity 0.3s ease;
}
.products-container-enter,
.products-container-leave-to {
  opacity: 0;
}
</style>
