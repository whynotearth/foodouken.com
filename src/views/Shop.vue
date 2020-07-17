<template>
  <div class="h-full">
    <hero-section :heroData="orgData" />
    <hr class="my-8 border-gray-700" />
    <section class="flex lg:flex-row flex-col-reverse my-4 lg:min-h-screen">
      <div class="lg:w-8/12 lg:border-r border-white lg:pr-8">
        <category-holder />
        <transition name="fade" mode="out-in">
          <Spinner v-if="loadingCategory" class="min-h-screen" />
          <card-holder v-else />
        </transition>
      </div>
      <div class="lg:w-4/12 lg:ml-4">
        <div ref="checkoutFormContainer">
          <!-- checkout form -->
          <checkout-form v-if="form && cart.length" />
        </div>
        <h3
          class="text-5xl font-bold text-center mb-8"
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
            <Button title="Order now" @clicked="triggerFormWrapper(true)" />
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
        @clicked="showForm({ orderingStepSlug: 'your-info' })"
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
    this.fetchShopData(this.$route.params.slug);
    this.resetCartItems();
  },
  methods: {
    triggerFormWrapper(value) {
      this.triggerForm(value);
      this.changeRoute({ orderingStepSlug: 'your-info' });
    },
    changeRoute(params) {
      const nextStepRoute = {
        ...this.$router.currentRoute,
        params: {
          ...this.$router.currentRoute.params,
          ...params
        }
      };

      this.$router.push(nextStepRoute).catch(() => {
        // nothing
      });
    },
    showForm() {
      this.triggerForm(true);
      this.$refs.checkoutFormContainer.scrollIntoView();
    },
    ...mapActions('shop', ['fetchShopData']),
    ...mapMutations('form', ['triggerForm']),
    ...mapMutations('cart', ['resetCartItems'])
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
  },
  metaInfo() {
    return {
      title: this.orgData.name,
      meta: [
        { name: 'keywords', content: this.orgData.tags },
        { name: 'description', content: this.orgData.description },
        // OpenGraph data
        { property: 'og:title', content: this.orgData.name },
        { property: 'og:site_name', content: 'Foodouken' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: window.location.host + this.$route.fullPath
        },
        { property: 'og:image', content: this.orgData.logoUrl },
        {
          property: 'og:description',
          content: this.orgData.description
        },
        // Twitter card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: this.orgData.name },
        {
          name: 'twitter:description',
          content: this.orgData.description
        },
        { name: 'twitter:image', content: this.orgData.logoUrl },
        // Google / Schema.org markup:
        { itemprop: 'name', content: this.orgData.name },
        { itemprop: 'description', content: this.orgData.description },
        { itemprop: 'image', content: this.orgData.logoUrl }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: this.orgData.custom
        }
      ]
    };
  },
  beforeRouteEnter(to, from, next) {
    if (to.params.isActive) {
      next();
    }
  }
};
</script>
