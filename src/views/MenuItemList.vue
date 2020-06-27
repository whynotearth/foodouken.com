<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-2 my-4">
    <span v-if="apiError" class="my-8 mx-4 text-sm text-red-600">
      {{ apiError }}
    </span>
    <MenuItem
      v-for="item in getMenuItems"
      :key="item.id"
      :name="item.name"
      :image="item.imageUrl"
      :options="menuItemOptions"
      @clicked="editItem(item.id)"
      @sellOutItem="sellOutItem(item.id)"
      @deleteItem="deleteItem(item.id)"
    >
      <template #subHeading>
        ${{ item.price }} - {{ item.category.name }}
      </template>
    </MenuItem>
  </div>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem';
import { mapGetters, mapActions } from 'vuex';
import { sleep } from '@/helpers.js';

export default {
  name: 'MenuItemList',
  components: {
    MenuItem
  },
  data() {
    return {
      categoryId: this.$route.params.categoryId,
      apiError: '',
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
    ...mapActions('menu', [
      'fetchTenantCategoryItems',
      'deleteTenantCategoryItem'
    ]),
    async onSuccessSubmit() {
      this.$store.commit('overlay/updateModel', {
        title: 'Success!',
        message: 'Your product has been deleted!'
      });

      await this.fetchTenantCategoryItems(this.categoryId);

      await sleep(1000);

      this.$store.commit('overlay/updateModel', {
        title: '',
        message: ''
      });
    },
    deleteItem(itemId) {
      if (confirm('Are you sure?')) {
        this.deleteTenantCategoryItem({
          categoryId: this.categoryId,
          productId: itemId
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
    sellOutItem(itemId) {
      this.$router.push({ name: 'MenuItemEdit', params: { item: itemId } });
    },
    editItem(itemId) {
      this.$router.push({ name: 'MenuItemEdit', params: { item: itemId } });
    }
  }
};
</script>
