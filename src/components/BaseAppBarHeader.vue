<template>
  <nav
    class="flex items-stretch fixed w-full top-0 px-4 py-4 flex-wrap shadow-md z-100 bg-primary"
  >
    <div class="container mx-auto flex">
      <div class="flex-start mr-3 flex-shrink-0">
        <router-link class="inline-block align-middle" :to="toLink">
          <img :src="arrowBack" />
        </router-link>
      </div>
      <div class="text-white font-bold text-xl truncate">{{ title }}</div>
      <!-- The action only has routing -->
      <router-link
        v-if="action && !action.method"
        class="flex-grow flex-shrink-0 inline-block tg-h3-mobile text-right"
        :to="action.link"
        >{{ action.label }}</router-link
      >
      <!-- The action emits a method, like finish (Add, Edit) -->
      <div
        v-if="action && action.method"
        class="flex-grow flex-shrink-0 inline-block tg-h3-mobile text-right cursor-pointer"
        :class="{ disabled: action.disabled }"
        @click="emitAction()"
      >
        {{ action.label }}
      </div>
      <slot name="menu"></slot>
    </div>
  </nav>
</template>

<script>
import arrowBack from '@/assets/arrow-back.png';

export default {
  name: 'BaseAppBarHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    toLink: {
      type: [String, Object],
      default: '/'
    },
    action: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      arrowBack
    };
  },
  methods: {
    emitAction() {
      this.$emit(this.action.method);
    }
  }
};
</script>

<style scoped>
.disabled {
  color: rgba(0, 0, 0, 0.38);
  cursor: default;
}
</style>
