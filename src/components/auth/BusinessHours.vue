<template>
  <div class="">
    <div>
      <div
        v-for="(day, index) in days"
        :key="index"
        @click="dayClicked(day, index)"
      >
        <div
          class="grid grid-cols-3 w-full border-b border-white border-opacity-12 py-4 px-6"
        >
          <div class="col-span-1">
            <h6 class="tg-body-mobile text-white text-opacity-84">{{ day }}</h6>
          </div>
          <div class="col-span-1 pl-2">
            <h6 class="tg-body-mobile text-white text-opacity-54">Closed</h6>
          </div>
          <div class="col-span-1 text-right">
            <span class="text-lg text-white text-opacity-54">></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BusinessHours',
  components: {},
  data() {
    return {};
  },
  methods: {
    dayClicked(e) {
      console.log(e);
    }
  },
  computed: {
    days() {
      return [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ];
    }
  }
};
</script>
