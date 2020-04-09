<template>
  <div class="mb-4 relative">
    <textarea
      class="input disable-scrollbars appearance-none relative bg-transparent border border-gray-600 rounded h-32 w-full px-4 py-3 focus:outline-none focus:border-gray-500 focus:border-2 active:border-gray-500 active:border-2"
      :class="value.length > 0 ? 'filled' : ''"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder || label"
    ></textarea>
    <label
      class="label bg-secondary absolute mb-0 top-0 left-0 mt-3 ml-3 cursor-text text-gray-500"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: 'Label'
    },
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      labelClicked: false
    };
  }
};
</script>

<style scoped>
.input {
  transition: border 0.2s ease-in-out;
  z-index: 2;
}

.input:focus + .label,
.input:active + .label,
.input.filled + .label {
  font-size: 0.75rem;
  transition: all 0.2s ease-out;
  top: -1.3rem;
  opacity: 1;
  display: block;
  z-index: 3;
}

.input:focus::placeholder {
  color: transparent;
}

.label {
  transition: all 0.2s ease-out;
  transition: all 200ms;
  opacity: 0;
  padding: 0 5px;
  z-index: 1;
}

.disable-scrollbars::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* Chrome/Safari/Webkit */
}

.disable-scrollbars {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
</style>
