<template>
  <div class="w-full">
    <div class="bg-secondary px-2 py-4 rounded-lg">
      <material-input
        v-model="street"
        type="text"
        label="Street Address"
        placeholder="Street name and number"
        :required="true"
      />
      <material-input
        v-model="town"
        type="text"
        label="City"
        placeholder="Town or City Area"
        :required="true"
      />
      <material-input
        v-model="floor"
        type="text"
        label="Floor"
        :required="true"
      />
      <material-input
        v-model="apartment"
        type="text"
        label="Apartment #"
        :required="true"
      />
      <material-input
        v-model="parking"
        type="text"
        label="Where to park"
        :required="true"
      />
    </div>
    <div class="w-full text-center my-4">
      <Button title="Choose delivery time" @clicked="pageChange(3)" />
    </div>
  </div>
</template>

<script>
import MaterialInput from '@/components/inputs/MaterialInput.vue';
import Button from '@/components/Button.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'CustomerAddress',
  components: {
    MaterialInput,
    Button
  },
  computed: {
    ...mapGetters('form', [
      'getTown',
      'getFloor',
      'getApartment',
      'getParking',
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
      'updateParking',
      'updateApartment',
      'pageChange'
    ])
  }
};
</script>

<style></style>
