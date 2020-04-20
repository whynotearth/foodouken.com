<template>
  <div class="w-full">
    <div class="w-full bg-secondary rounded-lg shadow mb-2">
      <RadioInput v-model="option" value="Use my location" class="p-5" />
      <hr class="border-gray-700" />
      <RadioInput
        v-model="option"
        value="Enter location manually"
        class="p-5"
      />
    </div>
    <div
      v-if="option === 'Use my location'"
      class="w-full bg-secondary rounded-lg shadow mb-2 p-5"
    >
      <iframe
        v-if="embedUrl.length > 0"
        class="w-full rounded border-none"
        frameborder="0"
        :src="embedUrl"
        allowfullscreen
      ></iframe>
      <p
        v-if="locationError.length > 0 && location.length === 0"
        class="text-red-600 cursor-pointer"
        @click="getCoordinates"
      >
        {{ locationError }} (retry)
      </p>
    </div>
    <div v-else>
      <div class="bg-secondary px-2 pt-4 pb-1 rounded-lg shadow">
        <material-input
          v-model="buildingName"
          type="text"
          label="Building Name"
          placeholder="Building Name"
        />
        <material-input
          v-model="$v.street.$model"
          type="text"
          label="Street Address"
          placeholder="Street name and number"
          :error="$v.street.$dirty && !$v.street.required"
        >
          <span
            v-if="$v.street.$dirty && !$v.street.required"
            class="text-xs text-red-600"
          >
            Street address is required
          </span>
        </material-input>
        <material-input
          v-model="$v.town.$model"
          type="text"
          label="City"
          placeholder="Town or City Area"
          :error="$v.town.$dirty && !$v.town.required"
        >
          <span
            v-if="$v.town.$dirty && !$v.town.required"
            class="text-xs text-red-600"
          >
            Town/City is required
          </span>
        </material-input>
        <material-input v-model="floor" type="text" label="Floor" />
        <material-input v-model="apartment" type="text" label="Apartment #" />
        <material-input v-model="parking" type="text" label="Where to park" />
      </div>
      <span
        class="text-sm text-red-600"
        v-if="$v.$invalid"
        v-show="submitError"
      >
        You are missing required fields, please fill out "Street Address" and
        "Town/City".
      </span>
    </div>
    <span class="text-red-600" v-if="registerError">
      {{ registerError }}
    </span>
    <CheckoutNavBar
      nextStepText="Set delivery time ►"
      @previousStep="decrementPage"
      @nextStep="submit"
    />
  </div>
</template>

<script>
import MaterialInput from '@/components/inputs/MaterialInput.vue';
import RadioInput from '@/components/inputs/RadioInput.vue';
import CheckoutNavBar from '@/components/forms/CheckoutNavBar.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'CustomerAddress',
  components: {
    MaterialInput,
    RadioInput,
    CheckoutNavBar
  },
  data() {
    return {
      submitError: false,
      locationError: '',
      registerError: '',
      embedUrl: ''
    };
  },
  validations: {
    street: {
      required
    },
    town: {
      required
    }
  },
  created() {
    if (this.option === 'Use my location') {
      this.getCoordinates();
    }
  },
  computed: {
    ...mapGetters('form', [
      'getTown',
      'getFloor',
      'getApartment',
      'getParking',
      'getBuildingName',
      'getStreet',
      'getAddressOption',
      'getGoogleLocation',
      'page'
    ]),
    option: {
      get() {
        return this.getAddressOption;
      },
      set(value) {
        this.updateAddressOption(value);
      }
    },
    town: {
      get() {
        return this.getTown;
      },
      set(value) {
        this.updateTown(value);
      }
    },
    floor: {
      get() {
        return this.getFloor;
      },
      set(value) {
        this.updateFloor(value);
      }
    },
    street: {
      get() {
        return this.getStreet;
      },
      set(value) {
        this.updateStreet(value);
      }
    },
    buildingName: {
      get() {
        return this.getBuildingName;
      },
      set(value) {
        this.updateBuildingName(value);
      }
    },
    parking: {
      get() {
        return this.getParking;
      },
      set(value) {
        this.updateParking(value);
      }
    },
    apartment: {
      get() {
        return this.getApartment;
      },
      set(value) {
        this.updateApartment(value);
      }
    },
    location: {
      get() {
        return this.getGoogleLocation;
      },
      set(value) {
        this.updateGoogleLocation(value);
      }
    }
  },
  methods: {
    ...mapActions('form', ['register']),
    ...mapMutations('form', [
      'updateTown',
      'updateFloor',
      'updateStreet',
      'updateBuildingName',
      'updateParking',
      'updateApartment',
      'updateAddressOption',
      'updateGoogleLocation',
      'pageChange'
    ]),
    submit() {
      if (this.option !== 'Use my location') {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitError = true;
          return false;
        }
      }
      this.register()
        .then(() => {
          this.pageChange(3);
        })
        .catch(error => {
          this.registerError = error.response.data[0].description;
        });
    },
    decrementPage() {
      const pageToGo = this.page - 1;
      this.pageChange(pageToGo);
    },
    getCoordinates() {
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    },
    success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.location = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      this.embedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.VUE_APP_MAPS_API_KEY}&q=${latitude},${longitude}`;
    },
    error() {
      this.locationError = 'Unable to retrieve your location';
    }
  },
  watch: {
    option: function(val) {
      if (val === 'Use my location') {
        this.getCoordinates();
      }
    }
  }
};
</script>
