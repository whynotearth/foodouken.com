<template>
  <div>
    <MenuEmptyState v-if="showEmptyState">
      <template #heading>Manage Your Menu</template>
      <template #description>
        Update your menu categories here.
      </template>
      <template #action>
        <RouterLink :to="{ name: 'MenuCategoryAdd' }" v-slot="{ navigate }">
          <Button
            class="px-6 uppercase bg-blue-500 rounded-full cursor-pointer"
            isRipple
            @click="navigate"
          >
            <div class="flex items-center">
              <span>
                +
              </span>
              <span class="flex-grow px-6 font-light">
                Add New Menu Items
              </span>
            </div>
          </Button>
        </RouterLink>
      </template>
    </MenuEmptyState>
    <div v-else class="grid grid-cols-1 gap-2 my-4 md:grid-cols-3">
      <span v-if="apiError" class="mx-4 my-8 text-sm text-red-600">
        {{ apiError }}
      </span>

      <MenuItem
        v-for="category in getCategories"
        :key="category.id"
        :name="category.name"
        :image="category.imageUrl"
        :options="menuItemOptions"
        @clicked="showItems(category)"
        @edit="editCategory(category.id)"
        @delete="deleteCategory(category)"
      />
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem';
import MenuEmptyState from '@/components/menu/MenuEmptyState.vue';
import Plus from '@/assets/plus.png';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { sleep } from '@/helpers.js';

export default {
  name: 'MenuCategoryList',
  components: {
    MenuItem,
    MenuEmptyState
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
      ],
      Plus
    };
  },
  created() {
    this.fetchTenantCategories(this.tenantSlug);
  },
  beforeDestroy() {
    this.updateCategories([]);
  },
  computed: {
    ...mapGetters('menu', ['getCategories', 'getMenuLoading']),

    showEmptyState() {
      if (this.getMenuLoading) {
        return false;
      }

      if (this.getCategories.length === 0) {
        return true;
      }

      return false;
    }
  },
  methods: {
    ...mapMutations('menu', ['updateCategories']),
    ...mapActions('menu', ['fetchTenantCategories', 'deleteTenantCategory']),
    showItems(category) {
      this.$router.push({
        name: 'MenuItemList',
        params: { categoryId: category.id, category: category }
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
