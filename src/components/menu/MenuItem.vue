<template>
  <div class="flex flex-row p-2 relative items-center w-full mx-auto max-w-xs">
    <div class="flex-shrink-0 h-10 w-10">
      <img
        :src="item.images[0]"
        class="object-cover"
        draggable="false"
        alt="item"
      />
    </div>
    <div class="mx-2 w-full flex flex-col truncate">
      <span class="tg-body-mobile text-white text-opacity-95 truncate">
        {{ item.name }}
      </span>
      <span class="tg-caption-mobile text-gray-500 truncate">
        ${{ item.price }} - {{ item.category }}
      </span>
    </div>
    <div class="flex items-center text-gray-500">
      <div class="my-auto text-right relative outline-none">
        <More class="cursor-pointer m-4" @click.stop.prevent="toggleMenu" />
        <div
          v-show="menu"
          class="absolute top-0 right-0 text-left tg-body-mobile text-white text-opacity-54 bg-secondary shadow-8dp rounded-md mr-5 py-2"
        >
          <router-link
            :to="{ name: 'MenuItemsAdd' }"
            class="block py-2 px-4 leading-5 hover:text-white cursor-pointer"
          >
            Edit
          </router-link>
          <router-link
            to="/delete"
            class="block py-2 px-4 leading-5 hover:text-white cursor-pointer"
          >
            Delete
          </router-link>
        </div>
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
