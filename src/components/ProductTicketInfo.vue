<template functional>
  <div>
    <div>
      <div>
        <div class="py-3" v-for="n in 2" :key="n">
          <div class="flex justify-between text-white text-opacity-84">
            <h4 class="tg-body-mobile">Latte</h4>
            <h3 class="tg-h3-mobile">x2</h3>
          </div>
          <div class="pl-4 tg-caption-mobile">
            <div class="bg-button bg-opacity-65 my-1 px-2">
              <div class="text-white text-opacity-84">
                <span class="pr-2">&check;</span>
                <span>Iced</span>
              </div>
            </div>
            <div class="bg-error bg-opacity-65 my-1 px-2">
              <div class="opacity-84">
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
      <h4 class="tg-body-mobile text-white text-opacity-84 mb-2">
        Special Requests
      </h4>
      <p class="tg-caption-mobile text-white text-opacity-54">
        No plastic takeaway packaging please
      </p>
    </div>
    <hr class="opacity-84" />
    <div>
      <div
        class="py-2 flex justify-between tg-body-mobile text-white text-opacity-84"
      >
        <h4>Total</h4>
        <span>$26</span>
      </div>
    </div>
  </div>
</template>
