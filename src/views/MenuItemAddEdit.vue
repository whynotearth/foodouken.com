<template>
  <div class="w-full">
    <br /><br />
    <MaterialInput
      v-model="$v.item.name.$model"
      label="Item name"
      labelBg="bg-background"
      :error="$v.item.name.$error"
    >
      <span v-if="$v.item.name.$error" class="text-red-600 text-xs">
        Name is required
      </span>
    </MaterialInput>
  </div>
</template>

<script>
/* eslint-disable */
import ImageUpload from '@/components/imageUpload/ImageUpload.vue';
import VariantManager from '@/components/menu/VariantManager.vue';
import MaterialInput from '@/components/inputs/MaterialInput';
import TextArea from '@/components/inputs/TextArea';
import Dropdown from '@/components/Dropdown';
import Button from '@/components/Button';
import BaseToggleSwitch from '@/components/inputs/BaseToggleSwitch';
import BaseAPIErrorDisplay from '@/components/BaseAPIErrorDisplay';

import { mapGetters, mapActions } from 'vuex';
import { sleep } from '@/helpers.js';
import { required, decimal } from 'vuelidate/lib/validators';

export default {
  name: 'MenuItemAddEdit',
  components: {
    ImageUpload,
    VariantManager,
    MaterialInput,
    TextArea,
    Dropdown,
    Button,
    BaseToggleSwitch,
    BaseAPIErrorDisplay
  },
  validations: {
    item: {
      name: {
        required
      },
      price: {
        required,
        decimal
      }
    }
  },
  data() {
    return {
      itemId: this.$route.params.item,
      tenantSlug: this.$route.params.tenantSlug,
      categoryId: this.$route.params.categoryId,
      category: {
        id: null,
        name: ''
      },
      item: {
        name: '',
        price: '',
        description: '',
        variations: [],
        attributes: [],
        imageUrl:
          'https://res.cloudinary.com/whynotearth/image/upload/v1593327134/foodouken/tenant_upload/b6pit9hqniikb1jnz5px.png',
        isAvailable: true
        // inventory: ''
      },
      submitError: false,
      apiError: null
    };
  },
  created() {
    this.init();
  },
  beforeDestroy() {
    this.item = {};
  },
  computed: {
    ...mapGetters('menu', ['getCategories']),
    images: {
      get() {
        return [{ secure_url: this.item.imageUrl }];
      },
      set(value) {
        this.item.imageUrl = value[0] ? value[0].secure_url : '';
      }
    }
  },
  methods: {
    ...mapActions('auth', ['ping']),
    ...mapActions('menu', [
      'fetchTenantCategories',
      'fetchTenantCategoryById',
      'fetchTenantCategoryItemById',
      'createTenantCategoryItem',
      'updateTenantCategoryItem',
      'deleteTenantCategoryItem'
    ]),
    init() {
      // TODO: Add loader till all requests are finished loading
      this.edit = this.itemId !== undefined ? true : false;
      this.fetchTenantCategories(this.tenantSlug);
      if (this.edit) {
        this.fetchTenantCategoryItemById({
          categoryId: this.categoryId,
          productId: this.itemId
        })
          .then(item => {
            this.item = item;
            this.category = item.category;
          })
          .catch(error => {
            this.apiError = error.response.data
              ? error.response.data
              : 'Failed to fetch item details, please refresh.';
            throw error;
          });
      } else {
        this.fetchTenantCategoryById({
          tenantSlug: this.tenantSlug,
          categoryId: this.categoryId
        })
          .then(category => {
            this.category = category;
          })
          .catch(error => {
            throw error;
          });
      }
    },
    async onSuccessSubmit() {
      this.$store.commit('overlay/updateModel', {
        title: 'Success!',
        message: 'Your product has been saved!'
      });

      await sleep(1000);

      await this.$router.push({
        name: 'MenuItemList',
        params: { categoryId: this.categoryId }
      });

      this.$store.commit('overlay/updateModel', {
        title: '',
        message: ''
      });
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitError = true;
        return false;
      }
      this.ping()
        .then(user => {
          if (user.isAuthenticated) {
            // this.cleanFormData();
            let payload = {
              categoryId: this.category.id,
              product: this.item
            };
            this.edit ? this.editItem(payload) : this.newItem(payload);
          }
        })
        .catch(error => {
          this.$router.push({ name: 'Welcome' });
          throw error;
        });
    },
    newItem(payload) {
      this.createTenantCategoryItem(payload)
        .then(() => {
          this.onSuccessSubmit();
        })
        .catch(error => {
          this.apiError = error.response.data
            ? error.response.data
            : 'Something went wrong, try again.';
          throw error;
        });
    },
    editItem(payload) {
      payload.productId = this.itemId;
      this.updateTenantCategoryItem(payload)
        .then(() => {
          this.onSuccessSubmit();
        })
        .catch(error => {
          this.apiError = error.response.data
            ? error.response.data
            : 'Something went wrong, try again.';
          throw error;
        });
    }
    // TODO: Check for empty variants and customisations
    // cleanFormData() {
    //   let variations = this.item.variations;
    //   if(variations.length > 0) {

    //   }
    // }
  }
};
</script>
