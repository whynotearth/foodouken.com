<template>
  <div class="text-white font-bold text-2xl bg-primary sticky top-0">
    <div class="max-w-screen-xxl flex flex-row py-2 px-4 md:px-8 m-auto">
      <div
        ref="navbar-menu-btn"
        v-on:click="onMenuClick"
        id="navbar-menu-btn"
        class="text-center"
      >
        Menu
      </div>
      <div class="w-full text-center">Bang Bang Bakery</div>
      <div class="text-center">Cart</div>
    </div>
    <div
      class="sidemenu"
      :class="showResponsiveSidebar ? 'open' : ''"
      v-closable="{
        exclude: ['navbar-menu-btn'],
        handler: 'onSidebarClose'
      }"
    >
      <div class="brand-highlight">
        <div class="logo-container">
          <img src="../assets/logo.png" alt="logo" class="logo" />
        </div>
        <h2 class="brand-name">
          Bang Bang Bakery-Cafe
        </h2>
      </div>
      <ul id="items-container" class="items-container">
        <li
          class="item"
          v-for="(category, idx) in categories"
          :key="category.name"
          :class="idx == currCategory ? 'hl' : ''"
          v-on:click="changeCurrentCategory(idx)"
        >
          {{ category.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueClosable from 'vue-closable';
Vue.use(VueClosable);

export default {
  data: function() {
    return {
      showResponsiveSidebar: false,
      categories: [
        { name: 'Cakes & Cookies' },
        { name: 'Bagels & Breads' },
        { name: 'Brunch & Lunch' },
        { name: 'Cream Cheese Bagels' },
        { name: 'Coffee & Tea (Hot)' },
        { name: 'Other Drinks' }
      ],
      currCategory: 0
    };
  },
  methods: {
    onMenuClick: function() {
      this.showResponsiveSidebar = true;
    },
    onSidebarClose: function() {
      this.showResponsiveSidebar = false;
    },
    changeCurrentCategory: function(catIdx) {
      this.currCategory = catIdx;
      this.showResponsiveSidebar = false;
    }
  }
};
</script>

<style>
.sidemenu {
  top: 0;
  position: absolute;
  background: #295157;
  width: 20%;
  height: 100vh;
  transform: translateX(-100%);
  transition: right 0.3s ease;
  transition: all 0.2s ease-in-out;
  z-index: 500;
}

.open {
  transform: translateX(0px);
}

.sidemenu .brand-highlight {
  margin: 16px 0 0 0;
  border-bottom: 1px solid #60787e;
  padding: 0 0 20px 0;
}

.sidemenu .brand-highlight .logo-container {
  width: 48px;
  margin: 0 auto 16px auto;
}

.sidemenu .brand-highlight .logo-container .logo {
  width: 100%;
}

.sidemenu .brand-highlight .brand-name {
  text-align: center;
}

.sidemenu .items-container {
  padding: 20px;
  overflow: scroll;
  height: 100%;
}

.sidemenu .items-container::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
.sidemenu .items-container::-webkit-scrollbar-thumb {
  background: #ff0000;
}

.sidemenu .items-container .item {
  margin: 0 0 10px 0;
  padding: 8px;
}

.sidemenu .items-container .hl {
  background: #437784;
  border-radius: 4px;
}

@media (max-width: 1600px) {
  .sidemenu {
    width: 25%;
  }
}

@media (max-width: 900px) {
  .sidemenu {
    width: 80%;
  }
}

@media (max-width: 400px) {
  .sidemenu .brand-highlight .brand-name {
    font-size: 1.2rem;
  }

  .sidemenu .items-container .item {
    font-size: 0.9rem;
  }
}
</style>
