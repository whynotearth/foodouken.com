<template>
  <div class="select-none">
    <div class="w-full bg-secondary rounded-lg shadow mb-2">
      <RadioInput
        v-model="option"
        value="Now"
        class="p-5"
        :disabled="!nowAvailable()"
      >
        <template #title>
          <span v-if="!nowAvailable()">
            Now (Closed)
          </span>
        </template>
      </RadioInput>
      <hr class="border-gray-700" />
      <RadioInput v-model="option" value="Later" class="p-5" />
    </div>
    <Dropdown
      v-if="option === 'Later'"
      :icon="calendar"
      v-model="day"
      :options="days"
      placeholder="Select day"
      class="mb-2"
    >
      <template #title="{ selectedOption }">
        <span v-if="selectedOption">
          {{ week[new Date(selectedOption).getDay()] }}
          {{ new Date(selectedOption).getDate() }}
        </span>
      </template>
      <template #option="{ option }">
        <span>
          {{ week[new Date(option).getDay()] }}
          {{ new Date(option).getDate() }}
        </span>
      </template>
    </Dropdown>
    <Dropdown
      v-if="option === 'Later' && day"
      :icon="clock"
      v-model="time"
      :options="timeSlots"
      placeholder="Select time"
      class="mb-2"
    >
      <template #title="{ selectedOption }">
        <span v-if="timeSlots.length === 0" class="text-gray-500">
          Store closed on this day
        </span>
        <span v-else-if="selectedOption">
          {{ millisecondToTime(selectedOption) }}
        </span>
      </template>
      <template #option="{ option }">
        <span>
          {{ millisecondToTime(option) }}
        </span>
      </template>
    </Dropdown>
    <CheckoutNavBar
      nextStepText="Payment method ►"
      @previousStep="decrementPage"
      @nextStep="submit"
      :hideNext="!(option === 'Now' || time)"
    />
  </div>
</template>

<script>
import RadioInput from '@/components/inputs/RadioInput';
import Dropdown from '@/components/Dropdown.vue';
import calendar from '@/assets/calendar.png';
import clock from '@/assets/clock.png';
import CheckoutNavBar from '@/components/forms/CheckoutNavBar.vue';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'DeliveryTime',
  components: { RadioInput, Dropdown, CheckoutNavBar },
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
      'updateDeliveryDateTime',
      'updateTotalTime',
      'pageChange'
    ]),
    millisecondToTime(duration) {
      let minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;

      return hours + ':' + minutes;
    },
    submit() {
      let d;
      if (this.option === 'Now') {
        d = Date.now() + 2700000;
        d = new Date(d);
      } else if (this.option === 'Later') {
        d = new Date(this.day + this.time);
      }
      this.updateTotalTime(d.toISOString());
      this.pageChange(4);
    },
    nowAvailable() {
      let d = new Date();
      let start = this.oh.days[d.getDay()].start_time;
      let startHours = Math.floor(start / 100) * 3600000;
      let startMinutes = (start % 100) * 60000;
      let startTime = startHours + startMinutes;
      let end = this.oh.days[d.getDay()].end_time;
      let endHours = (Math.floor(end / 100) - 1) * 3600000;
      let endMinutes = (end % 100) * 60000;
      let endTime = endHours + endMinutes;
      d.setHours(0, 0, 0, 0);
      if (
        this.oh.days[d.getDay()].is_closed ||
        startTime > Date.now() - d.getTime() ||
        endTime < Date.now() - d.getTime()
      ) {
        this.option = 'Later';
        return false;
      }
      return true;
    },
    decrementPage() {
      const pageToGo = this.page - 1;
      this.pageChange(pageToGo);
    }
  },
  computed: {
    ...mapGetters({ oh: 'shop/getOpeningHours' }),
    ...mapGetters('form', [
      'getDeliveryDateOption',
      'getDeliveryDateDay',
      'getDeliveryDateTime',
      'page'
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
        this.time = '';
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
    },
    timeSlots() {
      let time = [];
      if (this.day) {
        let d = new Date(this.day);
        let start = this.oh.days[d.getDay()].start_time;
        let end = this.oh.days[d.getDay()].end_time;
        let startHours = Math.floor(start / 100) * 3600000;
        let endHours = (Math.floor(end / 100) - 1) * 3600000;
        let startMinutes = (start % 100) * 60000;
        let endMinutes = (end % 100) * 60000;
        let startTime = startHours + startMinutes + 2700000; // Store will deliver after 45 mins of store opening
        let endTime = endHours + endMinutes;
        d.setHours(0, 0, 0, 0);
        if (this.oh.days[d.getDay()].is_closed) {
          return time;
        }
        if (Date.now() >= d.getTime() + startTime) {
          startTime = Date.now() - d + 2700000;
        }
        for (let i = startTime; i <= endTime; i += 900000) {
          time.push(i);
        }
      }
      return time;
    },
    days() {
      let d = new Date();
      d.setHours(0, 0, 0, 0);
      d = d.getTime();
      let days = [];
      for (let i = 0; i < 7; i++) {
        let a = d + i * 86400000;
        days.push(a);
      }
      return days;
    }
  }
};
</script>
