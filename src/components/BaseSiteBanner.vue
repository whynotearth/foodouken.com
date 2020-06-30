<template>
  <div
    class="top-0 w-full z-100"
    :class="
      backdrop ? 'fixed h-screen w-screen bg-black bg-opacity-54' : 'sticky'
    "
  >
    <div class="p-2 text-center font-bold text-2xl" :class="background">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSiteBanner',
  props: {
    title: {
      type: String,
      default: 'Site Banner'
    },
    background: {
      type: String,
      default: 'bg-red-600'
    },
    backdrop: {
      type: Boolean,
      default: false
    }
  }
};
</script>
