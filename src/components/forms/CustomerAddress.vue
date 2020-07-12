<template>
  <div class="w-full">
    <div class="w-full bg-secondary rounded-lg shadow mb-2">
      <FindLocation
        @onCancel="option = 'Enter location manually'"
        v-if="option === 'Share location'"
        v-model="locationFromComponent"
      />
      <RadioInput v-model="option" value="Share location" class="p-5" />
      <hr class="border-gray-700" />
      <RadioInput
        v-model="option"
        value="Enter location manually"
        class="p-5"
      />
    </div>
    <div v-if="option === 'Share location'">
      <div
        v-if="embedUrl.length > 0"
        class="w-full bg-secondary rounded-lg shadow mb-2 p-5"
      >
        <div class="flex -mt-5">
          <RadioInput v-model="mapType" value="Map" class="flex-1/2 p-5" />
          <RadioInput v-model="mapType" value="Satellite" class="flex-1/2 p-5" />
        </div>
        <GmapMap class="w-full h-64 rounded border-none"
          :center="{lat:locationFromComponent.latitude, lng:locationFromComponent.longitude}"
          :zoom="12"
          :options="mapOptions"
          @center_changed="centerChanged"
          :map-type-id="mapTypeId"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            :maxZoom="12"
            @click="center=m.position"
          />
        </GmapMap>
      </div>
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
import FindLocation from '@/components/inputs/FindLocation.vue';

export default {
  name: 'CustomerAddress',
  components: {
    MaterialInput,
    RadioInput,
    CheckoutNavBar,
    FindLocation
  },
  data() {
    return {
      submitError: false,
      registerError: '',
      embedUrl: '',
      locationFromComponent: {},
      markers: [{
        position: {
          lat: null,
          lng: null
        }
      }],
      mapType: 'Map',
      mapOptions: {
        zoomControl: false,
        streetViewControl: false,
        fullscreenControlOptions: true,
        disableDefaultUI: false,
        mapTypeControl: false,
      }
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
    mapTypeId: function () {
      if (this.mapType === 'Map'){
        return 'terrain'
      } else {
        return 'satellite'
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
        return this.getMapId;
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
    centerChanged(e) {
       var coordString = e.toString().slice(1,-1).replace(/ /g,'');
       var commaPos = coordString.indexOf(',');
       var coordinatesLat = parseFloat(coordString.substring(0, commaPos));
       var coordinatesLong = parseFloat(coordString.substring(commaPos + 1, coordString.length));
       this.markers[0].position.lat = coordinatesLat;
       this.markers[0].position.lng = coordinatesLong;
    },
    submit() {
      if (this.option !== 'Share location') {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitError = true;
          return false;
        }
      }
      this.register()
        .then(() => {
          this.pageChangeWrapper(3);
        })
        .catch(error => {
          this.registerError = error.response.data[0].description;
        });
    },
    pageChangeWrapper(page) {
      this.$emit('pageChange', page);
      this.pageChange(page);
    },
    decrementPage() {
      const pageToGo = this.page - 1;
      this.pageChangeWrapper(pageToGo);
    }
  },
  watch: {
    locationFromComponent: {
      deep: true,
      handler(value) {
        const { latitude, longitude } = value;
        if (latitude && longitude) {
          this.markers[0].position.lat = latitude;
          this.markers[0].position.lng  = longitude;
          this.updateGoogleLocation(
            `https://www.google.com/maps/search/?api=1&query=${this.markers[0].position.lat},${this.markers[0].position.lng}`
          );
          this.embedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.VUE_APP_MAPS_API_KEY}&q=${this.markers[0].position.lat},${this.markers[0].position.lng}`;
        }
      }
    }
  }
};
</script>
