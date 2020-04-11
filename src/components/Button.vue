<template>
  <component
    :is="type"
    class="rounded-full bg-button px-10 py-2 ripple cursor-pointer border-none"
    @click="$emit('clicked')"
    :href="href"
    :to="to"
  >
    <span class="text-white">
      {{ title }}
    </span>
  </component>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: {
      type: String
    },
    to: {
      type: String
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
.ripple {
  background-position: center;
  transition: background 0.4s;
}
.ripple:hover {
  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
    center/15000%;
}
.ripple:active {
  background-color: #6eb9f7;
  background-size: 100%;
  transition: background 0s;
}
</style>
