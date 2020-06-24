<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2 my-4">
    <span v-if="apiError" class="my-8 mx-4 text-sm text-red-600">
      {{ apiError }}
    </span>
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
import { mapActions, mapGetters } from 'vuex';
import { sleep } from '@/helpers.js';

export default {
  name: 'MenuCategoryList',
  components: {
    MenuItem
  },
  data() {
    return {
      tenantSlug: this.$route.params.tenantSlug,
      apiError: '',
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
    ...mapActions('menu', ['fetchTenantCategories', 'deleteTenantCategory']),
    showItems(categoryId) {
      this.$router.push({
        name: 'MenuItemList',
        params: { categoryId: categoryId }
      });
    },
    async onSuccessSubmit() {
      this.$store.commit('overlay/updateModel', {
        title: 'Success!',
        message: 'Your category has been deleted!'
      });

      await this.fetchTenantCategories(this.tenantSlug);

      await sleep(1000);

      this.$store.commit('overlay/updateModel', {
        title: '',
        message: ''
      });
    },
    deleteCategory(category) {
      if (confirm('Are you sure?')) {
        this.deleteTenantCategory({
          tenantSlug: this.tenantSlug,
          categoryId: category.id
        })
          .then(() => {
            this.onSuccessSubmit();
          })
          .catch(error => {
            this.apiError = error.response.data.title
              ? error.response.data.title
              : 'Something went wrong, try again.';
            throw error;
          });
      } else return false;
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
