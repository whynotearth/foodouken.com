<template>
  <div
    @click="$emit('productClicked')"
    class="product-card bg-secondary flex flex-row shadow-md rounded-lg h-24 mb-4 cursor-pointer transition duration-300 transform hover:opacity-75"
  >
    <img
      :src="product.imageUrl"
      alt="Product image"
      class="p-1/2 w-20 h-full object-cover rounded-l-lg"
    />
    <p class="my-auto">
      <span class="mx-4 text-gray-400 my-1 inline-block text-lg break-words">
        {{ product.name }}
      </span>
      <br />
      <span class="mx-4 text-gray-500 my-1 inline-block">
        ${{ product.price }}
      </span>
    </p>
    <div class="relative flex-grow">
      <div
        @click.stop.self="addCartProduct(product)"
        class="ripple absolute flex justify-center items-center w-10 h-10 text-align-center border border-solid rounded-full btn-plus cursor-pointer select-none"
      >
        <img
          src="@/assets/add.png"
          class="pointer-events-none"
          draggable="false"
          alt="+"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('cart', ['addCartProduct'])
  }
};
</script>

<style scoped>
.btn-plus {
  right: 10px;
  bottom: -20px;
  background: #0f292d;
  border-color: #0e9ec2;
  color: #0e9ec2;
}
.ripple {
  background-position: center;
  transition: background 0.4s;
}
.product-card:hover .ripple {
  background: #1d484f radial-gradient(circle, transparent 1%, #1d484f 1%)
    center/15000%;
}
.ripple:focus {
  background-color: #217e8f;
  background-size: 100%;
  transition: background 0s;
}
</style>
