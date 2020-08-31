<template>
  <div
    class="mx-auto"
  >
    <BaseAppBarHeader
      v-if="appBar"
      :title="appBar.title"
      :toLink="appBar.backRoute"
      :icon="appBar.icon"
       v-bind:class="{'pt-8': isMobile}"
    >
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
  name: 'TenantLayout',
  components: {
    BaseAppBarHeader,
    NewItemIcon
  },
  data() {
    return {
      isMobile: process.env.VUE_APP_MOBILE === 'true'
    };
  },
  computed: {
    appBar() {
      return this.$route.meta.appBar;
    }
  }
};
</script>
