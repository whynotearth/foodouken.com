<template>
  <div>
    <MenuEmptyState v-if="showEmptyState">
      <template #heading>Manage Your Menu</template>
      <template #description>
        Add, view, or edit the menu items you are offering.
      </template>
      <template #action>
        <RouterLink :to="{ name: 'MenuItemAdd' }" v-slot="{ navigate }">
          <Button
            class="px-6 uppercase bg-blue-500 rounded-full cursor-pointer "
            isRipple
            @click="navigate"
          >
            <div class="flex items-center">
              <span class="text-3xl">
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
    <div class="grid grid-cols-1 gap-2 my-4 md:grid-cols-3">
      <span v-if="apiError" class="m-4 text-sm text-red-600">
        {{ apiError }}
      </span>
      <MenuItem
        v-for="item in getMenuItems"
        :key="item.id"
        :name="item.name"
        :image="item.imageUrl"
        :options="menuItemOptions(item)"
        @clicked="editItem(item.id)"
        @sellOutItem="changeAvailability(item, false)"
        @restock="changeAvailability(item, true)"
        @deleteItem="deleteItem(item.id)"
      >
        <template #subHeading>
          {{ !item.isAvailable ? 'Unavailable -' : '' }}
          ${{ item.price }} -
          {{ item.category.name }}
        </template>
      </MenuItem>
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/menu/MenuItem';
import MenuEmptyState from '@/components/menu/MenuEmptyState.vue';
import Plus from '@/assets/plus.png';
import Add from '@/assets/add.png';
import { mapGetters, mapActions } from 'vuex';
import { sleep } from '@/helpers.js';

export default {
  name: 'MenuItemList',
  components: {
    MenuItem,
    MenuEmptyState
  },
  data() {
    return {
      categoryId: this.$route.params.categoryId,
      apiError: '',
      Plus,
      Add
    };
  },
  created() {
    this.fetchTenantCategoryItems(this.categoryId);
  },
  computed: {
    ...mapGetters('menu', ['getMenuItems', 'getMenuLoading']),

    showEmptyState() {
      if (this.getMenuLoading) {
        return false;
      }

      if (this.getMenuItems.length === 0) {
        return true;
      }

      return false;
    }
  },
  methods: {
    ...mapActions('auth', ['ping']),
    ...mapActions('menu', [
      'fetchTenantCategoryItems',
      'deleteTenantCategoryItem',
      'updateTenantCategoryItem'
    ]),
    menuItemOptions(item) {
      let options = [];
      if (item.isAvailable) {
        options.push({
          name: 'Sell out',
          action: 'sellOutItem'
        });
      } else {
        options.push({
          name: 'Restock',
          action: 'restock'
        });
      }
      options.push({
        name: 'Delete',
        action: 'deleteItem'
      });
      return options;
    },
    async onSuccessSubmit(message) {
      this.$store.commit('overlay/updateModel', {
        title: 'Success!',
        message: message
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
            this.onSuccessSubmit('Your product has been deleted.');
          })
          .catch(error => {
            this.apiError = error.response.data.title
              ? error.response.data.title
              : 'Something went wrong, try again.';
            throw error;
          });
      } else return false;
    },
    changeAvailability(item, isAvailable) {
      this.ping()
        .then(user => {
          if (user.isAuthenticated) {
            let payload = {
              categoryId: this.categoryId,
              product: { ...item },
              productId: item.id
            };
            payload.product.isAvailable = isAvailable;
            let message = isAvailable
              ? 'Product has been re-stocked!'
              : 'Congratulations on selling out your product!';
            this.updateTenantCategoryItem(payload)
              .then(() => {
                this.onSuccessSubmit(message);
              })
              .catch(error => {
                this.apiError = error.response.data.title
                  ? error.response.data.title
                  : 'Something went wrong, try again.';
                throw error;
              });
          }
        })
        .catch(error => {
          this.$router.push({ name: 'Welcome' });
          throw error;
        });
    },
    editItem(itemId) {
      this.$router.push({ name: 'MenuItemEdit', params: { item: itemId } });
    }
  }
};
</script>
