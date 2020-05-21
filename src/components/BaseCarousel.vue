<template>
  <Carousel v-bind="$attrs" :paginationSize="6">
    <Slide v-for="(slide, key) in $slots.slides" :key="key">
      <vnodes :vnodes="slide"/>
    </Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'BaseCarousel',
  components: {
    Carousel,
    Slide,
    Vnodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  mounted() {
    // To remove pagination default tooltip
    this.$nextTick(() => {
      document.getElementsByClassName('VueCarousel-dot')
        .forEach((button) => {
          button.removeAttribute('title');
        });
    });
  }
};
</script>

<style scoped>
.VueCarousel {
  cursor: pointer;
}

/deep/ .VueCarousel-dot-container {
  @apply flex items-center justify-center mt-0 !important;
}

/deep/ .VueCarousel-dot {
  @apply p-1 !important;
}

/deep/ .VueCarousel-dot:focus {
  @apply outline-none;
}

/deep/ .VueCarousel-dot--active {
  @apply w-3 h-3 !important;
}
</style>
