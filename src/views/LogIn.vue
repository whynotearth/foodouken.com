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
      <div class="py-3">
        <Button
          title="Log In With Facebook"
          class="tg-color-label-mobile text-white text-opacity-84 rounded-full py-3 md:px-5"
        >
          <template #icon>
            <img class="md:mr-5" :src="facebookLogo" alt="facebook-icon" />
          </template>
        </Button>
      </div>
      <div class="py-3">
        <Button
          title="Log In With Google"
          class="tg-color-label-mobile text-white text-opacity-84 rounded-full py-3 md:px-5"
        >
          <template #icon>
            <img class="md:mr-5" :src="googleLogo" alt="google-icon" />
          </template>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import foodoukenLogo from '@/assets/foodouken.png';
import facebookLogo from '@/assets/facebook2.png';
import googleLogo from '@/assets/google.png';

export default {
  name: 'LogIn',
  components: {
    Button
  },
  data() {
    return {
      foodoukenLogo,
      facebookLogo,
      googleLogo
    };
  }
};
</script>
