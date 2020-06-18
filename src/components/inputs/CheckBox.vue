<template>
  <label class="cursor-pointer">
    <input
      class="hidden"
      type="checkbox"
      v-bind="$attrs"
      :value="value"
      v-on="$listeners"
      @input="updateValue"
    />
    <div class="w-auto inline-block">
      <div class="flex items-center">
        <div
          class="h-5 w-5 border border-white rounded"
          :class="[
            isChecked
              ? 'bg-button border-button'
              : 'border-opacity-38 bg-white bg-opacity-38'
          ]"
        >
          <div
            :class="isChecked ? '' : 'invisible'"
            class="flex h-full w-full justify-center items-center text-black"
          >
            <CheckMark />
          </div>
        </div>
        <div class="mx-4 tg-body-mobile">
          <slot name="label">
            <span class="mx-1 text-white text-opacity-84">
              {{ label }}
            </span>
          </slot>
        </div>
      </div>
    </div>
  </label>
</template>

<script>
import CheckMark from '@/assets/check.svg';

export default {
  name: 'CheckBox',
  inheritAttrs: false,
  model: {
    prop: 'inputModel',
    event: 'update'
  },
  components: {
    CheckMark
  },
  data() {
    return {};
  },
  props: {
    value: {
      type: [String, Number, Boolean]
    },
    inputModel: {
      type: [Array, Boolean]
    },
    label: {
      type: String
    }
  },
  methods: {
    updateValue(event) {
      if (Array.isArray(this.inputModel)) {
        const newArray = [...this.inputModel];

        const isValueInArray = newArray.includes(event.target.value);

        if (!isValueInArray) {
          newArray.push(event.target.value);
        } else {
          newArray.splice(
            newArray.findIndex(val => val === event.target.value),
            1
          );
        }

        this.$emit('update', [...newArray]);
      } else {
        this.$emit('update', event.target.checked);
      }
    }
  },
  computed: {
    isChecked() {
      if (Array.isArray(this.inputModel)) {
        return this.inputModel.includes(String(this.value));
      }
      return this.inputModel;
    }
  }
};
</script>
