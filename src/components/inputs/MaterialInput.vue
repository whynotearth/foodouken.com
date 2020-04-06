<template>
  <div class="mb-4 relative text-gray-500">
    <input
      class="input appearance-none relative bg-transparent border border-gray-600 rounded w-full px-4 py-3 focus:border-gray-500 active:border-gray-500"
      :class="value.length > 0 ? 'filled' : ''"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :required="required"
      :pattern="pattern"
      :placeholder="placeholder"
    />
    <label
      for="email"
      class="label bg-secondary absolute mb-0 top-0 left-0 mt-3 ml-3 cursor-text"
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
      type: String,
      default: 'placeholder'
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    pattern: {
      type: String,
      default: null
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

.label {
  transition: all 0.2s ease-out;
  transition: all 200ms;
  opacity: 0;
  padding: 0 5px;
  z-index: 1;
}
</style>
