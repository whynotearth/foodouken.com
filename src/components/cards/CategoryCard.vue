<template>
  <div class="bg-secondary shadow-md rounded-lg h-48 mb-4">
    <img
      src="https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg"
      alt="Category image"
      class="w-auto h-40 w-full rounded-t-lg"
    />
    <span class="p-4 text-white font-semibold">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    title: {
      type: String,
      default: 'Category name'
    },
    image: {
      type: URL
    }
  }
};
</script>

<style></style>
