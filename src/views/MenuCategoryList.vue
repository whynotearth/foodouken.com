<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2 my-4">
    <MenuItem
      v-for="category in getCategories"
      :key="category.id"
      :name="category.name"
      :image="category.image"
      :options="menuItemOptions"
      @clicked="showItems(category.id)"
      @edit="editCategory(category.id)"
      @delete="deleteCategory(category)"
    />
  </div>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'MenuCategoryList',
  components: {
    MenuItem
  },
  data() {
    return {
      tenantSlug: this.$route.params.tenantSlug,
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
  created() {
    this.fetchTenantCategories(this.tenantSlug);
  },
  computed: {
    ...mapGetters('menu', ['getCategories'])
  },
  methods: {
    ...mapActions('menu', ['fetchTenantCategories']),
    ...mapMutations('menu', ['updateCategory']),
    showItems(categoryId) {
      this.$router.push({
        name: 'MenuItemList',
        params: { categoryId: categoryId }
      });
    },
    deleteCategory(category) {
      alert(category.name + ' is deleted');
    },
    editCategory(categoryId) {
      this.$router.push({
        name: 'MenuCategoryEdit',
        params: { categoryId: categoryId }
      });
    }
  }
};
</script>
