<template>
  <div class="px-4 bg-secondary mb-4 rounded-lg card shadow-1dp">
    <div class="py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img class="w-3 h-3" src="../assets/person.png" alt="" />
          <h3 class="pl-4 tg-caption-mobile text-white text-opacity-84">
            Paul Chris Luke
          </h3>
        </div>
        <div>
          <a href="tel:+905458765612">
            <img class="w-4 h-4" src="../assets/phone.png" alt="" />
          </a>
        </div>
      </div>
    </div>
    <hr class="opacity-12" />
    <div>
      <ProductTicketInfo />
    </div>
    <hr class="opacity-12" />
    <div class="py-4 text-center">
      <button class="text-button tg-color-label-mobile">OUT OF DELIVERY</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductTicket',
  components: {
    ProductTicketInfo: () => import('./ProductTicketInfo.vue')
  }
};
</script>

<style scoped>
hr {
  @apply -mx-4;
  @apply border-white;
}
</style>
