<template>
  <div
    class="disable-scrollbars overflow-x-auto scrolling-touch flex flex-no-wrap mb-4"
  >
    <category
      v-for="category in foodCategories"
      :key="category.id"
      @clicked="updateSelectedCategory(category.slug)"
      :category="category"
      :selected="selectedCategory.slug === category.slug"
      :title="category.slug"
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
    updateSelectedCategory(slug) {
      this.$store.dispatch('category/updateSelectedCategory', slug);
    }
  },
  computed: {
    ...mapGetters('category', ['foodCategories', 'selectedCategory'])
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
