<template>
  <div class="m-2 cursor-pointer" @click="$emit('clicked')">
    <div
      class="md:h-20 md:w-20 h-16 w-16 p-1 flex-none rounded-full m-auto"
      :class="selected ? 'border-white border-2' : ''"
    >
      <img
        src="https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg"
        alt="category"
        class="object-cover h-full w-full rounded-full"
      />
    </div>
    <p
      class="text-center text-sm"
      :class="selected ? 'text-white' : 'text-gray-500'"
    >
      {{ title | dashToSpace | capitalize }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    title: {
      type: String,
      default: 'Category'
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
