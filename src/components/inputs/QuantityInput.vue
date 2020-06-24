<template>
  <div class="flex items-center text-gray-500 font-bold">
    <transition name="fade" mode="in-out" :duration="2000">
      <div
        class="cursor-pointer rounded-full h-5 w-5 p-1 border-2 border-gray-500 inline-block align-baseline"
        @click="increment"
        v-if="value === 0"
      ></div>
      <div class="flex" v-else>
        <div
          class="cursor-pointer w-6 select-none"
          @click="decrement"
          :class="buttonClasses"
        >
          <img
            :src="minus"
            alt="-"
            class="pointer-events-none"
            draggable="false"
          />
        </div>
        <div class="">
          <input
            type="number"
            name="quantity"
            :min="min"
            :value="value"
            @input="updateModel($event)"
            class="bg-transparent w-8 text-center font-bold text-white"
            :class="counterClasses"
          />
        </div>
        <div
          class="cursor-pointer w-6 select-none"
          @click="increment"
          :class="buttonClasses"
        >
          <img :src="plus" alt="+" class="pointer-events-none" draggable="false" />
        </div>
      </div>
    </transition>
    
  </div>
</template>

<script>
import plus from '@/assets/plus.png';
import minus from '@/assets/minus.png';

export default {
  name: 'QuantityInput',
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    buttonClasses: {
      type: String,
      default: ''
    },
    counterClasses: {
      type: String,
      default: ''
    },
    min: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      plus,
      minus
    };
  },
  methods: {
    increment() {
      const value = this.value + 1;
      this.$emit('update', value);
    },
    decrement() {
      const value = this.value - 1;
      if (value >= this.min) {
        this.$emit('update', value);
      }
    },
    updateModel(e) {
      const value = Number(e.target.value);

      if (typeof value === 'number' && value >= this.min) {
        this.$emit('update', value);
      }
    }
  }
};
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
