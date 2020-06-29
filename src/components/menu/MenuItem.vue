<template>
  <div
    class="flex flex-row p-2 relative items-center w-full mx-auto max-w-xs cursor-pointer"
    @click="$emit('clicked')"
  >
    <div class="flex-shrink-0 h-10 w-10">
      <img
        :src="image"
        class="object-cover h-full w-full"
        draggable="false"
        alt="item"
      />
    </div>
    <div class="mx-2 w-full flex flex-col truncate z-10">
      <span class="tg-body-mobile text-white text-opacity-95 truncate">
        {{ name }}
      </span>
      <span class="tg-caption-mobile text-gray-500 truncate">
        <slot name="subHeading" />
      </span>
    </div>
    <div
      v-if="options"
      class="my-auto text-right relative text-white text-opacity-54"
    >
      <div
        class="w-8 h-8 p-2 rounded-full cursor-pointer hover:bg-white hover:bg-opacity-04"
        @click.stop.prevent="toggleMenu"
      >
        <More class="m-auto cursor-pointer object-contain" />
      </div>
      <div
        v-show="menu"
        class="absolute top-0 right-0 mr-6 z-20 tg-body-mobile bg-secondary shadow-8dp rounded-md outline-none"
        v-click-outside="hideMenu"
      >
        <button
          v-for="(option, index) in options"
          :key="index"
          class="text-left whitespace-no-wrap w-full p-4 leading-5 hover:text-white hover:bg-footer first:rounded-t-md last:rounded-b-md cursor-pointer"
          @click.stop.prevent="$emit(option.action)"
        >
          {{ option.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import More from '@/assets/more.svg';

export default {
  name: 'MenuItem',
  components: { More },
  data() {
    return {
      menu: false
    };
  },
  props: {
    options: {
      type: Array
    },
    name: {
      type: String,
      default: 'Item name'
    },
    image: {
      type: String
    }
  },
  methods: {
    hideMenu() {
      this.menu = false;
    },
    showMenu() {
      this.menu = true;
    },
    toggleMenu() {
      if (this.menu) {
        this.hideMenu();
      } else {
        this.showMenu();
      }
    }
  }
};
</script>
