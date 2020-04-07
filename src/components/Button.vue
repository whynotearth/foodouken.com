<template>
  <component
    :is="type"
    class="rounded-full px-10 py-2 ripple cursor-pointer border-none"
    :class="`hover:${color} ${color}`"
    @click="$emit('clicked')"
    :href="href"
    :to="to"
  >
    <span class="text-white uppercase">{{ title }}</span>
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
    },
    color: {
      type: String,
      default: 'bg-button'
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
  position: relative;
  overflow: hidden;
  transition: background 0.4s;
}

.ripple:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0);
  transition: background ease-in-out 0.3s;
}

.ripple:hover:after {
  background: rgba(255, 255, 255, 0.8);
}
</style>
