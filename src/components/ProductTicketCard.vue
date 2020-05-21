<template>
  <div class="px-4 bg-secondary mb-4 rounded card-box-shadow">
    <div class="py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img class="w-3 h-3" src="../assets/person.png" alt="">
          <h3 class="pl-4 tg-caption-mobile em-high">Paul Chris Luke</h3>
        </div>
        <div>
          <img class="w-4 h-4" src="../assets/phone.png" alt="">
        </div>
      </div>
    </div>
    <hr class="opacity-12" />
    <div>
      <div>
        <div class="py-3" v-for="n in 2" :key="n">
          <div class="flex justify-between em-high">
            <h4 class="tg-body-mobile">Latte</h4>
            <h3 class="tg-h3-mobile">x2</h3>
          </div>
          <div class="pl-4 tg-caption-mobile">
            <div class="inlcudes bg-button-065 mb-2">
              <div class="em-high">
                <span class="pr-2">&check;</span>
                <span>Iced</span>
              </div>
            </div>
            <div class="excludes bg-error-065">
              <div class="em-high">
                <span class="pr-2">&times;</span>
                <span>No sugar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="opacity-12" />
    <div class="py-3">
      <h4 class="tg-body-mobile em-high mb-2">Special Requests</h4>
      <p class="tg-caption-mobile em-medium">No plastic takeaway packaging please</p>
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
      <button class="text-button tg-color-label-mobile">OUT OF DELIVERY</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductTicket'
};
</script>

<style scoped>
hr {
  @apply -mx-4;
  @apply border-white;
}
</style>
