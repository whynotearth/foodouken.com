<template>
  <div class="mx-auto">
    <BaseAppBarHeader title="Bagels & Bread" :toLink="{ name: 'MenuItemList' }">
      <template #menu>
        <div class="flex-grow inline-block text-right">
          <router-link :to="{ name: 'MenuItemsAdd' }" class="relative">
            <NewItemIcon class="float-right w-5 h-5 cursor-pointer" />
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
  }
};
</script>
