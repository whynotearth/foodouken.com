<template>
  <div
    id="app"
    class="font-sans bg-background h-full text-white text-lg antialiased"
  >
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
    <transition name="fade">
      <div
        v-if="overlayModel.title || overlayModel.message"
        class="w-full h-full fixed block top-0
        left-0 z-110"
      >
        <BaseOverlaySuccess
          :title="overlayModel.title"
          :message="overlayModel.message"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import BaseOverlaySuccess from '@/components/BaseOverlaySuccess.vue';

export default {
  name: 'App',
  components: { BaseOverlaySuccess },
  computed: {
    overlayModel() {
      return this.$store.getters['overlay/model'];
    }
  }
};
</script>

<style>
html,
body {
  @apply bg-background;

  scroll-behavior: smooth;
  touch-action: manipulation;
}
</style>
