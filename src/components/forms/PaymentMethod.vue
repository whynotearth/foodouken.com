<template>
  <div class="select-none">
    <div class="w-full bg-secondary rounded-lg shadow mb-2">
      <RadioInput v-model="paymentMethod" value="Cash" class="p-5" />
      <hr class="border-gray-700" />
      <RadioInput
        v-model="paymentMethod"
        value="ABA Bank Transfer"
        class="p-5"
      />
    </div>
    <div class="w-full text-center my-4 flex sticky inset-x-0 bottom-0 z-10">
      <div
        class="bg-footer w-1/3 uppercase text-left text-sm font-semibold px-4 py-4"
        @click="decrementPage"
        v-if="page != 1"
      >
        ◄ Back
      </div>
      <div
        class="bg-button flex-grow uppercase text-right text-sm font-semibold px-4 py-4"
        @click="pageChange(5)"
      >
        Review and order ►
      </div>
    </div>
  </div>
</template>

<script>
import RadioInput from '@/components/inputs/RadioInput';
import calendar from '@/assets/calendar.png';
import down from '@/assets/down.png';
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'PaymentMethod',
  components: { RadioInput },
  data() {
    return {
      calendar: calendar,
      down: down
    };
  },
  methods: {
    ...mapMutations('form', ['pageChange', 'updatePaymentMethod']),
    decrementPage() {
      const pageToGo = this.page - 1;
      this.pageChange(pageToGo);
    }
  },
  computed: {
    ...mapGetters('form', ['getPaymentMethod', 'page']),
    paymentMethod: {
      get() {
        return this.getPaymentMethod;
      },
      set(value) {
        this.updatePaymentMethod(value);
      }
    }
  }
};
</script>

<style></style>
