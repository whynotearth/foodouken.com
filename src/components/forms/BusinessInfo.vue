<template>
  <div class="px-6">
    <material-input
      v-model="$v.name.$model"
      label="Name"
      :error="$v.name.$dirty && !$v.name.required"
    >
      <span
        v-if="$v.name.$dirty && !$v.name.required"
        class="text-red-600 text-xs"
      >
        Name is required
      </span>
    </material-input>
    <material-input
      v-model="$v.email.$model"
      label="Email"
      :error="$v.email.$dirty && (!$v.email.required || !$v.email.email)"
    >
      <span
        v-if="$v.email.$dirty && !$v.email.required"
        class="text-red-600 text-xs"
      >
        Email is required
      </span>
      <span v-if="!$v.email.email" class="text-red-600 text-xs">
        Please enter valid email
      </span>
    </material-input>
    <material-input
      v-model="$v.phone.$model"
      label="Phone number"
      :error="$v.phone.$dirty && (!$v.phone.required || !$v.phone.minLength)"
    >
      <span
        v-if="$v.phone.$dirty && !$v.phone.required"
        class="text-red-600 text-xs"
      >
        Phone number is required
      </span>
      <span v-if="!$v.phone.minLength" class="text-red-600 text-xs">
        Please enter a valid phone number
      </span>
    </material-input>
    <text-area v-model="$v.description.$model" label="Description" />
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'BusinessInfo',
  components: {
    MaterialInput: () => import('@/components/inputs/MaterialInput'),
    TextArea: () => import('@/components/inputs/TextArea.vue')
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      description: ''
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
    },
    description: {}
  },
};
</script>
