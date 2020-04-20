<template>
  <section>
    <div
      class="deleteMargins disable-scrollbars overflow-x-auto scrolling-touch flex flex-no-wrap mt-6"
    >
      <category
        v-for="(category, index) in getCategories"
        :key="category.id"
        @clicked="fetchCategoryProducts(category)"
        :category="category"
        :selected="getSelectedCategorySlug === category.slug"
        :class="{
          'ml-4': index === 0,
          'mr-4': index === getCategories.length - 1
        }"
      />
    </div>
    <h3 class="text-5xl text-white font-bold text-center mb-4">
      {{ getCategory.name }}
    </h3>
  </section>
</template>

<script>
import Category from '@/components/categories/Category.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CategoryHolder',
  components: {
    Category
  },
  created() {
    this.fetchCategories().then(() => {
      this.fetchCategoryProducts(
        this.getCategories.find(el => el.slug === 'for-you')
      );
    });
  },
  methods: {
    ...mapActions('category', ['fetchCategories', 'fetchCategoryProducts'])
  },
  computed: {
    ...mapGetters('category', [
      'getCategories',
      'getCategory',
      'getSelectedCategorySlug'
    ])
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
