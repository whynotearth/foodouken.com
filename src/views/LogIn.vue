<template>
  <div class="flex flex-col justify-center items-center py-20">
    <div class="py-10 flex flex-col items-center">
      <div class="py-3">
        <img
          height="150"
          width="75"
          :src="foodoukenLogo"
          alt="foodokuen-logo"
        />
      </div>
      <div class="py-3">
        <h1 class="tg-h1-mobile text-white text-opacity-84">
          Welcome to <br />
          Foodouken
        </h1>
      </div>
    </div>
    <div class="py-10 w-full md:w-auto px-5">
      <AuthButtons />
    </div>
  </div>
</template>

<script>
import AuthButtons from '@/components/auth/AuthButtons';
import foodoukenLogo from '@/assets/foodouken.png';

export default {
  name: 'LogIn',
  components: {
    AuthButtons
  },
  data() {
    return {
      foodoukenLogo
    };
  }
};
</script>
