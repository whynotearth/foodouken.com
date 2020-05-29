<template functional>
  <div :class="[props.classes]" class="flex flex-col items-center">
    <div class="order-info__number bg-button tg-h2-mobile text-transparent mb-2">
      {{ props.orderInfo.total }}
    </div>
    <div class="">
      <h3 class="tg-caption-mobile opacity-54 text-white text-center uppercase">
        {{ props.orderInfo.name }}
      </h3>
    </div>
  </div>
</template>

<style scoped>
.order-info__number {
  background-clip: text;
}
</style>
