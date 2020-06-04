<template>
  <div>
    <div class="-my-4">
      <div
        v-for="(day, index) in businessHours"
        :key="index"
        @click="dayClicked(index)"
      >
        <div
          class="flex justify-between w-full border-b border-white border-opacity-12 py-4 px-6"
        >
          <div class="w-full flex">
            <div class="w-1/4">
              <h6 class="tg-body-mobile text-white text-opacity-84">
                {{ day.dayName }}
              </h6>
            </div>
            <div class="pl-6">
              <h6 class="tg-body-mobile text-white text-opacity-54">
                {{
                  day.isClosed
                    ? 'Closed'
                    : `${day.openingTime} - ${day.closingTime}`
                }}
              </h6>
            </div>
          </div>
          <div class="w-auto text-right">
            <span class="text-lg text-white text-opacity-54">
              <img
                class="h-6 w-6"
                src="../../assets/arrow-forward.png"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
    <BusinessHoursModal
      v-if="selectedIndex >= 0"
      @closeModal="closeModal"
      :selectedDay.sync="businessHours[selectedIndex]"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  name: 'BusinessHours',
  components: {
    BusinessHoursModal: () => import('./BusinessHoursModal')
  },
  data() {
    return {
      selectedIndex: null
    };
  },
  methods: {
    ...mapMutations('auth', ['updateBusinessHours']),
    dayClicked(index) {
      this.selectedIndex = index;
    },
    closeModal() {
      this.selectedIndex = null;
    }
  },
  computed: {
    ...mapGetters('auth', ['getBusinessHours']),
    businessHours: {
      get() {
        return this.getBusinessHours;
      },
      set(value) {
        this.updateBusinessHours(value);
      }
    }
  }
};
</script>
