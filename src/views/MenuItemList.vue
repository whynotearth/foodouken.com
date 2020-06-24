<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2 my-4">
    <MenuItem
      v-for="item in getMenuItems"
      :key="item.id"
      :name="item.name"
      :image="item.images ? item.images[0] : ''"
      :options="menuItemOptions"
      @clicked="editItem(item)"
      @sellOutItem="sellOutItem(item)"
      @deleteItem="deleteItem(item)"
    >
      <template #subHeading>
        ${{ item.price }} - Category {{ item.categoryId }}
      </template>
    </MenuItem>
  </div>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MenuItemList',
  components: {
    MenuItem
  },
  data() {
    return {
      categoryId: this.$route.params.categoryId,
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
  created() {
    this.fetchTenantCategoryItems(this.categoryId);
  },
  computed: {
    ...mapGetters('menu', ['getMenuItems'])
  },
  methods: {
    ...mapActions('menu', ['fetchTenantCategoryItems']),
    sellOutItem(item) {
      alert(item.name + ' is sold out');
    },
    deleteItem(item) {
      alert(item.name + ' is deleted');
    },
    editItem(item) {
      this.$router.push({ name: 'MenuItemEdit', params: { item: item.id } });
    }
  }
};
</script>
