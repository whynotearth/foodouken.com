<template>
  <section v-if="getSelectedCategory">
    <div
      class="deleteMargins disable-scrollbars overflow-x-auto flex flex-no-wrap mt-6"
    >
      <category
        v-for="(category, index) in getCategories"
        :key="category.id"
        @clicked="fetchTenantCategoryItems(category.id)"
        :category="category"
        :selected="getSelectedCategory.slug === category.slug"
        :class="{
          'ml-4': index === 0,
          'mr-4': index === getCategories.length - 1
        }"
      />
    </div>
    <div>
      <h3 class="text-5xl text-white font-bold text-center mb-4">
        {{ getSelectedCategory.name }}
      </h3>
      <p class="text-gray-500 text-center mb-8 text-lg">
        {{ getSelectedCategory.description || '' }}
      </p>
    </div>
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
    this.fetchTenantCategories(this.$route.params.slug).then(categories => {
      this.fetchTenantCategoryItems(categories[0].id);
    });
  },
  methods: {
    ...mapActions('menu', ['fetchTenantCategories', 'fetchTenantCategoryItems'])
  },
  computed: {
    ...mapGetters('menu', ['getCategories', 'getSelectedCategory'])
  }
};
</script>

<style scoped>
.deleteMargins {
  margin-left: -1.2rem;
  margin-right: -1.2rem;
}
</style>
