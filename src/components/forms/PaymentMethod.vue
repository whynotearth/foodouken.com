<template>
  <div class="select-none">
    <div class="w-full bg-secondary rounded-lg shadow mb-2">
      <RadioInput
        :selectedOption="getPaymentMethod"
        option="Cash"
        @updateSelectedOption="updatePaymentMethod($event)"
        class="p-5"
      />
      <hr class="border-gray-700" />
      <RadioInput
        :selectedOption="getPaymentMethod"
        option="ABA Bank Transfer"
        @updateSelectedOption="updatePaymentMethod($event)"
        class="p-5"
      />
    </div>
    <div class="w-full text-center my-4">
      <Button title="Review and submit order" @clicked="pageChange(5)" />
    </div>
  </div>
</template>

<script>
import RadioInput from '@/components/inputs/RadioInput';
import calendar from '@/assets/calendar.png';
import down from '@/assets/down.png';
import Button from '@/components/Button.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'PaymentMethod',
  components: { RadioInput, Button },
  data() {
    return {
      calendar: calendar,
      down: down
    };
  },
  methods: {
    ...mapMutations('form', ['pageChange', 'updatePaymentMethod'])
  },
  computed: {
    ...mapGetters('form', ['getPaymentMethod'])
  }
};
</script>

<style></style>
