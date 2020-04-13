<template>
  <div class="w-full">
    <div class="bg-secondary px-2 pt-4 pb-1 rounded-lg shadow">
      <material-input
        v-model="buildingName"
        type="text"
        label="Building Name"
        placeholder="Building Name"
      />
      <material-input
        v-model="street"
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
        v-model="town"
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
    <span class="text-sm text-red-600" v-if="$v.$invalid" v-show="submitError">
      You are missing required fields, please fill out "Street Address" and
      "Town/City".
    </span>
    <div class="w-full text-center my-4">
      <Button title="Choose delivery time" @clicked="submit" />
    </div>
  </div>
</template>

<script>
import MaterialInput from '@/components/inputs/MaterialInput.vue';
import Button from '@/components/Button.vue';
import { mapGetters, mapMutations } from 'vuex';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'CustomerAddress',
  components: {
    MaterialInput,
    Button
  },
  data() {
    return {
      submitError: false
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
      'getStreet'
    ]),
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
    }
  },
  methods: {
    ...mapMutations('form', [
      'updateTown',
      'updateFloor',
      'updateStreet',
      'updateBuildingName',
      'updateParking',
      'updateApartment',
      'pageChange'
    ]),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitError = true;
      } else {
        this.pageChange(3);
      }
    }
  }
};
</script>

<style></style>
