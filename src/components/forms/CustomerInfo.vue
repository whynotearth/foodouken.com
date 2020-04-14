<template>
  <div class="w-full">
    <div class="bg-secondary px-2 pt-4 pb-1 rounded-lg shadow">
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
      <Button title="Add address" @clicked="pageChange(2)" />
    </div>
  </div>
</template>

<script>
import MaterialInput from '@/components/inputs/MaterialInput.vue';
import TextArea from '@/components/inputs/TextArea.vue';
import Button from '@/components/Button.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'CustomerInfo',
  components: {
    MaterialInput,
    TextArea,
    Button
  },
  computed: {
    ...mapGetters('form', [
      'getName',
      'getEmail',
      'getPhone',
      'getSpecialRequest'
    ]),
    name: {
      get() {
        return this.getName;
      },
      set(value) {
        this.updateName(value);
      }
    },
    email: {
      get() {
        return this.getEmail;
      },
      set(value) {
        this.updateEmail(value);
      }
    },
    phone: {
      get() {
        return this.getPhone;
      },
      set(value) {
        this.updatePhone(value);
      }
    },
    specialRequest: {
      get() {
        return this.getSpecialRequest;
      },
      set(value) {
        this.updateSpecialRequest(value);
      }
    }
  },
  methods: {
    ...mapMutations('form', [
      'updateName',
      'updateEmail',
      'updatePhone',
      'updateSpecialRequest',
      'pageChange'
    ])
  }
};
</script>

<style></style>
