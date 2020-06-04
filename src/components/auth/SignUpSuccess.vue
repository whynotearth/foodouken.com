<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-col items-center">
      <div class="py-3">
        <img
          height="300"
          width="150"
          src="../../assets/foodouken.png"
          alt="foodokuen"
        />
      </div>
      <div class="py-3">
        <h1 class="tg-h1-mobile text-center text-white text-opacity-84">
          Congrats on your <br class="md:hidden" />
          new site!
        </h1>
      </div>
    </div>
    <div class="w-full md:w-auto px-5">
      <div class="py-3">
        <h1 class="tg-body-mobile text-center">
          Your business is now set up! Here is your custom link:
        </h1>
      </div>
      <div class="text-center">
        <Button
          :to="url"
          class="hyperlink-text text-button normal-case"
          :title="url"
          buttonBg="bg-transparent"
          :isRipple="false"
        />
      </div>
      <div class="">
        <Button
          @clicked="$router.push({ name: 'SignUp' })"
          title="START ADDING MENU ITEMS"
          class="tg-color-label-mobile text-white text-opacity-84 rounded-full py-3 px-10"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpSuccesss',
  components: {
    Button: () => import('@/components/Button.vue')
  },
  computed: {
    url() {
      return `https://foodouken.com/${this.$route.params.slug}`;
    }
  }
};
</script>
