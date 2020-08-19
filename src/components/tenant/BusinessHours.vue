<template>
  <div>
    <div class="-my-4">
      <div
        class="cursor-pointer"
        v-for="(day, index) in businessHours"
        :key="index"
        @click="dayClicked(index)"
      >
        <div
          class="flex justify-between w-full border-b border-white border-opacity-12 py-4 px-6"
        >
          <div class="w-full flex">
            <div class="w-1/4">
              <h6 class="tg-body-mobile capitalize text-white text-opacity-84">
                {{ day.dayOfWeek }}
              </h6>
            </div>
            <div class="pl-6">
              <h6 class="tg-body-mobile text-white text-opacity-54">
                <span v-if="day.isClosed">Closed</span>
                <span v-else
                  >{{ day.openingTime | timeFormat }} -
                  {{ day.closingTime | timeFormat }}</span
                >
              </h6>
            </div>
          </div>
          <div class="w-auto text-right">
            <span class="text-lg text-white text-opacity-54">
              <img class="h-6 w-6" alt="arrow-forward" :src="arrowForward" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <BusinessHoursModal
      v-if="selectedIndex >= 0"
      @closeModal="closeModal"
      :selectedDay.sync="businessHours[selectedIndex]"
      :isSignUpFlow="isSignUpFlow"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { timeFormat } from '@/helpers.js';
import BusinessHoursModal from './BusinessHoursModal';
import arrowForward from '@/assets/arrow-forward.png';

export default {
  name: 'BusinessHours',
  components: {
    BusinessHoursModal
  },
  props: {
    isSignUpFlow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      selectedIndex: null,
      arrowForward
    };
  },
  methods: {
    ...mapMutations('tenant', ['updateBusinessHours']),
    dayClicked(index) {
      this.selectedIndex = index;
    },
    closeModal() {
      this.selectedIndex = null;
    }
  },
  computed: {
    ...mapGetters('tenant', ['getBusinessHours']),
    businessHours: {
      get() {
        return this.getBusinessHours;
      },
      set(value) {
        this.updateBusinessHours(value);
      }
    }
  },
  filters: {
    timeFormat
  }
};
</script>
