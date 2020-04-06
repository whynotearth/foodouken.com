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
      <Button title="Choose delivery time" />
    </div>
  </div>
</template>

<script>
import MaterialInput from '@/components/inputs/MaterialInput.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'CustomerAddress',
  components: {
    MaterialInput,
    Button
  },
  data() {
    return {
      street: '',
      town: '',
      floor: '',
      apartment: '',
      parking: ''
    };
  }
};
</script>

<style></style>
