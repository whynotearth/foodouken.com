<template>
  <div class="m-2 cursor-pointer" @click="$emit('clicked')">
    <div
      class="md:h-20 md:w-20 h-16 w-16 p-1 flex-none rounded-full m-auto"
      :class="selected ? 'border-white border-2' : ''"
    >
      <img
        :src="category.image"
        alt="category"
        class="object-cover h-full w-full rounded-full"
      />
    </div>
    <p
      class="text-center text-sm"
      :class="selected ? 'text-white' : 'text-gray-500'"
    >
      {{ category.name }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    category: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
