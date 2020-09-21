<template>
  <transition name="slide-down">
    <div
      class="fixed rounded-md bottom-0 left-0 right-0 mx-4 bg-footer text-white"
      v-if="showSnackBar"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import cookie from '@/utils/cookie';
export default {
  name: 'SnackBar',
  props: {
    showSnackBar: {
      type: Boolean,
      required: true
    }
  },
  data: function() {
    return {
      showSnackBar: false
    };
  },
  beforeMount() {
    var snackBarCookie = cookie.getCookie('snackBar');
    //if snackBarCookie === 1 that means user has seen the snackBar and dismissed it
    if (snackBarCookie == 1) {
      this.showSnackBar = false;
    } else {
      this.showSnackBar = true;
    }
  },
  methods: {
    setsnackBarCookie: function() {
      this.showSnackBar = false;
      //set cookie with name 'snackBar'. Set value to 1 which means true. Set expiration to 7 days.
      cookie.setCookie('snackBar', 1, 7);
    }
  }
};
</script>

<style scoped>
.slide-down-leave-active {
  animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.slide-down-leave /* .fade-leave-active below version 2.1.8 */ {
  animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@keyframes slide-out-bottom {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(1000px);
    opacity: 0;
  }
}
</style>
