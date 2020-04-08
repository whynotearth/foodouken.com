<template>
  <div class="max-w-sm m-auto bg-footer shadow-md mb-4">
    <div class="flex items-center p-2">
      <div class="">
        <a @click="decrementPage" v-if="page != 1">
          <img
            :src="left"
            alt="Back"
            class="pointer-events-none w-6 h-6"
            draggable="false"
          />
        </a>
      </div>
      <div class="flex-grow text-center">
        <h3 class="text-2xl font-bold">{{ pageHeader }}</h3>
      </div>
      <div class="text-right">
        <a @click="incrementPage" v-if="page != pageCount">
          <img
            :src="right"
            alt="Forward"
            class="pointer-events-none w-6 h-6"
            draggable="false"
          />
        </a>
      </div>
    </div>
    <div class="flex justify-center pb-4">
      <div v-for="pageNum in pageCount" :key="pageNum" class="rounded-full">
        <svg
          class="h-4 w-4 stroke-current fill-current"
          :class="[pageNum === page ? 'text-button' : 'text-inactive']"
        >
          <circle cx="8" cy="8" r="4" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import left from '@/assets/left.png';
import right from '@/assets/right.png';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'CheckoutStepper',
  data() {
    return {
      left,
      right,
      pageCount: 4
    };
  },
  methods: {
    ...mapMutations('form', ['pageChange']),
    incrementPage() {
      const pageToGo = this.page + 1;
      this.pageChange(pageToGo);
    },
    decrementPage() {
      const pageToGo = this.page - 1;
      this.pageChange(pageToGo);
    }
  },
  computed: {
    ...mapGetters('form', ['page']),
    pageHeader() {
      switch (this.page) {
        case 1: {
          return 'Customer Info';
        }
        case 2: {
          return 'Customer Address';
        }
        case 3: {
          return 'Delivery Time';
        }
        case 4: {
          return 'Payment Method';
        }
        default: {
          return '';
        }
      }
    }
  }
};
</script>
