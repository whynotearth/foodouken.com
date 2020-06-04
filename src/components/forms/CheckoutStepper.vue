<template>
  <div
    class="max-w-sm m-auto bg-footer shadow-md mb-4 flex items-center sticky lg:relative inset-x-0 top-0 z-10"
  >
    <div class="relative">
      <svg class="w-20 h-20 text-inactive stroke-current">
        <circle :cx="centerX" :cy="centerY" :r="radius" fill="transparent" />
        <circle
          class="text-button stroke-current progress-bar"
          :cx="centerX"
          :cy="centerY"
          :r="radius"
          fill="transparent"
          :stroke-dasharray="strokeDashArray"
        />
      </svg>
      <div
        class="progress-ring-inner text-white text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {{ pageProgress }}
      </div>
    </div>
    <div class="flex-grow text-right leading-tight p-4">
      <h3 class="text-xl text-white text-opacity-84 font-bold">
        {{ pageHeader(page) }}
      </h3>
      <h4 class="text-base text-white text-opacity-54">
        {{ pageSubheader(page) | formatPageSubHeader }}
      </h4>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'CheckoutStepper',
  props: {
    navigation: {
      type: Array
    },
    pageS: {
      type: Number
    }
  },
  data() {
    return {
      pageCount: 5,
      radius: 25,
      centerX: 40,
      centerY: 40
    };
  },
  methods: {
    pageHeader(pageNum) {
      if (this.navigation) {
        return this.navigation[pageNum - 1].name;
      } else {
        switch (pageNum) {
          case 1: {
            return 'Your Info';
          }
          case 2: {
            return 'Your Address';
          }
          case 3: {
            return 'Delivery Time';
          }
          case 4: {
            return 'Payment Method';
          }
          case 5: {
            return 'Review Your Order';
          }
          case 6: {
            return '';
          }
          default: {
            return '';
          }
        }
      }
      
    },
    pageSubheader(pageNum) {
      return this.navigation[pageNum] ? this.pageHeader(pageNum + 1) : '';
    }
  },
  computed: {
    ...mapGetters('form', [{
      pageC: 'page'
    }]),
    page() {
      return this.pageS ? this.pageS : this.pageC;
    },
    circumference() {
      return 2 * Math.PI * this.radius;
    },
    percentageProgress() {
      const pageProgressPercentage = this.page / this.pageCount;
      return this.circumference * pageProgressPercentage;
    },
    strokeDashArray() {
      return `${this.percentageProgress} ${this.circumference}`;
    },
    pageProgress() {
      return `${this.page} of ${this.pageCount}`;
    }
  },
  filters: {
    formatPageSubHeader(subheader) {
      return subheader ? `Next: ${subheader}` : '';
    }
  }
};
</script>

<style scoped>
svg {
  transform: rotate(-90deg);
  stroke-width: 0.25rem;
}

svg .progress-bar {
  transition: stroke-dasharray 0.5s ease-in-out;
}
</style>
