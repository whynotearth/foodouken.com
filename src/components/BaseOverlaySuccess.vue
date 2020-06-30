<template>
  <div class="bg-background flex items-center justify-center h-full">
    <div class="text-center">
      <div class="progress-wrapper mb-4 md:mb-12 mx-auto">
        <!-- desktop -->
        <BaseProgressCircle
          class="hidden md:block"
          :centerX="164"
          :centerY="164"
          :radius="160"
          :percentageProgress="progress"
        >
          <image
            class="progress-circle--content block"
            x="20"
            y="20"
            width="288"
            height="288"
            :xlink:href="hadooken"
          ></image>
        </BaseProgressCircle>

        <!-- mobile -->
        <BaseProgressCircle
          class="block md:hidden"
          :centerX="82"
          :centerY="82"
          :radius="80"
          :percentageProgress="progress"
        >
          <image
            class="progress-circle--content block"
            x="10"
            y="10"
            width="144"
            height="144"
            :xlink:href="hadooken"
          ></image>
        </BaseProgressCircle>
      </div>
      <p v-if="title" class="tg-h2-mobile md:tg-h2-desktop mb-4">
        {{ title }}
      </p>
      <p v-if="message" class="tg-body-mobile md:tg-desktop-body">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
import BaseProgressCircle from '@/components/BaseProgressCircle.vue';
import hadooken from '@/assets/hadooken.png';

export default {
  name: 'OverlayBrand',
  components: { BaseProgressCircle },
  data() {
    return {
      progress: 0,
      hadooken
    };
  },
  props: {
    title: {
      default: ''
    },
    message: {
      default: ''
    },
    isVisible: {
      default: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.progress = 1;
    }, 300);
  }
};
</script>

<style scoped>
.progress-wrapper {
  width: 164px;
  height: 164px;
}
@screen md {
  .progress-wrapper {
    width: 328px;
    height: 328px;
  }
}
</style>
