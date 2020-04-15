<template>
  <div
    class="max-w-sm m-auto bg-footer shadow-md mb-4 flex items-center sticky lg:relative inset-x-0 top-0 z-10"
  >
    <div>
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
        <text
          x="50%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          class="text-white text-sm fill-current stroke-0"
        >
          {{ pageProgress }}
        </text>
      </svg>
    </div>
    <div class="flex-grow text-right leading-tight p-4">
      <h3 class="text-xl font-bold">{{ pageHeader(page) }}</h3>
      <h4 class="text-base text-inactive">
        {{ pageSubheader(page) | formatPageSubHeader }}
      </h4>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CheckoutStepper',
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
    },
    pageSubheader(pageNum) {
      return this.pageHeader(pageNum + 1);
    }
  },
  computed: {
    ...mapGetters('form', ['page']),
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

svg text {
  transform: rotate(90deg);
  transform-origin: 50% 50%;
}
</style>
