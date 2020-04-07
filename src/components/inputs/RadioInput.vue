<template>
  <div class="w-full cursor-pointer text-lg" @click="selectOption">
    <div
      class="rounded-full h-5 w-5 p-1 border-2 border-gray-500 inline-block align-middle mr-5"
      :class="{ 'border-button': selectedOption === option }"
    >
      <div
        class="h-full w-full rounded-full"
        :class="{ 'bg-button': selectedOption === option }"
      ></div>
    </div>
    <span>{{ option }}</span>
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
      type: String
    },
    option: {
      type: String,
      default: 'Option'
    }
  },
  methods: {
    selectOption() {
      this.$emit('updateSelectedOption', this.option);
    }
  }
};
</script>

<style></style>
