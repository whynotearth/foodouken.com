<template>
  <div
    class="disable-scrollbars overflow-x-auto scrolling-touch flex flex-no-wrap mb-4"
  >
    <category
      v-for="category in categories"
      :key="category.id"
      @clicked="fetchCategory(category.slug)"
      :category="category"
      :selected="getSelectedCategorySlug === category.slug"
    />
  </div>
</template>

<script>
import Category from '@/components/categories/Category.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CategoryHolder',
  props: {
    categories: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    Category
  },
  created() {
    this.fetchCategory('For-You');
  },
  methods: {
    ...mapActions('category', ['fetchCategory'])
  },
  computed: {
    ...mapGetters('category', ['getCategory', 'getSelectedCategorySlug'])
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
