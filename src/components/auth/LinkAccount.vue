<template>
  <div class="px-8">
    <div class="py-10">
      <h4 class="tg-body-mobile text-white text-opacity-84">
        Link your Facebook or Google account to get started!
      </h4>
    </div>
    <div>
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
  name: 'LinkAccount',
  components: {
    Button
  }
};
</script>
