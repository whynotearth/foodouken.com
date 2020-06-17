<template>
  <div class="fixed h-screen w-screen z-50 bg-black bg-opacity-54 static top-0">
    <div
      class="static top-0 w-full p-2 text-center bg-red-600 font-bold text-2xl"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSiteBanner',
  props: {
    title: String
  }
};
</script>
