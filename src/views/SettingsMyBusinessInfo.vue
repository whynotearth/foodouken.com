<template>
  <div>
    <BusinessInfo /><br />
    <div class="px-4 mb-8 max-w-sm mx-auto">
      <Button
        title="Save"
        class="rounded-full"
        padding="p-2"
        :to="{ name: '' }"
      />
    </div>
  </div>
</template>

<script>
import BusinessInfo from '@/components/forms/BusinessInfo.vue';
import Button from '@/components/Button';
export default {
  name: 'BusinessInfoPage',
  components: { BusinessInfo, Button },
  computed: {
    appBar() {
      if (this.$route.meta.appBar) return this.$route.meta.appBar;
      return {
        title: 'Navbar',
        backRoute: { name: 'Home' }
      };
    }
  }
};
</script>
