<template>
  <LayoutFixedScrollable>
    <template #header>
      <BaseAppBarHeader title="Foodouken" to-link="/" />
      <router-link
        to="/settings"
        class="absolute top-0 right-0 p-4 md:px-6 text-sm z-10"
      >
        <img
          src="https://res.cloudinary.com/whynotearth/image/upload/v1588775654/Volkswagen/cms/wheel_2_prifka.svg"
        />
      </router-link>
    </template>
    <template #content>
      <div class="container mx-auto p-4">
        <div class="min-h-full relative bg-background">
          <CompanyCard />
        </div>
      </div>
      <hr />
      <div class="container mx-auto px-4 py-8">
        <div class="pb-8">
          <h2 class="tg-h2-mobile text-button">Upcoming</h2>
        </div>
        <div>
          <ProductTicket v-for="n in 3" :key="n" />
        </div>
        <div class="pt-4 px-2">
          <div class="flex justify-between tg-body-mobile em-high">
            <span>View all upcoming orders</span>
            <span>></span>
          </div>
        </div>
      </div>
      <hr />
    </template>
  </LayoutFixedScrollable>
</template>

<script>
import LayoutFixedScrollable from '@/components/LayoutFixedScrollable';
import BaseAppBarHeader from '@/components/BaseAppBarHeader';
import CompanyCard from '@/components/BaseCompanyCard';
import ProductTicket from '@/components/ProductTicketCard';

export default {
  name: 'Dashboard',
  components: {
    LayoutFixedScrollable,
    BaseAppBarHeader,
    CompanyCard,
    ProductTicket
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
