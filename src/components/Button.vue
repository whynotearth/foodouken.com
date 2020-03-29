<template>
  <component
    :is="type"
    class="rounded-full bg-tertiary px-10 py-2 active:bg-secondary cursor-pointer"
    @click="onClick"
  >
    <span class="text-white uppercase">
      {{ title }}
    </span>
  </component>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    onClick: {
      type: Function,
      default: () => console.log('clicked button')
    },
    title: {
      type: String,
      default: 'Button'
    }
  },
  computed: {
    type() {
      if (this.href) {
        return 'a';
      } else if (this.to) {
        return 'router-link';
      } else {
        return 'button';
      }
    }
  }
};
</script>

<style scoped>
/* .ripple {
  background-position: center;
  transition: background 0.5s;
}
.ripple:hover {
  background: #437784 radial-gradient(circle, transparent 1%, #437784 1%)
    center/15000%;
}
.ripple:active {
  background-color: #173f44;
  background-size: 100%;
  transition: background 0s;
} */
</style>
