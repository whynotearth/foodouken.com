<template>
  <div class="w-full">
    <div class="bg-secondary px-2 py-4 rounded-lg">
      <material-input
        v-model="name"
        type="text"
        label="Name"
        :required="true"
      />
      <material-input
        v-model="email"
        type="email"
        label="Email"
        :required="true"
      />
      <material-input
        v-model="phone"
        type="tel"
        label="Phone number"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        :required="true"
      />
      <text-area v-model="specialRequest" label="Special requests" />
    </div>
    <div class="w-full text-center my-4">
      <Button title="Add address" />
    </div>
  </div>
</template>

<script>
import MaterialInput from '@/components/inputs/MaterialInput.vue';
import TextArea from '@/components/inputs/TextArea.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'CustomerInfo',
  components: {
    MaterialInput,
    TextArea,
    Button
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      specialRequest: ''
    };
  }
};
</script>

<style></style>