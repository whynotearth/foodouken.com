<template>
  <div class="product-detail-modal">
    <div
      v-if="product"
      @click="$emit('clearSelectedProduct')"
      class="fixed w-screen h-screen top-0 left-0 bg-background z-50 overflow-y-scroll"
    >
      <div class="sm:flex justify-center items-center sm:items-start h-full">
        <div
          @click.stop
          class="sm:w-128 sm:h-160 relative"
        >
          <div>
            <div class="absolute top-0 left-0 px-4 py-2">
              <span class="flex">
                <img
                  :src="arrowBack"
                  alt="arrow-back"
                  @click="$emit('clearSelectedProduct')"
                  class="cursor-pointer text-white text-opacity-54"
                />
              </span>
            </div>
            <div>
              <img
                class="w-screen sm:w-full h-64"
                :src="product.images[0]"
                alt="product"
              />
            </div>
            <div class="p-4">
              <div class="mb-4">
                <h2 class="tg-h2-mobile">{{ product.name }}</h2>
              </div>
              <div>
                <h6 class="tg-body-mobile text-white text-opacity-54">
                  ${{ product.price }}
                </h6>
              </div>
              <hr class="border-gray-700 my-8" />
              <div>
                <h3 class="tg-h3-mobile">Select Option</h3>
                <p class="tg-caption-mobile text-white text-opacity-54 py-2">
                  Required
                </p>

                <div class="w-full bg-secondary rounded-lg shadow my-4">
                  <div
                    v-for="(variant, index) in product.variations"
                    :key="index"
                  >
                    <RadioInput
                      v-model="selectedOption"
                      :value="variant"
                      class="p-5"
                    >
                      <template #title>
                        <div class="w-full flex justify-between tg-body-mobile">
                          <span class="text-white text-opacity-84">{{
                            variant.name
                          }}</span>
                          <span
                            class="text-white text-opacity-54"
                            v-if="variant.price > 0"
                            >+ ${{ variant.price }}</span
                          >
                        </div>
                      </template>
                    </RadioInput>
                    <hr
                      v-if="index !== product.variations.length - 1"
                      class="border-gray-700"
                    />
                  </div>
                </div>
                <div
                  v-if="$v.selectedOption.$dirty && !$v.selectedOption.required"
                  class="text-error text-xs"
                >
                  Option is required
                </div>
              </div>
              <hr class="border-gray-700 my-8" />
              <div>
                <h5>Additions</h5>

                <div class="w-full bg-secondary rounded-lg shadow mb-2 my-4" v-if="additions">
                  <div
                    class="px-5 py-4"
                    v-for="(attribute, index) in additions"
                    :key="index"
                  >
                    <div class="flex justify-between">
                      <div class="flex items-center text-white text-opacity-84">
                        <div>
                          <QuantityInput
                            v-model="attribute.count"
                            :counterClasses="'text-gray-500'"
                          />
                        </div>
                        <div class="ml-4">
                          {{ attribute.name }}
                        </div>
                      </div>
                      <div class="text-white text-opacity-54">
                        + ${{ attribute.price }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="border-gray-700 my-12" />
              <div class="flex justify-center">
                <div v-if="productAtCart">
                  <QuantityInput
                    class="tg-h2-mobile"
                    v-model="productAtCart.count"
                    :buttonClasses="'w-8'"
                    :counterClasses="'mx-4'"
                    :min="1"
                  />
                </div>
              </div>
              <div class="sticky bottom-0 left-0 w-full py-4 mt-8" v-if="productAtCart">
                <Button
                  :title="`Add ${productAtCart.count} To Cart`"
                  :titleRight="totalPrice"
                  buttonBg="bg-primary"
                  class="tg-color-label-mobile text-white text-opacity-84 rounded-lg py-3 md:px-5"
                  @clicked="updateProduct"
                >
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arrowBack from '@/assets/arrow-back.png';
import RadioInput from '@/components/inputs/RadioInput.vue';
import Button from '@/components/Button.vue';
import QuantityInput from '@/components/inputs/QuantityInput.vue';
import { required } from 'vuelidate/lib/validators';

import { mapActions } from 'vuex';

export default {
  name: 'ProductDetail',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  validations: {
    selectedOption: {
      required
    }
  },
  components: {
    RadioInput,
    Button,
    QuantityInput
  },
  data() {
    return {
      arrowBack,
      productAtCart: null,
      additions: this.product.productAttributes.map(item => {
        return {
          count: 0,
          ...item
        };
      }),
      selectedOption: null
    };
  },
  async created() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('overflow-hidden');
    this.$once('hook:destroyed', () => {
      body.classList.remove('overflow-hidden');
    });
    const productAtCart = await this.getCartProductById(this.product.id);
    this.productAtCart = productAtCart
      ? productAtCart
      : { count: 1, product: this.product };
  },
  methods: {
    ...mapActions('cart', ['getCartProductById', 'updateCartProductById']),
    async updateProduct() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        await this.updateCartProductById(this.productAtCart);
        this.$emit('clearSelectedProduct');
      }
    }
  },
  computed: {
    totalPrice() {
      const exactPrice =
        this.productAtCart &&
        this.productAtCart.count * this.productAtCart.product.price;
      let extras = 0;
      if (this.selectedOption && this.selectedOption.price) {
        extras += this.selectedOption.price;
      }

      if (this.additions.length > 0) {
        const totalAdditionPrice = this.additions.reduce((total, current) => {
          total += current.price * current.count;
          return total;
        }, 0);
        extras += totalAdditionPrice;
      }

      return `$${exactPrice + extras}`;
    }
  }
};
</script>
