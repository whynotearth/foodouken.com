<template>
  <div class="w-full">
    <div class="bg-secondary px-2 pt-4 pb-1 rounded-lg shadow">
      <material-input v-model="name" label="Name" :error="!$v.name.required">
        <span v-if="!$v.name.required" class="text-red-600 text-xs">
          Name is required
        </span>
      </material-input>
      <material-input
        v-model="email"
        label="Email"
        :error="!$v.email.required || !$v.email.email"
      >
        <span v-if="!$v.email.required" class="text-red-600 text-xs">
          Email is required
        </span>
        <span v-if="!$v.email.email" class="text-red-600 text-xs">
          Please enter valid email
        </span>
      </material-input>
      <material-input
        v-model="phone"
        label="Phone number"
        :error="!$v.phone.required || !$v.phone.minLength"
      >
        <span v-if="!$v.phone.required" class="text-red-600 text-xs">
          Phone number is required
        </span>
        <span v-if="!$v.phone.minLength" class="text-red-600 text-xs">
          Please enter a valid phone number
        </span>
      </material-input>
      <text-area v-model="specialRequest" label="Special requests" />
    </div>
    <span class="text-sm text-red-600" v-if="$v.$invalid" v-show="submitError">
      Please fill the form properly.
    </span>
    <div class="w-full text-center my-4 flex">
      <div
        class="bg-footer w-1/3 uppercase text-left text-sm font-semibold px-4 py-4"
        @click="decrementPage"
        v-if="page != 1"
      >
        ◄ Back
      </div>
      <div
        class="bg-button flex-grow uppercase text-right text-sm font-semibold px-4 py-4"
        @click="submit"
      >
        Delivery Information ►
      </div>
    </div>
  </div>
</template>

<script>
import MaterialInput from '@/components/inputs/MaterialInput.vue';
import TextArea from '@/components/inputs/TextArea.vue';
import { mapGetters, mapMutations } from 'vuex';
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'CustomerInfo',
  components: {
    MaterialInput,
    TextArea
  },
  data() {
    return {
      submitError: false
    };
  },
  validations: {
    name: {
      required
    },
    email: {
      required,
      email
    },
    phone: {
      required,
      minLength: minLength(7)
    }
  },
  computed: {
    ...mapGetters('form', [
      'getName',
      'getEmail',
      'getPhone',
      'getSpecialRequest',
      'page'
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
    ]),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitError = true;
      } else {
        this.pageChange(2);
      }
    },
    decrementPage() {
      const pageToGo = this.page - 1;
      this.pageChange(pageToGo);
    }
  }
};
</script>

<style></style>
