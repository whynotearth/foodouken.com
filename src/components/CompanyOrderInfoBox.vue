<template>
  <div class="grid grid-flow-col mx-4">
    <OrderInfoBoxITem
      :orderInfo="{
        name: 'Orders Today',
        total: 367
      }"
    />
    <OrderInfoBoxITem
      :orderInfo="{
        name: 'Ordered Today',
        total: '$ 142'
      }"
      classes="border-l border-r order-info-middle-item--border-color mx-2 px-2"
    />
    <OrderInfoBoxITem
      :orderInfo="{
        name: 'Page Views',
        total: 76
      }"
    />
  </div>
</template>

<script>
import OrderInfoBoxITem from './CompanyOrderInfoBoxItem';

export default {
  name: 'CompanyOrderInfoBox',
  components: { OrderInfoBoxITem }
};
</script>

<style scoped>
/deep/ .order-info-middle-item--border-color {
  border-color: rgba(255, 255, 255, 0.12) !important;
}
</style>
