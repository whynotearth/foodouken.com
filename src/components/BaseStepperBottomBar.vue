<template>
  <div
    class="w-full text-center my-4 flex sticky lg:relative inset-x-0 bottom-0 z-10"
  >
    <Button
      titleLeft="◄ Back"
      class="bg-footer"
      :width="hideNext ? 'flex-grow' : 'w-1/3'"
      @clicked="$emit('previousStep')"
      v-if="firstPageStepBack || page != 1"
    />
    <Button
      :titleRight="nextStepText"
      :width="'flex-grow'"
      @clicked="$emit('nextStep')"
      v-if="!hideNext"
    />
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'CheckoutNavBar',
  components: {
    Button
  },
  props: {
    nextStepText: {
      type: String
    },
    hideNext: {
      type: Boolean,
      default: false
    },
    page: {
      type: Number
    },
    firstPageStepBack: {
      type: Boolean,
      default: false
    }
  }
};
</script>
