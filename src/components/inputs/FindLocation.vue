<template>
  <div
    class="flex justify-center items-center fixed w-screen h-screen top-0 left-0 z-50 bg-black bg-opacity-38"
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
      <div v-else-if="key === 'user-did-not-give-permission'">
        <h5 class="tg-mobile-h3 mb-4">Oops!</h5>
        <h6 class="tg-body-mobile bg-surface text-white text-opacity-54">
          You need to enable location sharing to use Foodouken. <br />
          Visit your browser settings.
        </h6>
        <div class="mt-8 tg-color-label-mobile flex justify-end">
          <Button
            class="text-white text-opacity-54 tg-color-label-mobile rounded-full shadow-6dp"
            :isRipple="false"
            padding="px-6 py-3"
            title="Find Out How"
            target="_blank"
            :href="'https://docs.buddypunch.com/en/articles/919258-how-to-enable-location-services-for-chrome-safari-and-android-ios-devices-gps-setting'"
            @clicked="onCancel"
          />
        </div>
      </div>
      <div v-else-if="key === 'unable-to-retrive-address'" class="">
        <h5 class="tg-mobile-h3 mb-4">Oops!</h5>
        <h6 class="tg-body-mobile bg-surface text-white text-opacity-54">
          There was a problem finding you. <br />
          Please enter address manually.
        </h6>
        <div class="mt-8 tg-color-label-mobile flex justify-end">
          <Button
            class="text-white text-opacity-54 tg-color-label-mobile rounded-full"
            :isRipple="false"
            padding="px-6 py-3"
            title="Enter Address Manually"
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
          this.key = 'user-did-not-give-permission';
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
        .post(
          `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.VUE_APP_MAPS_API_KEY}`,
          {
            key: process.env.VUE_APP_MAPS_API_KEY,
            considerIp: true
          }
        )
        .then(response => {
          if (response.data && response.data.location) {
            const { lat, lng } = response.data.location;
            this.onSuccess(lat, lng);
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
