<template>
  <div class="w-full">
    <ImageUpload v-model="categoryImage" :defaultImages="defaultImages" />
    <hr class="border-white border-opacity-12 my-8" />

    <div class="mx-4">
      <span class="tg-h3-mobile text-white text-opacity-54 my-6 inline-block">
        Category info
      </span>
      <MaterialInput
        v-model="categoryName"
        label="Category name"
        labelBg="bg-background"
      />
      <TextArea
        v-model="categoryDescription"
        label="Description"
        labelBg="bg-background"
      />
    </div>
    <hr class="border-white border-opacity-12 my-8" />

    <div class="px-4 mb-8 max-w-sm mx-auto">
      <Button
        title="Save category"
        class="rounded-full"
        padding="p-2"
        :to="{ name: 'MenuCategoryList' }"
      />
    </div>
  </div>
</template>

<script>
import ImageUpload from '@/components/imageUpload/ImageUpload.vue';
import MaterialInput from '@/components/inputs/MaterialInput';
import TextArea from '@/components/inputs/TextArea';
import Button from '@/components/Button';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'MenuCategoryAddEdit',
  components: {
    ImageUpload,
    MaterialInput,
    TextArea,
    Button
  },
  data() {
    return {
      params: {
        tenantSlug: this.$route.params.tenantSlug,
        categoryId: this.$route.params.categoryId
      },
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
  created() {
    this.fetchTenantCategoryById(this.params);
  },
  beforeDestroy() {
    this.updateCategory({
      name: '',
      image: '',
      description: ''
    });
  },
  computed: {
    ...mapGetters('menu', [
      'getCategoryName',
      'getCategoryDescription',
      'getCategoryImage'
    ]),
    categoryName: {
      get() {
        return this.getCategoryName;
      },
      set(value) {
        this.updateCategoryName(value);
      }
    },
    categoryImage: {
      //FIXME: ImageUpload component should handle strings, the solution below is a temporary fix.
      get() {
        return [{ url: this.getCategoryImage }];
      },
      set(value) {
        this.updateCategoryImage(value[0].url);
      }
    },
    categoryDescription: {
      get() {
        return this.getCategoryDescription;
      },
      set(value) {
        this.updateCategoryDescription(value);
      }
    }
  },
  methods: {
    ...mapActions('menu', ['fetchTenantCategoryById']),
    ...mapMutations('menu', [
      'updateCategory',
      'updateCategoryName',
      'updateCategoryImage',
      'updateCategoryDescription'
    ])
  }
};
</script>
