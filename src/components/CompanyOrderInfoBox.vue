<template>
  <div class="grid grid-flow-col mx-4">
    <BaseCarousel
      :perPage='3'
      paginationActiveColor="#0E9EC2"
      paginationColor="#0E9EC2"
    >
      <template v-slot:slides>
        <OrderInfoBoxITem
          v-for="(stat, key) in stats"
          :key="key"
          :orderInfo="stat"
          :classes="[1, 4].includes(key) ? 'border-l border-r order-info-middle-item--border-color mx-2 px-2' : ''"
        />
      </template>
    </BaseCarousel>
  </div>
</template>

<script>
import BaseCarousel from './BaseCarousel';
import OrderInfoBoxITem from './CompanyOrderInfoBoxItem';

export default {
  name: 'CompanyOrderInfoBox',
  components: { BaseCarousel, OrderInfoBoxITem },
  data() {
    return {
      stats: [
        {
          name: 'Orders Today',
          total: 367
        },
        {
          name: 'Ordered Today',
          total: '$ 142'
        },
        {
          name: 'Page Views',
          total: 76
        },
        {
          name: 'Orders Today',
          total: 367
        },
        {
          name: 'Ordered Today',
          total: '$ 142'
        },
        {
          name: 'Page Views',
          total: 76
        }
      ]
    };
  }
};
</script>

<style scoped>
/deep/ .order-info-middle-item--border-color {
  border-color: rgba(255, 255, 255, 0.12) !important;
}
</style>
