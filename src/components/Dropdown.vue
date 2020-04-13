<template>
  <div>
    <div
      @click="showDropdown = !showDropdown"
      class="w-full bg-secondary rounded-lg shadow p-5 mb-2 cursor-pointer"
    >
      <img
        :src="icon"
        v-if="icon"
        alt="icon"
        class="inline-block align-baseline mr-4 h-5 w-5 -mb-0.5 pointer-events-none"
      />
      <span
        class="inline-block truncate w-4/5"
        :class="{ 'text-gray-500': selectedOption }"
      >
        <slot name="title" :selectedOption="selectedOption">
          {{ selectedOption || placeholder }}
        </slot>
      </span>
      <img
        :src="down"
        alt="down arrow"
        class="inline-block py-3 float-right pointer-events-none"
      />
    </div>
    <div
      v-if="showDropdown"
      class="dropdown mt-2 w-48 bg-secondary w-full rounded-lg shadow-xl overflow-x-hidden overflow-y-auto"
    >
      <div
        class="p-5 first:rounded-t-lg last:rounded-b-lg hover:bg-footer cursor-pointer"
        v-for="(option, index) in options"
        :key="index"
        @click="updateDay(option)"
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
      type: [String, Date, Number]
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
    }
  },
  data() {
    return {
      showDropdown: false,
      down: down
    };
  },
  methods: {
    updateDay(option) {
      this.$emit('updateSelectedOption', option);
      this.showDropdown = false;
    }
  }
};
</script>

<style scoped>
.dropdown {
  max-height: 13rem;
}
.dropdown::-webkit-scrollbar {
  width: 3px;
  padding: 2px 0;
}
.dropdown::-webkit-scrollbar-track {
  box-shadow: none;
}
.dropdown::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.54);
  outline: transparent;
}
</style>
