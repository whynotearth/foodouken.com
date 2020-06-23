<template>
  <div class="mx-4">
    <div class="w-full my-6 cursor-pointer" @click="expand = !expand">
      <span class="tg-h3-mobile text-white text-opacity-54 inline-block">
        {{ title }}
      </span>
      <img
        :src="down"
        alt="down arrow"
        class="inline-block py-3 float-right pointer-events-none"
        :class="{ 'transform rotate-180': expand }"
      />
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="expand" class="shadow-1dp bg-secondary rounded-lg">
        <div v-if="variants.length > 0" class="pt-4">
          <transition-group name="fade">
            <div
              v-for="(variant, index) in variants"
              :key="`Variant_${index + 1}`"
              class="flex"
            >
              <MaterialInput
                v-model="variant.name"
                :label="`Option ${index + 1}`"
                class="w-2/3 mx-2"
              />
              <MaterialInput
                v-model.number="variant.price"
                label="Price"
                class="w-1/3"
                type="number"
              />
              <Delete
                @click="removeVariant(index)"
                class="mr-2 my-2 text-white text-opacity-54 hover:text-opacity-100 cursor-pointer"
              />
            </div>
          </transition-group>
          <hr class="border-white border-opacity-12" />
        </div>
        <Button
          @clicked="addVariant"
          :title="buttonTitle"
          :isRipple="false"
          buttonBg="bg-transparent"
          class="text-button"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import MaterialInput from '@/components/inputs/MaterialInput';
import Button from '@/components/Button';
import down from '@/assets/down.png';
import Delete from '@/assets/delete.svg';

export default {
  name: 'VariantManager',
  components: { MaterialInput, Button, Delete },
  model: {
    prop: 'variants',
    event: 'updateVariants'
  },
  props: {
    title: {
      type: String,
      default: 'Choose please!'
    },
    buttonTitle: {
      type: String,
      default: 'Add Variation'
    },
    variants: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      down,
      expand: true,
      newVariant: {
        name: '',
        price: ''
      }
    };
  },
  methods: {
    addVariant() {
      this.$emit('updateVariants', [...this.variants, this.newVariant]);
      this.newVariant = {
        name: '',
        price: ''
      };
    },
    removeVariant(index) {
      let newVariants = this.variants;
      newVariants.splice(index, 1);
      this.$emit('updateVariants', newVariants);
    }
  }
};
</script>
