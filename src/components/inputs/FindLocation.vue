<template>
  <div
    class="flex justify-center items-center fixed w-screen h-screen top-0 left-0 z-50"
    v-if="openModal"
  >
    <div class="bg-secondary shadow-24dp p-4 rounded-lg">
      <div v-if="key === 'ask-user-permission'">
        <h6 class="tg-body-mobile bg-surface text-white text-opacity-54">
          Foodouken uses your location to get your <br />
          favorite dishes straight to you.
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
            title="Allow"
            width="w-auto"
            padding="px-6 py-3"
            @clicked="getLocation"
          />
        </div>
      </div>
      <div v-else-if="key === 'user-not-allowed'">
        <h6 class="tg-body-mobile bg-surface text-white text-opacity-54">
          User not allowed go browser settings
        </h6>
        <div class="mt-8 tg-color-label-mobile flex justify-end">
          <Button
            buttonBg="bg-secondary"
            class="text-white text-opacity-54 tg-color-label-mobile"
            :isRipple="false"
            width="w-auto"
            padding="px-6 py-3"
            title="Close"
            @clicked="onCancel"
          />
        </div>
      </div>
      <div v-else-if="key === 'unable-to-retrive-address'" class="">
        <h6 class="tg-body-mobile bg-surface text-white text-opacity-54">
          Sometimes google can crush too.
          <br />
          We couldn't get your address.
          <br />
          Please fill manual address.
        </h6>
        <div class="mt-8 tg-color-label-mobile flex justify-end">
          <Button
            buttonBg="bg-secondary"
            class="text-white text-opacity-54 tg-color-label-mobile"
            :isRipple="false"
            width="w-auto"
            padding="px-6 py-3"
            title="Close"
            @clicked="onCancel"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Button from '@/components/Button.vue';
export default {
  name: 'FindLocation',
  model: {
    prop: 'value',
    event: 'change'
  },
  components: { Button },
  data() {
    return {
      geoOptions: {
        timeout: 5 * 1000
      },
      key: 'ask-user-permission',
      openModal: true
    };
  },
  methods: {
    geoSuccess(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.onSuccess(latitude, longitude);
    },
    geoError(error) {
      switch (error.code) {
        case 1: //   1: permission denied
          this.key = 'user-not-allowed';
          break;
        case 0: //   0: unknown error
        case 2: //   2: position unavailable (error response from location provider)
        case 3: //   3: timed out
        default:
          this.useLocationProvider();
          break;
      }
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.geoSuccess,
          this.geoError,
          this.geoOptions
        );
      } else {
        this.useLocationProvider();
      }
    },
    useLocationProvider() {
      axios
        .get('http://ip-api.com/json')
        .then(response => {
          if (response.data && response.data.lat && response.data.lon) {
            const { lat, lon } = response.data;
            this.onSuccess(lat, lon);
          } else {
            throw new Error('Unable to retrive location');
          }
        })
        .catch(() => {
          this.key = 'unable-to-retrive-address';
        });
    },
    onCancel() {
      this.$emit('onCancel');
    },
    async onSuccess(lat, long) {
      await this.$emit('change', {
        latitude: lat,
        longitude: long
      });
      this.openModal = false;
    }
  }
};
</script>
