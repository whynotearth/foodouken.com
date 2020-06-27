<template>
  <div class="px-6">
    <material-input
      v-model="$v.name.$model"
      label="Name"
      :error="$v.name.$dirty && !$v.name.required"
      labelBg="bg-background"
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
      labelBg="bg-background"
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
      labelBg="bg-background"
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
    <text-area
      v-model="$v.description.$model"
      label="Description"
      labelBg="bg-background"
    />
    <hr class="border-white border-opacity-12 my-8" />
    <ImageUpload class="clear-margin" v-model="logo" :defaultImages="logo">
      <template #title>
        <div class="tg-body-mobile ">
          <span class="text-white text-opacity-65"> Logo </span>
          <span class="text-white text-opacity-38">
            ( 500 x 599 pixels JPEG / PNG )
          </span>
        </div>
      </template>
    </ImageUpload>
    <span
      v-if="$v.logo.$dirty && !$v.logo.required"
      class="text-red-600 text-xs"
    >
      Logo is required
    </span>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { required, email, minLength } from 'vuelidate/lib/validators';
import MaterialInput from '@/components/inputs/MaterialInput';
import TextArea from '@/components/inputs/TextArea.vue';
import ImageUpload from '@/components/imageUpload/ImageUpload.vue';

export default {
  name: 'BusinessInfo',
  components: {
    MaterialInput,
    TextArea,
    ImageUpload
  },
  data() {
    return {};
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
    description: {},
    logo: {
      required
    }
  },
  computed: {
    ...mapGetters('tenant', [
      'getName',
      'getEmail',
      'getPhone',
      'getDescription',
      'getLogo'
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
    description: {
      get() {
        return this.getDescription;
      },
      set(value) {
        this.updateDescription(value);
      }
    },
    logo: {
      get() {
        return this.getLogo;
      },
      set(value) {
        this.updateLogo(value);
      }
    }
  },
  methods: {
    ...mapMutations('tenant', [
      'updateName',
      'updateEmail',
      'updatePhone',
      'updateDescription',
      'updateLogo'
    ])
  }
};
</script>
