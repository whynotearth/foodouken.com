<template>
  <div
    class="w-full cursor-pointer text-lg"
    :class="{ 'opacity-50 cursor-not-allowed': disabled }"
    @click="selectOption"
  >
    <div
      class="rounded-full h-5 w-5 p-1 border-2 border-gray-500 inline-block align-baseline mr-4 -mb-0.5"
      :class="{ 'border-button': selectedOption === value }"
    >
      <div
        class="h-full w-full rounded-full"
        :class="{ 'bg-button': selectedOption === value }"
      ></div>
    </div>
    <span class="inline-block">
      <slot name="title">
        {{ value }}
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'RadioInput',
  model: {
    prop: 'selectedOption',
    event: 'updateSelectedOption'
  },
  props: {
    selectedOption: {
      type: [String, Number]
    },
    value: {
      type: [String, Number],
      default: 'Option'
    },
    disabled: {
      type: Boolean
    }
  },
  methods: {
    selectOption() {
      if (this.disabled) return;
      else this.$emit('updateSelectedOption', this.value);
    }
  }
};
</script>

<style></style>
