<template>
  <div
    class="disable-scrollbars overflow-x-auto scrolling-touch flex flex-no-wrap mb-4"
  >
    <category
      v-for="category in categories"
      :key="category.id"
      @clicked="selectCategory(category)"
      :selected="selectedCategory === category"
      :title="category.name"
    />
  </div>
</template>

<script>
import Category from '@/components/categories/Category.vue';
import data from '@/db/data.json';

export default {
  name: 'CategoryHolder',
  components: {
    Category
  },
  data() {
    return {
      categories: data.categories,
      selectedCategory: {}
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
      this.$router.push(`/${category.slug}`);
    }
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
