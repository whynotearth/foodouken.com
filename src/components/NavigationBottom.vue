<template>
  <div>
    <nav class="flex w-full fixed bottom-0 bg-transparent z-30">
      <div class="flex flex-auto">
        <div class="w-full">
          <div class="flex relative bg-primary">
            <ul
              class="max-w-4xl mx-auto wrapper flex-auto flex text-left justify-around items-center menu list-none tg-caption-mobile"
            >
              <li class="text-on-primary text-opacity-high link-item">
                <router-link
                  class="navigation--link block"
                  :to="{ name: 'TenantHome' }"
                  exact
                >
                  <IconHome class="m-auto mb-2 w-5 h-5" />
                  <span>Home</span>
                </router-link>
              </li>
              <li class="text-on-primary text-opacity-high link-item">
                <router-link
                  class="navigation--link block"
                  :to="{ name: 'ClientList' }"
                  exact
                >
                  <IconSearch class="m-auto mb-2 w-5 h-5" />
                  <span>Discover</span>
                </router-link>
              </li>

              <li class="text-on-primary text-opacity-high link-item z-30">
                <a
                  tabindex="0"
                  class="flex items-center cursor-pointer"
                  @click="isOpenDrawerUploadUpdate(true)"
                >
                  <div
                    class="-mt-8 h-16 w-16 rounded-full flex items-center justify-center mx-auto bg-secondary 
                    shadow-8dp"
                  >
                    <IconCameraPlus
                      class="m-auto fill-current text-on-secondary"
                    />
                  </div>
                </a>
              </li>

              <li class="text-on-primary text-opacity-high link-item">
                <router-link
                  class="navigation--link block"
                  :to="{ name: 'TenantPmuSetup' }"
                  exact
                >
                  <IconShoppingCart class="m-auto mb-2 w-5 h-5" />
                  <span>Cart</span>
                </router-link>
              </li>

              <li class="text-on-primary text-opacity-high link-item">
                <router-link
                  class="navigation--link block"
                  :to="{ name: 'MyAccount' }"
                  exact
                >
                  <IconUserCircle class="m-auto mb-2 w-5 h-5" />
                  <span>Account</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import IconCameraPlus from '@/assets/camera-plus.svg';
import IconHome from '@/assets/home.svg';
import IconSearch from '@/assets/search.svg';
import IconUserCircle from '@/assets/person-circle.svg';
import IconShoppingCart from '@/assets/shopping-cart.svg';
// import DrawerUpload from '@/components/DrawerUpload';
// import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NavigationBottom',
  data: () => ({
    isOpenDrawerUpload: false
  }),
  components: {
    // DrawerUpload,
    IconHome,
    IconCameraPlus,
    IconSearch,
    IconUserCircle,
    IconShoppingCart
  }
  // methods: {
  //   ...mapActions('uploader', ['isOpenDrawerUploadUpdate'])
  // },
  // computed: {
  //   ...mapGetters('uploader', ['isOpenDrawerUploadGet'])
  // }
};
</script>

<style scoped>
.wrapper {
  padding: 6px 0;
}

.navigation--link {
  @apply opacity-medium;
}

.navigation--link svg path {
  fill: #fff;
  fill-opacity: 0.54;
}

.router-link-active {
  @apply opacity-100;
}

.router-link-active svg path {
  @apply opacity-100;

  fill: #fff;
  fill-opacity: 1;
}
.link-item {
  min-width: 64px;
  @apply text-center;
}
</style>
