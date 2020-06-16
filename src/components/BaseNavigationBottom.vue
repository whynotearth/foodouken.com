<template>
  <nav
    class="flex w-full relative bottom-0 bg-transparent z-100 shadow-inner-8dp"
    id="bottom-nav"
  >
    <div class="flex flex-auto">
      <div class=" bg-primary flex-1"></div>
      <div class="container container--border px-0">
        <div class="flex relative">
          <ul
            class="flex-auto flex justify-around text-left menu list-none bg-primary px-2 md:px-0"
          >
            <li class="text-white inline-block m-2 mb-1 tg-caption-mobile">
              <router-link
                :active-class="'router-active-link'"
                class="router-normal-link"
                :to="{ name: 'Home' }"
                exact
              >
                <HomeIcon class="m-auto" />
                Home
              </router-link>
            </li>
            <li class="text-white inline-block m-2 mb-1 tg-caption-mobile">
              <router-link
                :active-class="'router-active-link'"
                class="router-normal-link"
                :to="{ name: 'UpComing' }"
              >
                <BookingIcon class="m-auto" />
                Upcoming
              </router-link>
            </li>
            <li class="text-white inline-block m-2 mb-1 tg-caption-mobile">
              <router-link
                :active-class="'router-active-link'"
                class="router-normal-link"
                :to="{ name: 'InProgress' }"
              >
                <TimeIcon class="m-auto" />
                In progress
              </router-link>
            </li>
          </ul>
          <img class="h-14 m-auto" :src="BottomNavFrame" />
          <ul
            :class="{ opened: isOpen }"
            class="absolute toggle-menu list-none z-50"
          >
            <li
              class="absolute top-0 right-0 flex whitespace-no-wrap text-white text-opacity-84 tg-caption-mobile justify-end my-3"
            >
              <router-link
                :to="{ name: 'MenuCategoryList' }"
                class="flex items-center"
              >
                Edit Items
                <div
                  class="rounded-full h-10 w-10 flex items-center justify-center bg-button ml-2
                shadow-6dp"
                >
                  <CreateIcon class="m-auto" />
                </div>
              </router-link>
            </li>
            <li
              class="absolute top-0 right-0 flex whitespace-no-wrap text-white text-opacity-84 tg-caption-mobile justify-end my-2"
            >
              <router-link
                :to="{ name: 'MerchantOrder' }"
                class="flex items-center"
              >
                Add New Order
                <div
                  class="rounded-full h-10 w-10 flex items-center justify-center bg-button ml-2
                shadow-6dp"
                >
                  <ShoppingCartIcon class="m-auto" />
                </div>
              </router-link>
            </li>
          </ul>
          <div
            class="absolute flex content-center w-14 h-14 opacity-100 rounded-full cursor-pointer toggle-button bg-button shadow-6dp z-50"
            @click="toggleMenu()"
          >
            <AddIcon
              class="m-auto ease-in-out"
              :class="{ 'transform rotate-45': isOpen }"
            />
          </div>
          <div
            v-if="isOpen"
            class="fixed w-full h-full top-0 left-0 -z-1 bg-opacity-50 bg-black"
          ></div>
        </div>
      </div>
      <div class=" bg-primary flex-1"></div>
    </div>
  </nav>
</template>

<script>
import AddIcon from '@/assets/actions.svg';
import HomeIcon from '@/assets/home.svg';
import BookingIcon from '@/assets/booking.svg';
import ShoppingCartIcon from '@/assets/shopping-cart.svg';
import CreateIcon from '@/assets/create.svg';
import TimeIcon from '@/assets/time.svg';

import BottomNavFrame from '@/assets/bottom-nav-frame.png';
export default {
  name: 'NavigationBottom',
  components: {
    AddIcon,
    HomeIcon,
    BookingIcon,
    ShoppingCartIcon,
    CreateIcon,
    TimeIcon
  },
  data() {
    return {
      isOpen: false,
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      activeClass: {
        home: 'opacity-100',
        stats: 'opacity-100',
        blue: 'opacity-100',
        archive: 'opacity-100'
      },
      BottomNavFrame
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
.toggle-button {
  top: -30px;
  right: 16px;
}

.toggle-button:hover {
  background: #03b3f9;
  transition: background ease-in 0.6s;
}

.toggle-button:active {
  background: #fff;
  transition: background ease-in 0.6s;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.toggle-menu {
  top: -37px;
  right: 23px;
}

.ease-in-out {
  transition: all ease-in 0.2s;
}

ul.toggle-menu > li {
  transition: all 0.2s ease;
  color: transparent;
}

ul.toggle-menu.opened > li:nth-child(1) {
  transition-duration: 450ms;
  color: #fff;
  top: -70px;
}

ul.toggle-menu.opened > li:nth-child(2) {
  color: #fff;
  transition-duration: 450ms;
  top: -130px;
}

.router-normal-link {
  @apply opacity-54;
}

.router-normal-link svg path {
  fill: #fff;
  fill-opacity: 0.54;
}

.router-active-link {
  @apply text-button opacity-100;
}

.router-active-link svg path {
  @apply opacity-100;

  fill: #0e9ec2;
  fill-opacity: 1;
}

.container--border {
  @screen md {
    border-left: 24px solid;
    border-right: 24px solid;

    @apply border-primary;
  }
}
</style>
