<template>
  <div class="h-full">
    <hero-section :heroData="orgData" />
    <hr class="my-8 border-gray-700" />
    <section class="flex lg:flex-row flex-col-reverse my-4">
      <div class="lg:w-8/12 lg:border-r border-white lg:pr-8">
        <category-holder :categories="categories" />
        <h3
          v-if="category"
          class="text-5xl text-white font-bold text-center mb-4"
        >
          {{ loadingCategory ? 'Loading category...' : category.title }}
        </h3>
        <p class="text-gray-500 text-center mb-8 text-lg">Prices per piece</p>
        <card-holder />
      </div>
      <div class="lg:w-4/12 lg:ml-4">
        <checkout-form v-if="form" />
        <h3 class="text-5xl text-white font-bold text-center mb-8">
          Cart
        </h3>
        <template v-if="cart.length">
          <cart />
          <p class="text-gray-500 text-center text-lg my-4">
            Estimated Delivery Time: 45 minutes.
          </p>
          <div v-if="!form" class="w-full text-center my-4 hidden md:block">
            <Button title="Order now" @clicked="form = true" />
          </div>
        </template>
        <empty-cart v-else />
      </div>
    </section>
    <sticky-cta
      v-if="cart.length"
      centerContent="Order Now"
      v-bind:rightContent="total | formatPrice"
      border="rounded-lg"
      v-bind:boxShadow="true"
      v-bind:mobileOnly="true"
      class="mt-8 pb-4"
    />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import CardHolder from '@/components/cards/CardHolder.vue';
import CategoryHolder from '@/components/categories/CategoryHolder.vue';
import Button from '@/components/Button.vue';
import Cart from '@/components/cart/Cart.vue';
import EmptyCart from '@/components/cart/EmptyCart.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    HeroSection,
    CardHolder,
    CategoryHolder,
    Button,
    Cart,
    EmptyCart,
    CheckoutForm: () => import('@/components/forms/CheckoutForm.vue')
  },
  data() {
    return {
      form: false
    };
  },
  created() {
    this.fetchHomeData();
  },
  methods: {
    ...mapActions('home', ['fetchHomeData'])
  },
  computed: {
    ...mapGetters({
      category: 'category/getCategory',
      loadingCategory: 'category/getCategoryLoading',
      orgData: 'home/getOrgData',
      categories: 'home/getCategories',
      cart: 'cart/cartItems'
    })
  }
};
</script>
