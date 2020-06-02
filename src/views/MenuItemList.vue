<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2 ">
    <MenuItem v-for="item in getMenuItems" :key="item.id" :item="item" />
  </div>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem';
import { mapGetters } from 'vuex';

export default {
  name: 'MenuItemList',
  components: {
    MenuItem
  },
  computed: {
    ...mapGetters('menu', ['getMenuItems'])
  }
};
</script>
