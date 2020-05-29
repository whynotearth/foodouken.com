<template>
  <div>
    <div class="flex flex-col items-center justify-center">
      <div class="pb-4">
        <img class="h-24 w-24 rounded-full" :src="src" alt="company-image">
      </div>
      <div>
        <h2 class="tg-h2-mobile">Bang Bang Bakery Cafe</h2>
      </div>
      <div class="py-4">
        <h6 class="tg-caption-mobile opacity-54">foodouken.com/bang-bang-bakery</h6>
      </div>
    </div>
    <OrderInfoBox />
  </div>
</template>

<script>
import OrderInfoBox from './CompanyOrderInfoBox';

export default {
  name: 'CompanyInfo',
  components: { OrderInfoBox },
  data() {
    return {
      src: 'https://res.cloudinary.com/whynotearth/image/upload/v1585896360/foodouken/bangbangbakerycafe/BangBang_Bakery_Logo_ezhmca.png'
    };
  }
};
</script>
