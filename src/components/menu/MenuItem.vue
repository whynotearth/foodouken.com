<template>
  <div
    class="flex flex-row p-2 relative items-center w-full mx-auto max-w-xs cursor-pointer"
    @click="$emit('clicked')"
  >
    <div class="flex-shrink-0 h-10 w-10">
      <img
        :src="item.images[0]"
        class="object-cover"
        draggable="false"
        alt="item"
      />
    </div>
    <div class="mx-2 w-full flex flex-col truncate z-10">
      <span class="tg-body-mobile text-white text-opacity-95 truncate">
        {{ item.name }}
      </span>
      <span class="tg-caption-mobile text-gray-500 truncate">
        ${{ item.price }} - {{ item.category }}
      </span>
    </div>
    <div class="my-auto text-right relative text-white text-opacity-54 z-20">
      <More class="cursor-pointer m-4" @click.stop.prevent="toggleMenu" />
      <div
        v-show="menu"
        class="absolute top-0 right-0 mr-6 tg-body-mobile bg-secondary shadow-8dp rounded-md outline-none"
      >
        <button
          v-for="(option, index) in options"
          :key="index"
          class="block w-full text-left p-4 leading-5 hover:text-white hover:bg-footer first:rounded-t-md last:rounded-b-md cursor-pointer"
          @click.stop.prevent="option.action"
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
    item: {
      type: Object,
      required: true
    },
    options: {
      type: Array,
      required: true
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
