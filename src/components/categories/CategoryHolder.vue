<template>
  <div
    class="deleteMargins disable-scrollbars overflow-x-auto scrolling-touch flex flex-no-wrap md:justify-center mt-6"
  >
    <category
      v-for="(category, index) in categories"
      :key="category.id"
      @clicked="fetchCategory(category.slug)"
      :category="category"
      :selected="getSelectedCategorySlug === category.slug"
      :class="{ 'ml-4': index === 0, 'mr-4': index === categories.length - 1 }"
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

<style scoped>
.disable-scrollbars::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* Chrome/Safari/Webkit */
}

.disable-scrollbars {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.deleteMargins {
  margin-left: -1.2rem;
  margin-right: -1.2rem;
}
</style>
