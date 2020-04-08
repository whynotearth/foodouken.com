<template>
  <div class="select-none">
    <div class="w-full bg-secondary rounded-lg shadow mb-2">
      <RadioInput v-model="selectedTime" option="Now" class="p-5" />
      <hr class="border-gray-700" />
      <RadioInput v-model="selectedTime" option="Later" class="p-5" />
    </div>
    <Dropdown
      v-if="selectedTime === 'Later'"
      :icon="calendar"
      v-model="day"
      :options="days"
    />
    <Dropdown
      v-if="selectedTime === 'Later' && day"
      :icon="clock"
      v-model="time"
    />
    <div class="w-full text-center my-4">
      <Button title="Pick payment method" @clicked="pageChange(4)" />
    </div>
  </div>
</template>

<script>
import RadioInput from '@/components/inputs/RadioInput';
import Button from '@/components/Button.vue';
import Dropdown from '@/components/Dropdown.vue';
import calendar from '@/assets/calendar.png';
import clock from '@/assets/clock.png';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'DeliveryTime',
  components: { RadioInput, Button, Dropdown },
  data() {
    return {
      selectedTime: '',
      day: '',
      time: '',
      calendar: calendar,
      clock: clock
    };
  },
  methods: {
    ...mapMutations('form', ['pageChange'])
  },
  computed: {
    ...mapGetters('home', ['getOpeningHours'])
  }
};
</script>

<style></style>
