<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2 ">
    <MenuItem
      v-for="item in getMenuItems"
      :key="item.id"
      :item="item"
      :options="menuItemOptions(item)"
      @clicked="editItem(item)"
    />
  </div>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'MenuItemList',
  components: {
    MenuItem
  },
  computed: {
    ...mapGetters('menu', ['getMenuItems'])
  },
  methods: {
    ...mapMutations('menu', ['updateItem']),
    menuItemOptions(item) {
      return [
        {
          name: 'Sold out',
          action: () => this.sellOutItem(item)
        },
        {
          name: 'Delete',
          action: () => this.deleteItem(item)
        }
      ];
    },
    sellOutItem(item) {
      console.log(item.name, 'is sold out');
    },
    deleteItem(item) {
      console.log(item.name, 'is deleted');
    },
    editItem(item) {
      this.updateItem(item);
      this.$router.push({ name: 'MenuItemsAdd' });
    }
  }
};
</script>
