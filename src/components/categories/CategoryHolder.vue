<template>
  <div
    class="disable-scrollbars overflow-x-auto scrolling-touch flex flex-no-wrap mb-4"
  >
    <category
      v-for="category in foodCategories"
      :key="category.id"
      @clicked="selectCategory(category.name)"
      :category="category"
      :selected="selectedCategory.id - 189 === category.id"
      :title="category.name"
    />
  </div>
</template>

<script>
import Category from '@/components/categories/Category.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'CategoryHolder',
  components: {
    Category
  },
  methods: {
    selectCategory(slug) {
      this.$store.dispatch('category/getCategoryBySlug', slug);
    },
    updateCategories() {
      this.$store.dispatch('category/getAllCategories');
    },
    loadDefaultCategory() {
      // TODO: Refactor hard-coded default
      this.$store.dispatch('category/getCategoryBySlug', 'bagels-and-breads');
    }
  },
  computed: {
    ...mapGetters('category', ['foodCategories']),
    selectedCategory() {
      return this.$store.state.category.selectedCategory;
    }
  },
  mounted() {
    this.updateCategories();
    this.loadDefaultCategory();
  }
};
</script>

<style>
.disable-scrollbars::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* Chrome/Safari/Webkit */
}

.disable-scrollbars {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
</style>
