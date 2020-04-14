<template>
  <component
    :is="type"
    class="ripple cursor-pointer border-none"
    :class="[
      width,
      backgroundColor,
      fontSize,
      fontWeight,
      textAlign,
      textTransform,
      paddingLeft,
      paddingRight,
      borderRadius
    ]"
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
    },
    width: {
      type: String
    },
    backgroundColor: {
      type: String,
      default: 'bg-button'
    },
    fontSize: {
      type: String
    },
    fontWeight: {
      type: String
    },
    textAlign: {
      type: String
    },
    textTransform: {
      type: String
    },
    paddingLeft: {
      type: String,
      default: 'px-10'
    },
    paddingRight: {
      type: String,
      default: 'py-2'
    },
    border: {
      type: String,
      default: 'border-none'
    },
    borderRadius: {
      type: String,
      default: 'rounded-full'
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
