<template>
<transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
  >
    <div
      class="flex justify-center items-center fixed w-screen h-screen top-0 left-0 z-50 bg-black bg-opacity-38"
    >
      <div class="bg-secondary shadow-24dp p-4 rounded-lg">
        <div>
          <h6 class="tg-body-mobile bg-surface text-white text-opacity-54">
            You already have an account <br />
            please login.
          </h6>
          <div class="mt-8 tg-color-label-mobile flex justify-end">
            <Button
              buttonBg="bg-secondary"
              class="mr-4 text-white text-opacity-54 tg-color-label-mobile"
              :isRipple="false"
              width="w-auto"
              padding="px-6 py-3"
              title="Cancel"
              @clicked="onCancel"
            />
            <Button
              class="rounded-full text-white text-opacity-84 tg-color-label-mobile"
              title="Login"
              width="w-auto"
              padding="px-6 py-3"
              @clicked="goToLogin"
            />
          </div>
        </div>
      </div>
    </div>
</transition>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
  name: 'DuplicateAccount',
  components: { Button },
  methods: {
    goToLogin() {
      this.$router.push({ name: 'LogIn' });
    },
    onCancel() {
       this.$emit('onCancel');
    }
  }
};
</script>
