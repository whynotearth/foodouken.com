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
  display: flex;
  align-items: center;
  justify-content: center;

  @apply mt-0 !important;
}

/deep/ .VueCarousel-dot:focus {
  outline: none;
}

/deep/ .VueCarousel-dot--active {
  width: 10px !important;
  height: 10px !important;
}
</style>
