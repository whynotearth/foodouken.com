<template>
  <div class="mx-auto">
    <BaseAppBarHeader
      title="Bagels & Bread"
      :toLink="{ name: 'MenuItemList' }"
    />
    <transition name="fade" mode="out-in">
      <router-view class="container mx-auto"></router-view>
    </transition>
  </div>
</template>

<script>
import BaseAppBarHeader from '@/components/BaseAppBarHeader';
export default {
  name: 'Menu',
  components: {
    BaseAppBarHeader
  }
};
</script>
