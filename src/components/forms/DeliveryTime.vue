<template>
  <div class="select-none">
    <div class="w-full bg-secondary rounded-lg shadow mb-2">
      <RadioInput
        v-model="selectedOption"
        :selectedOption="selectedOption"
        option="Now"
        class="p-5"
      />
      <hr class="border-gray-700" />
      <RadioInput
        v-model="selectedOption"
        :selectedOption="selectedOption"
        option="Later"
        class="p-5"
      />
    </div>
    <div class="w-full bg-secondary rounded-lg shadow p-5 mb-2 cursor-pointer">
      <img
        :src="calendar"
        alt="Calendar"
        class="inline-block align-baseline mr-5 -mb-0.5 pointer-events-none"
      />
      <span class="text-gray-500">Dropdown</span>
      <img
        :src="down"
        alt="down arrow"
        class="inline-block py-3 float-right pointer-events-none"
      />
    </div>
    <div class="w-full text-center my-4">
      <Button title="Choose delivery time" @clicked="pageChange(4)" />
    </div>
  </div>
</template>

<script>
import RadioInput from '@/components/inputs/RadioInput';
import calendar from '@/assets/calendar.png';
import down from '@/assets/down.png';
import Button from '@/components/Button.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'DeliveryTime',
  components: { RadioInput, Button },
  data() {
    return {
      selectedOption: '',
      calendar: calendar,
      down: down
    };
  },
  methods: {
    ...mapMutations('form', ['pageChange'])
  }
};
</script>

<style></style>
