<template>
  <div class="w-full">
    <ImageUpload v-model="images" />
    <hr class="border-white border-opacity-12 my-8" />

    <div class="mx-4">
      <span class="tg-h3-mobile text-white text-opacity-54 my-6 inline-block">
        Item info
      </span>
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
      <Dropdown
        v-model="category"
        :options="getCategories"
        placeholder="Category"
        :tight="true"
        background="border bg-background border-white border-opacity-38"
      >
        <template #title="{ selectedOption }">
          <span v-if="selectedOption">
            {{ selectedOption.name }}
          </span>
        </template>
        <template #option="{ option }">
          {{ option.name }}
        </template>
      </Dropdown>
      <MaterialInput
        v-model.number="$v.item.price.$model"
        label="Price"
        labelBg="bg-background"
        type="number"
        :error="$v.item.price.$error"
      >
        <template v-if="$v.item.price.$error">
          <span v-if="!$v.item.price.required" class="text-red-600 text-xs">
            Price is required.
          </span>
          <span v-if="!$v.item.price.numeric" class="text-red-600 text-xs">
            Price should be a number.
          </span>
        </template>
      </MaterialInput>
      <TextArea
        v-model="item.description"
        label="Description"
        labelBg="bg-background"
      />
    </div>
    <hr class="border-white border-opacity-12 my-8" />

    <VariantManager
      title="Choose please!"
      buttonTitle="Add variation"
      v-model="item.variations"
    />
    <hr class="border-white border-opacity-12 my-8" />
    <VariantManager
      title="Customise"
      buttonTitle="Add extras"
      v-model="item.attributes"
    />
    <hr class="border-white border-opacity-12 my-8" />

    <!-- <div class="mx-4">
      <span class="tg-h3-mobile text-white text-opacity-54 my-6 inline-block">
        Inventory
      </span>
      <MaterialInput
        v-model.number="item.inventory"
        label="Available"
        labelBg="bg-background"
      />
    </div>
    <hr class="border-white border-opacity-12 my-8" /> -->
    <div class="my-8 mx-4 text-sm text-red-600">
      <span v-if="$v.$invalid && submitError">
        Please fill out the form properly.
      </span>
      <span v-if="apiError">
        {{ apiError }}
      </span>
    </div>
    <div class="px-4 mb-8 max-w-sm mx-auto">
      <Button
        title="Save item"
        class="rounded-full"
        padding="p-2"
        @clicked="submit"
      />
    </div>
  </div>
</template>

<script>
import ImageUpload from '@/components/imageUpload/ImageUpload.vue';
import VariantManager from '@/components/menu/VariantManager.vue';
import MaterialInput from '@/components/inputs/MaterialInput';
import TextArea from '@/components/inputs/TextArea';
import Dropdown from '@/components/Dropdown';
import Button from '@/components/Button';
import { mapGetters, mapActions } from 'vuex';
import { sleep } from '@/helpers.js';
import { required, numeric } from 'vuelidate/lib/validators';

export default {
  name: 'MenuItemAddEdit',
  components: {
    ImageUpload,
    VariantManager,
    MaterialInput,
    TextArea,
    Dropdown,
    Button
  },
  validations: {
    item: {
      name: {
        required
      },
      price: {
        required,
        numeric
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
        imageUrl: ''
        // inventory: ''
      },
      submitError: false,
      apiError: ''
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
        return [{ url: this.item.imageUrl }];
      },
      set(value) {
        this.item.imageUrl = value[0] ? value[0].url : '';
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
            this.apiError = error.response.data;
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
              categoryId: this.categoryId,
              product: this.item
            };
            delete payload.product.image;
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
          this.apiError = error.response.data.title
            ? error.response.data.title
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
          this.apiError = error.response.data.title
            ? error.response.data.title
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
