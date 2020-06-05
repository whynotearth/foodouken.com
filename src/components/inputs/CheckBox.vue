<template>
  <label class="cursor-pointer">
    <input
      class="hidden"
      type="checkbox"
      v-bind="$attrs"
      :value="value"
      v-on="$listeners"
      @input="changeValue"
      v-model="inputModel"
    />
    <div class="w-auto inline-block">
      <div class="flex items-center">
        <div
          class="h-5 w-5 border border-white rounded"
          :class="[
            showCheckMark
              ? 'bg-button border-button'
              : 'border-opacity-38 bg-white bg-opacity-38'
          ]"
        >
          <div
            :class="showCheckMark ? '' : 'invisible'"
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
      type: [String, Number]
    },
    inputModel: {
      type: [Object, String, Number]
    },
    label: {
      type: String
    }
  },
  methods: {
    changeValue(event) {
      if (typeof this.inputModel === 'object') {
        const newArray = [...this.inputModel];
        if (event.target.checked) {
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
    /*
      If value is object and includes in array return true otherwise false
      If value is not object means it has to be null or boolean return accordingly
    */
    showCheckMark() {
      return (
        (typeof this.inputModel === 'object' &&
          this.inputModel.includes(String(this.value))) ||
        (typeof this.inputModel !== 'object' && this.inputModel)
      );
    }
  }
};
</script>
