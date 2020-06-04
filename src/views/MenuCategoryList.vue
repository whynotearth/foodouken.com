<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2 my-4">
    <MenuItem
      v-for="category in getCategoryList"
      :key="category.id"
      :name="category.name"
      :image="category.image"
      :options="menuItemOptions"
      @clicked="showItems"
      @edit="editCategory(category)"
      @delete="deleteCategory(category)"
    />
  </div>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'MenuCategoryList',
  components: {
    MenuItem
  },
  data() {
    return {
      menuItemOptions: [
        {
          name: 'Edit',
          action: 'edit'
        },
        {
          name: 'Delete',
          action: 'delete'
        }
      ]
    };
  },
  computed: {
    ...mapGetters('menu', ['getCategoryList'])
  },
  methods: {
    ...mapMutations('menu', ['updateCategory']),
    showItems() {
      this.$router.push({
        name: 'MenuItemList',
        params: { category: 'BagelsAndBread' }
      });
    },
    deleteCategory(category) {
      alert(category.name + ' is deleted');
    },
    editCategory(category) {
      this.updateCategory(category);
      this.$router.push({
        name: 'MenuCategoryEdit',
        params: { category: 'BagelsAndBread' }
      });
    }
  }
};
</script>
