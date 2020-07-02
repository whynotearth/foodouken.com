<template>
  <div class="mb-4 relative text-white text-opacity-54">
    <div
      @click="toggleDropdown"
      class="w-full mb-2 rounded shadow cursor-pointer"
      :class="[background, tight ? 'py-3 px-4 rounded' : 'p-5 rounded-lg']"
    >
      <img
        :src="icon"
        v-if="icon"
        alt="icon"
        class="inline-block align-baseline mr-4 h-5 w-5 pointer-events-none"
      />
      <span
        class="inline-block truncate w-4/5"
        :class="selectedOption ? 'text-white text-opacity-100' : ''"
      >
        <slot name="title" :selectedOption="selectedOption">
          {{ selectedOption || placeholder }}
        </slot>
      </span>
      <img
        :src="down"
        alt="down arrow"
        class="inline-block py-3 float-right pointer-events-none"
        :class="{ 'transform rotate-180': dropdown }"
      />
    </div>
    <div
      v-if="dropdown"
      class="dropdown absolute right-0 left-0 z-20 narrow-scrollbar w-48 w-full shadow-8dp overflow-x-hidden overflow-y-auto"
      :class="[background, tight ? 'rounded' : 'rounded-lg']"
    >
      <div
        v-for="(option, index) in options"
        :key="index"
        @click="updateValue(option)"
        class="hover:bg-footer cursor-pointer"
        :class="
          tight
            ? 'p-4 first:rounded-t last:rounded-b'
            : 'p-5 first:rounded-t-lg last:rounded-b-lg'
        "
      >
        <slot name="option" :option="option">{{ option }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
import down from '@/assets/down.png';

export default {
  name: 'Dropdown',
  model: {
    prop: 'selectedOption',
    event: 'updateSelectedOption'
  },
  props: {
    icon: {
      type: String,
      default: null
    },
    selectedOption: {
      type: [String, Date, Number, Object]
    },
    options: {
      type: Array,
      default: () => {
        return ['Option 1', 'Option 2', 'Option 2'];
      }
    },
    placeholder: {
      type: String,
      default: 'Select an option'
    },
    background: {
      type: String,
      default: 'bg-secondary'
    },
    tight: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dropdown: false,
      down: down
    };
  },
  methods: {
    hideDropdown() {
      this.dropdown = false;
    },
    showDropdown() {
      this.dropdown = true;
    },
    toggleDropdown() {
      if (this.dropdown) {
        this.hideDropdown();
      } else {
        this.showDropdown();
      }
    },
    updateValue(option) {
      this.$emit('updateSelectedOption', option);
      this.hideDropdown();
    }
  }
};
</script>

<style scoped>
.dropdown {
  max-height: 13rem;
}
</style>
