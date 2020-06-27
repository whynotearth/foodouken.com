<template>
  <div>
    <transition name="fade">
      <router-view class="container mx-auto min-h-screen" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TenantLayout'
};
</script>
