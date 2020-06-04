<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2 my-4">
    <MenuItem
      v-for="item in getMenuItems"
      :key="item.id"
      :item="item"
      :options="menuItemOptions"
      @clicked="editItem(item)"
      @sellOutItem="sellOutItem(item)"
      @deleteItem="deleteItem(item)"
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
  data() {
    return {
      menuItemOptions: [
        {
          name: 'Sell out',
          action: 'sellOutItem'
        },
        {
          name: 'Delete',
          action: 'deleteItem'
        }
      ]
    };
  },
  computed: {
    ...mapGetters('menu', ['getMenuItems'])
  },
  methods: {
    ...mapMutations('menu', ['updateItem']),
    sellOutItem(item) {
      alert(item.name + ' is sold out');
    },
    deleteItem(item) {
      alert(item.name + ' is deleted');
    },
    editItem(item) {
      this.updateItem(item);
      this.$router.push({ name: 'MenuItemEdit', params: { item: item.name } });
    }
  }
};
</script>
