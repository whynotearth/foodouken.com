<template>
  <nav class="sticky top-0 w-full p-4 shadow-md z-100 bg-primary">
    <div class="container mx-auto flex flex-wrap">
      <div class="flex-start mr-3 flex-shrink-0">
        <router-link class="inline-block align-middle" :to="toLink">
          <img :src="getIcon" />
        </router-link>
      </div>
      <transition name="fade" mode="out-in">
        <div :key="title" class="text-white font-bold text-xl truncate">
          {{ title }}
        </div>
      </transition>
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
import menu from '@/assets/menu.png';

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
    },
    icon: {
      type: String,
      default: 'back'
    }
  },
  computed: {
    getIcon() {
      return this.icon === 'back' ? arrowBack : menu;
    }
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
