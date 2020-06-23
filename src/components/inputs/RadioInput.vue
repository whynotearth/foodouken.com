<template>
  <div
    class="w-full flex items-center cursor-pointer text-lg"
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
    <slot name="title">
      <span class="inline-block">
        {{ value }}
      </span>
    </slot>
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
      type: [String, Number, Object]
    },
    value: {
      type: [String, Number, Object],
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
