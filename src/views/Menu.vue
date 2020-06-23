<template>
  <div class="mx-auto">
    <BaseAppBarHeader :title="appBar.title" :toLink="appBar.backRoute">
      <template #menu v-if="appBar.newItem">
        <div class="flex-grow inline-block text-right">
          <router-link :to="appBar.newItem" class="relative">
            <NewItemIcon class="float-right w-5 h-5 my-auto cursor-pointer" />
          </router-link>
        </div>
      </template>
    </BaseAppBarHeader>
    <transition name="fade" mode="out-in">
      <router-view class="container mx-auto"></router-view>
    </transition>
  </div>
</template>

<script>
import BaseAppBarHeader from '@/components/BaseAppBarHeader';
import NewItemIcon from '@/assets/new_item.svg';

export default {
  name: 'Menu',
  components: {
    BaseAppBarHeader,
    NewItemIcon
  },
  computed: {
    appBar() {
      let route = this.$route,
        appBarData = {
          title: 'Navbar',
          backRoute: { name: 'Home' }
        };
      if (route.meta.appBar) appBarData = route.meta.appBar;
      return appBarData;
    }
  }
};
</script>
