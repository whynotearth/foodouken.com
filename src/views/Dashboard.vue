<template>
  <div class="text-white">
    <div>
      <BaseAppBarHeader title="Foodouken" to-link="/" />
      <router-link
        to="/settings"
        style="height: 65px;"
        class="flex justfiy-center items-center absolute top-0 right-0 p-4 md:px-6 text-sm z-10"
      >
        <img
          src="https://res.cloudinary.com/whynotearth/image/upload/v1588775654/Volkswagen/cms/wheel_2_prifka.svg"
        />
      </router-link>
    </div>
    <div class="">
      <div class="">
        <div class="container max-w-screen-md mx-auto p-4">
          <div class="min-h-full relative bg-background">
            <CompanyCard />
          </div>
        </div>
        <hr />
        <div class="container mx-auto max-w-screen-md">
          <div class="px-4 py-8">
            <div class="pb-8">
              <h2 class="tg-h2-mobile text-button">Upcoming</h2>
            </div>
            <div>
              <ProductTicket v-for="n in 3" :key="n" />
            </div>
            <div class="pt-4 px-2">
              <router-link :to="{ name: 'UpcomingOrders' }">
                <div
                  class="flex justify-between tg-body-mobile text-opacity-84"
                >
                  <span>View all upcoming orders</span>
                  <span>></span>
                </div>
              </router-link>
            </div>
          </div>
          <hr />
          <div class="px-4 py-8">
            <div class="pb-8">
              <h2 class="tg-h2-mobile text-button">In Progress</h2>
            </div>
            <div>
              <DeliveryTicket v-for="n in 3" :key="n" />
            </div>
            <div class="pt-4 px-2">
              <router-link :to="{ name: 'InProgress' }">
                <div
                  class="flex justify-between tg-body-mobile text-opacity-84"
                >
                  <span>View all orders in progress</span>
                  <span>></span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseAppBarHeader from '@/components/BaseAppBarHeader';
import CompanyCard from '@/components/BaseCompanyCard';
import ProductTicket from '@/components/ProductTicketCard';
import DeliveryTicket from '@/components/DeliveryTicketCard';

export default {
  name: 'Dashboard',
  components: {
    BaseAppBarHeader,
    CompanyCard,
    ProductTicket,
    DeliveryTicket
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
hr {
  @apply opacity-12;
  @apply border-white;
}
</style>
