<template>
  <component
    :is="type"
    class="ripple cursor-pointer border-none"
    :class="[
      width,
      backgroundColor,
      fontColor,
      fontSize,
      fontWeight,
      textTransform,
      paddingLeft,
      paddingRight,
      paddingX,
      paddingY,
      borderRadius
    ]"
    @click="$emit('clicked')"
    :href="href"
    :to="to"
  >
    <div class="flex flex-row items-center">
      <div
        class="text-left"
        :class="[titleLeft || title ? 'flex-1' : 'hidden']"
      >
        {{ titleLeft }}
      </div>
      <div class="flex-grow text-center" v-if="title">
        {{ title }}
      </div>
      <div
        class="text-right"
        :class="[titleRight || title ? 'flex-1' : 'hidden']"
      >
        {{ titleRight }}
      </div>
    </div>
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
      default: ''
    },
    titleLeft: {
      type: String,
      default: ''
    },
    titleRight: {
      type: String,
      default: ''
    },
    width: {
      type: String
    },
    backgroundColor: {
      type: String,
      default: 'bg-button'
    },
    fontColor: {
      type: String,
      default: 'text-white'
    },
    fontSize: {
      type: String,
      default: 'text-sm'
    },
    fontWeight: {
      type: String,
      default: 'font-semibold'
    },
    textTransform: {
      type: String,
      default: 'uppercase'
    },
    paddingLeft: {
      type: String
    },
    paddingRight: {
      type: String
    },
    paddingX: {
      type: String,
      default: 'px-4'
    },
    paddingY: {
      type: String,
      default: 'py-4'
    },
    border: {
      type: String,
      default: 'border-none'
    },
    borderRadius: {
      type: String,
      default: 'rounded-none'
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
