<template>
  <label for="toggle" class="flex items-center cursor-pointer">
    <div class="relative">
      <input
        id="toggle"
        type="checkbox"
        class="hidden"
        v-model="inputValue"
      />
      <div
        class="toggle-line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
      ></div>
      <div
        class="toggle-dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
      ></div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'BaseToggleSwitch',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('change', value);
      }
    }
  }
};
</script>

<style scoped>
.toggle-dot {
  top: -0.25rem;
  left: -0.25rem;

  @apply transition-all delay-300 ease-in-out;
  @apply bg-white;
}

.toggle-line {
  @apply bg-white bg-opacity-38;
}

input:checked ~ .toggle-dot {
  @apply bg-button translate-x-full;
}

input:checked ~ .toggle-line {
  @apply bg-button bg-opacity-54;
}
</style>
