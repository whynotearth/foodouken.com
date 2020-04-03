<template>
  <div class="bg-secondary flex flex-row shadow-md rounded-lg h-24 mb-4">
    <img :src="product.image" alt="Product image" class="w-3/12 h-full object-cover rounded-l-lg" />
    <p class="my-auto">
      <span class="mx-4 text-gray-400 my-1 inline-block text-lg">{{ product.name }}</span>
      <br />
      <span class="mx-4 text-gray-500 my-1 inline-block">${{ product.price }}</span>
    </p>
    <div class="relative flex-grow">
      <div class="absolute btn-plus">
        <img src="../../assets/add.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default: () => {
        return {
          name: 'Product name',
          image:
            'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg',
          price: 8.0
        };
      }
    }
  }
};
</script>

<style>
.btn-plus {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  text-align: center;
  right: 10px;
  bottom: -20px;
  background: #0f292d;
  border: 1px solid #0e9ec2;
  color: #0e9ec2;
  box-sizing: border-box;
  border-radius: 500px;
}
</style>
