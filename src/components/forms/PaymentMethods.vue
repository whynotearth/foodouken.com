<template>
  <div class="px-6">
    <div class="my-4">
      <h6 class="tg-body-mobile text-white text-opacity-54">
        Select the payment methods that you accept:
      </h6>
    </div>
    <div>
      <div class="my-8">
        <CheckBox v-model="paymentMethods" :value="1" label="Cash" />
      </div>
      <div class="my-8">
        <CheckBox v-model="paymentMethods" :value="2" label="ABA Bank Transfer" />
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from '@/components/inputs/CheckBox';

export default {
  name: 'PaymentMethods',
  components: { CheckBox },
  data() {
    return {
      paymentMethods: []
    };
  }
};
</script>
