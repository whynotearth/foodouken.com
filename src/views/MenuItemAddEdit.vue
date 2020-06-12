<template>
  <div class="w-full">
    <ImageUpload v-model="itemImages" :defaultImages="defaultImages" />
    <hr class="border-white border-opacity-12 my-8" />

    <div class="mx-4">
      <span class="tg-h3-mobile text-white text-opacity-54 my-6 inline-block">
        Item info
      </span>
      <MaterialInput
        v-model="itemName"
        label="Item name"
        labelBg="bg-background"
      />
      <Dropdown
        v-model="itemCategory"
        :options="getCategories"
        placeholder="Category"
        :tight="true"
        background="border bg-background border-white border-opacity-38"
      />
      <MaterialInput
        v-model.number="itemPrice"
        label="Price"
        labelBg="bg-background"
      />
      <TextArea
        v-model="itemDescription"
        label="Description"
        labelBg="bg-background"
      />
    </div>
    <hr class="border-white border-opacity-12 my-8" />

    <VariantManager
      title="Choose please!"
      buttonTitle="Add variation"
      v-model="itemVariants"
    />
    <hr class="border-white border-opacity-12 my-8" />
    <VariantManager
      title="Customise"
      buttonTitle="Add extras"
      v-model="itemCustomisations"
    />
    <hr class="border-white border-opacity-12 my-8" />

    <div class="mx-4">
      <span class="tg-h3-mobile text-white text-opacity-54 my-6 inline-block">
        Inventory
      </span>
      <MaterialInput
        v-model="itemInventory"
        label="Available"
        labelBg="bg-background"
      />
    </div>
    <hr class="border-white border-opacity-12 my-8" />

    <div class="px-4 mb-8 max-w-sm mx-auto">
      <Button
        title="Save item"
        class="rounded-full"
        padding="p-2"
        :to="{ name: 'MenuItemList' }"
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
import { mapGetters, mapMutations } from 'vuex';

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
  data() {
    return {
      submitError: false,
      registerError: '',
      defaultImages: [
        {
          url:
            'https://res.cloudinary.com/whynotearth/image/upload/v1586682068/foodouken/bangbangbakerycafe/Bagels%20and%20Breads/light_rye_sourdough_bang_bang_ixlett.jpg'
        }
      ]
    };
  },
  beforeDestroy() {
    this.updateItem({
      name: '',
      category: '',
      images: [],
      price: '',
      description: '',
      inventory: '',
      variants: [],
      customisations: []
    });
  },
  computed: {
    ...mapGetters('menu', [
      'getItemName',
      'getItemCategory',
      'getItemPrice',
      'getItemDescription',
      'getCategories',
      'getItemInventory',
      'getItemImages',
      'getItemVariants',
      'getItemCustomisations'
    ]),
    itemName: {
      get() {
        return this.getItemName;
      },
      set(value) {
        this.updateItemName(value);
      }
    },
    itemCategory: {
      get() {
        return this.getItemCategory;
      },
      set(value) {
        this.updateItemCategory(value);
      }
    },
    itemImages: {
      get() {
        return this.getItemImages;
      },
      set(value) {
        this.updateItemImages(value);
      }
    },
    itemPrice: {
      get() {
        return this.getItemPrice;
      },
      set(value) {
        this.updateItemPrice(value);
      }
    },
    itemDescription: {
      get() {
        return this.getItemDescription;
      },
      set(value) {
        this.updateItemDescription(value);
      }
    },
    itemInventory: {
      get() {
        return this.getItemInventory;
      },
      set(value) {
        this.updateItemInventory(value);
      }
    },
    itemVariants: {
      get() {
        return this.getItemVariants;
      },
      set(value) {
        this.updateItemVariants(value);
      }
    },
    itemCustomisations: {
      get() {
        return this.getItemCustomisations;
      },
      set(value) {
        return this.updateItemCustomisations(value);
      }
    }
  },
  methods: {
    ...mapMutations('menu', [
      'updateItem',
      'updateItemName',
      'updateItemCategory',
      'updateItemImages',
      'updateItemPrice',
      'updateItemDescription',
      'updateItemInventory',
      'updateItemVariants',
      'updateItemCustomisations'
    ])
  }
};
</script>
