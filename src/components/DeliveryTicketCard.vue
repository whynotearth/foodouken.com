<template>
  <div class="px-4 bg-secondary mb-4 rounded card">
    <div class="py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div class="flex justify-center items-center w-4 h-4">
            <img src="../assets/person.png" alt="">
          </div>
          <h3 class="pl-4 tg-h2-mobile em-high">Paul Chris Luke</h3>
        </div>
        <div>
          <img class="w-5 h-5" src="../assets/phone.png" alt="">
        </div>
      </div>
      <div class="mt-2">
        <div class="flex">
          <div class="flex justify-center items-center w-5 h-4">
            <img src="../assets/home.png" alt="">
          </div>
          <h4 class="pl-4 tg-caption-mobile em-high">2450 Flagstone Drive, Union City, 3rd Floor Apartment 7</h4>
        </div>
      </div>
    </div>
    <hr class="opacity-12" />
    <div>
      <div class="mt-3">
        <div class="pb-2" v-for="n in 2" :key="n">
          <div class="flex justify-between em-high">
            <h4 class="tg-body-mobile">Latte</h4>
            <h3 class="tg-h3-mobile">x2</h3>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <div class="py-2 flex justify-between">
        <span>Total</span>
        <span>$26</span>
      </div>
    </div>
    <hr class="opacity-12" />
    <div class="py-4 text-center">
      <button class="text-button tg-color-label-mobile">DELIVERY COMPLETE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductTicket'
};
</script>

<style scoped>
.card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0, 0, 0, 0.14);
}

hr {
  @apply -mx-4;
  @apply border-white;
}
</style>
