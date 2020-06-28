<template>
  <div class="example-page">
    <div class="flex items-center tg-h3-mobile">
      <smooth-picker
        class="w-full mx-4"
        ref="timePickerHour"
        :data="hours"
        :change="dataChange"
        id="timePickerHour"
        :key="timePickerHour"
        @hook:mounted="wheelEvent('timePickerHour', 'hours')"
        @hook:beforeDestroy="removeWheelEvent('timePickerHour')"
      />
      <span class="font-bold"> : </span>
      <smooth-picker
        class="w-full mx-4"
        ref="timePickerMin"
        :data="mins"
        :change="dataChange"
        id="timePickerMin"
        :key="timePickerMin"
        @hook:mounted="wheelEvent('timePickerMin', 'mins')"
        @hook:beforeDestroy="removeWheelEvent('timePickerMin')"
      />
      <smooth-picker
        class="w-full mx-4"
        ref="timePickerTime"
        :data="time"
        :change="dataChange"
        id="timePickerTime"
        :key="timePickerTime"
        @hook:mounted="wheelEvent('timePickerTime', 'time')"
        @hook:beforeDestroy="removeWheelEvent('timePickerTime')"
      />
    </div>
  </div>
</template>

<script>
import { timeFormat, extractTimeFrom24H } from '@/helpers.js';

export default {
  name: 'TimePicker',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      hours: [
        {
          currentIndex: 7,
          list: this.hoursArr
        }
      ],
      mins: [
        {
          currentIndex: 0,
          list: this.minsArr
        }
      ],
      time: [
        {
          currentIndex: 0,
          list: ['AM', 'PM']
        }
      ],
      timePickerHour: this.randomId(),
      timePickerMin: this.randomId(),
      timePickerTime: this.randomId()
    };
  },
  created() {
    this.hours[0].list = this.setHours();
    this.mins[0].list = this.setMins();

    const { hour: getHour, min: getMin, postfix } = this.extractTimeFrom24H(
      this.value
    );

    this.hours[0].currentIndex = this.hours[0].list.findIndex(
      hour => hour === String(getHour)
    );
    this.mins[0].currentIndex = this.mins[0].list.findIndex(
      min => min === String(getMin)
    );
    this.time[0].currentIndex = this.time[0].list.findIndex(t => t === postfix);
  },
  methods: {
    setTimeToModel() {
      const hourPicker =
        this.$refs.timePickerHour &&
        this.$refs.timePickerHour.getCurrentIndexList();
      const minPicker =
        this.$refs.timePickerMin &&
        this.$refs.timePickerMin.getCurrentIndexList();
      const timePicker =
        this.$refs.timePickerTime &&
        this.$refs.timePickerTime.getCurrentIndexList();

      const hour = this.hours[0].list[hourPicker];
      const min = this.mins[0].list[minPicker];
      const postfix = this.time[0].list[timePicker];

      if (hour && min && postfix) {
        const time = `${hour}:${min} ${postfix}`;

        return this.timeFormat(time, '24h');
      }
    },
    dataChange() {
      const time = this.setTimeToModel();
      if (time) {
        this.$emit('change', time);
      }
    },
    setHours() {
      const hoursArr = [];
      for (let i = 1; i <= 12; i++) {
        hoursArr.push(i < 10 ? `0${i}` : `${i}`);
      }
      return hoursArr;
    },
    setMins() {
      const minsArr = [];
      for (let i = 0; i < 60; i += 5) {
        minsArr.push(i < 10 ? `0${i}` : `${i}`);
      }
      return minsArr;
    },
    randomId() {
      return Math.random()
        .toString(36)
        .substr(2, 9);
    },
    wheelEvent(id, arr) {
      document.getElementById(id).addEventListener('wheel', e => {
        let index = this[arr][0].currentIndex;
        const listLength = this[arr][0].list.length;

        if (e.deltaY < 0) {
          index = index <= 0 ? 0 : index - 1;
        } else if (e.deltaY > 0) {
          index = index >= listLength - 1 ? listLength - 1 : index + 1;
        }

        this[arr][0].currentIndex = index;
        this[id] = this.randomId();
      });
    },
    timeFormat,
    extractTimeFrom24H,
    removeWheelEvent(id) {
      if (document.getElementById(id)) {
        document
          .getElementById(id)
          .removeEventListener('wheel', this.dataChange());
      }
    }
  }
};
</script>

<style scoped>
/deep/ .smooth-picker {
  background-color: transparent;
  font-size: inherit;
}

/deep/ .smooth-picker .smooth-middle,
/deep/ .smooth-picker .smooth-top,
/deep/ .smooth-picker .smooth-bottom {
  @apply cursor-pointer;
}

/deep/ .smooth-picker .smooth-handle-layer .smooth-bottom,
/deep/ .smooth-picker .smooth-handle-layer .smooth-top {
  background: transparent;
  border-bottom: none;
  border-top: none;
}

/deep/ .smooth-picker .smooth-item {
  color: white !important;
  opacity: 0.38 !important;
}

/deep/ .smooth-picker .smooth-item-selected {
  color: white !important;
  opacity: 0.84 !important;
}

/deep/ .smooth-picker .smooth-middle {
  border-width: 0.01rem 0 0.01rem 0 !important;
  border-color: rgb(14, 158, 194) !important;
  border-style: solid !important;
}
</style>
