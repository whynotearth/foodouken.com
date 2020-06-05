<template>
  <div class="flex flex-col justify-center items-center py-20">
    <div class="py-10 flex flex-col items-center">
      <div class="py-3">
        <img
          height="150"
          width="75"
          src="../assets/foodouken.png"
          alt="foodokuen"
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
            <img
              class="md:mr-5"
              src="https://user-images.githubusercontent.com/5694308/81395429-d1683c00-914d-11ea-914e-da163fce66d8.png"
              alt="facebook-icon"
            />
          </template>
        </Button>
      </div>
      <div class="py-3">
        <Button
          title="Log In With Google"
          class="tg-color-label-mobile text-white text-opacity-84 rounded-full py-3 md:px-5"
        >
          <template #icon>
            <img
              class="md:mr-5"
              src="https://user-images.githubusercontent.com/5694308/81395448-d9c07700-914d-11ea-8abf-c19185bb47ca.png"
              alt="google-icon"
            />
          </template>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'LogIn',
  components: {
    Button
  }
};
</script>
