<template>
  <div class="example-page">
    <div class="flex items-center">
      <smooth-picker
        class="w-full mx-4"
        ref="timePickerHour"
        :data="hours"
        :change="dataChange"
      />
      <span class="font-bold"> : </span>
      <smooth-picker
        class="w-full mx-4"
        ref="timePickerMin"
        :data="mins"
        :change="dataChange"
      />
      <smooth-picker
        class="w-full mx-4"
        ref="timePickerTime"
        :data="time"
        :change="dataChange"
      />
    </div>
  </div>
</template>

<script>
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
    const hoursArr = [];
    for (let i = 1; i <= 12; i++) {
      hoursArr.push(i < 10 ? `0${i}` : i);
    }
    const minsArr = [];
    for (let i = 0; i < 60; i += 5) {
      minsArr.push(i < 10 ? `0${i}` : i);
    }
    return {
      hours: [
        {
          currentIndex: 7,
          list: hoursArr,
          className: 'tg-h3-mobile'
        }
      ],
      mins: [
        {
          currentIndex: 0,
          list: minsArr,
          className: 'tg-h3-mobile'
        }
      ],
      time: [
        {
          currentIndex: 0,
          list: ['AM', 'PM'],
          className: 'tg-h3-mobile'
        }
      ]
    };
  },
  created() {
    const getTime = [...this.value.split(' ')];
    const hourMin = [...getTime[0].split(':')];
    this.hours[0].currentIndex = this.hours[0].list.findIndex(
      hour => hour === hourMin[0]
    );
    this.mins[0].currentIndex = this.mins[0].list.findIndex(
      min => min === hourMin[1]
    );
    this.time[0].currentIndex = this.time[0].list.findIndex(
      t => t === getTime[1]
    );
  },
  methods: {
    setTimeToModel() {
      const hourPicker = this.$refs.timePickerHour.getCurrentIndexList();
      const minPicker = this.$refs.timePickerMin.getCurrentIndexList();
      const timePicker = this.$refs.timePickerTime.getCurrentIndexList();
      const hour = this.hours[0].list[hourPicker];
      const min = this.mins[0].list[minPicker];
      const time = this.time[0].list[timePicker];
      return `${hour}:${min} ${time}`;
    },
    dataChange() {
      const time = this.setTimeToModel();
      this.$emit('change', time);
    }
  }
};
</script>

<style scoped>
/deep/ .smooth-picker {
  background-color: transparent;
  font-size: inherit;
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
