<template>
  <div class="mb-4 relative">
    <input
      class="input appearance-none outline-none relative bg-transparent border rounded w-full px-4 py-3 focus:border-2 active:border-2"
      :class="[
        { filled: value.length > 0 },
        error
          ? 'border-red-600 focus:border-red-600 active:border-red-600'
          : 'border-gray-600 focus:border-gray-500 active:border-gray-500'
      ]"
      :id="idName"
      :type="type"
      :value="value"
      @blur="$emit('input', $event.target.value)"
      :placeholder="placeholder || label"
    />
    <label
      :for="idName"
      class="label bg-secondary absolute mb-0 top-0 left-0 mt-3 ml-3 cursor-text"
      :class="error ? 'text-red-600' : 'text-gray-500'"
    >
      {{ label }}
    </label>
    <slot></slot>
  </div>
</template>

<script>
import { randomId } from '@/helpers.js';

export default {
  name: 'TextInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Label'
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    error: {
      default: Boolean
    },
    idName: {
      type: String,
      default: randomId
    }
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
</style>
