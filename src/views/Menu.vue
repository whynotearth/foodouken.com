<template>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: 'Menu',
  created() {
    this.$store
      .dispatch('tenant/userOwnsTenant', this.$route.params.tenantSlug)
      .then(result => {
        if (result) {
          this.$router.push({ name: 'MenuCategoryList' });
        } else {
          this.$router.push({ name: 'Account' });
          alert('You do not have permission to access this tenant!');
        }
      })
      .catch(error => {
        this.$router.push({ name: 'Account' });
        throw new Error(error);
      });
  }
};
</script>
