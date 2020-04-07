<template>
  <div class="m-2 cursor-pointer flex flex-col" @click="$emit('clicked')">
    <div class="flex justify-center h-16 md:h-20 w-16 md:w-20 self-center">
      <div
        class="flex-none rounded-full h-16 md:h-20 w-16 md:w-20 self-center"
        :class="
          selected ? 'selected border-white border-2 p-1' : 'unselected p-1.5'
        "
      >
        <img :src="category.image" alt="category" class="rounded-full" />
      </div>
    </div>
    <p
      class="text-center text-sm w-20 self-center"
      :class="selected ? 'text-white' : 'text-gray-500'"
    >{{ category.name }}</p>
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

<style>
.selected {
  animation: shrink-mobile 0.2s ease-in-out;
}

@media (min-width: 768px) {
  .selected {
    animation: shrink 0.2s ease-in-out;
  }
}

@keyframes shrink {
  0% {
    width: 5rem;
    height: 5rem;
  }
  50% {
    width: 4.7rem;
    height: 4.7rem;
  }
  100% {
    width: 5rem;
    height: 5rem;
  }
}
@keyframes shrink-mobile {
  0% {
    width: 4rem;
    height: 4rem;
  }
  50% {
    width: 3.6rem;
    height: 3.6rem;
  }
  100% {
    width: 4rem;
    height: 4rem;
  }
}
</style>
