<template>
  <div class="px-6">
    <div class="my-4">
      <h6 class="tg-body-mobile text-white text-opacity-54">Select your preferred notification method:</h6>
    </div>
    <div>
      <div class="my-8">
        <CheckBox v-model="notifications" :value="1">
          <template #label>
            <div class="tg-body-mobile">
              <span class="mx-1 text-white text-opacity-84">Text</span>
              <span class="mx-1 text-white text-opacity-54">(510-123-1234)</span>
            </div>
          </template>
        </CheckBox>
      </div>
      <div class="my-8">
        <CheckBox v-model="notifications" :value="2">
          <template #label>
            <div class="tg-body-mobile">
              <span class="mx-1 text-white text-opacity-84">Email</span>
              <span class="mx-1 text-white text-opacity-54">(email@email.com)</span>
            </div>
          </template>
        </CheckBox>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from '@/components/inputs/CheckBox';

export default {
  name: 'Notifications',
  components: { CheckBox },
  data() {
    return {
      notifications: []
    };
  }
};
</script>
