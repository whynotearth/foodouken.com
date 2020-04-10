<template>
  <div class="select-none">
    <div class="w-full bg-secondary rounded-lg shadow mb-2">
      <RadioInput v-model="option" value="Now" class="p-5">
        <template v-slot:title>
          <span>Now</span>
        </template>
      </RadioInput>
      <hr class="border-gray-700" />
      <RadioInput v-model="option" value="Later" class="p-5" />
    </div>
    <Dropdown
      v-if="option === 'Later'"
      :icon="calendar"
      v-model="day"
      :options="days()"
      placeholder="Select day"
      class="mb-2"
    >
      <template v-slot:title="slotProps">
        <span v-if="slotProps.selectedOption">
          {{
            `${week[new Date(slotProps.selectedOption).getDay()]} 
            ${new Date(slotProps.selectedOption).getDate()}`
          }}
        </span>
      </template>
      <template v-slot:option="slotProps">
        <span>
          {{
            `${week[new Date(slotProps.option).getDay()]} 
            ${new Date(slotProps.option).getDate()}`
          }}
        </span>
      </template>
    </Dropdown>
    <Dropdown
      v-if="option === 'Later' && day"
      :icon="clock"
      v-model="time"
      :options="timeSlots()"
      placeholder="Select time"
      class="mb-2"
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
      calendar: calendar,
      clock: clock,
      week: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
    };
  },
  methods: {
    ...mapMutations('form', [
      'pageChange',
      'updateDeliveryDateOption',
      'updateDeliveryDateDay',
      'updateDeliveryDateTime'
    ]),
    days() {
      let d = Date.now();
      let days = [];
      for (let i = 0; i < 7; i++) {
        let a = d + i * 86400000;
        days.push(a);
      }
      return days;
    },
    timeSlots() {
      let hours, minutes, ampm;
      let time = [];
      for (let i = 0; i <= 1440; i += 15) {
        hours = Math.floor(i / 60);
        minutes = i % 60;
        if (minutes < 10) {
          minutes = '0' + minutes; // adding leading zero
        }
        ampm = hours % 24 < 12 ? 'AM' : 'PM';
        hours = hours % 12;
        if (hours === 0) {
          hours = 12;
        }
        time.push(hours + ':' + minutes + ' ' + ampm);
      }
      return time;
    }
  },
  computed: {
    ...mapGetters(['home/getOpeningHours']),
    ...mapGetters('form', [
      'getDeliveryDateOption',
      'getDeliveryDateDay',
      'getDeliveryDateTime'
    ]),
    option: {
      get() {
        return this.getDeliveryDateOption;
      },
      set(value) {
        this.updateDeliveryDateOption(value);
      }
    },
    day: {
      get() {
        return this.getDeliveryDateDay;
      },
      set(value) {
        this.updateDeliveryDateDay(value);
      }
    },
    time: {
      get() {
        return this.getDeliveryDateTime;
      },
      set(value) {
        this.updateDeliveryDateTime(value);
      }
    }
  }
};
</script>
