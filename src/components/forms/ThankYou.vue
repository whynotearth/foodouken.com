<template>
  <div class="w-full text-center">
    <img :src="hadooken" alt="whynotearth-foodouken-thank-you" />
    <h4 class="text-white text-3xl font-bold mb-6">{{ getHeadingCopy }}</h4>
    <p>{{ getDescriptionCopy }}</p>
    <div class="w-full text-center my-4">
      <Button title="Submit Order" @clicked="submit" />
    </div>
  </div>
</template>
<script>
import hadooken from '@/assets/hadooken.png';
import Button from '@/components/Button.vue';
import { mapMutations } from 'vuex';
export default {
  name: 'ThankYou',
  components: {
    Button
  },
  data() {
    return {
      hadooken
    }
  },
  computed: {
    getHeadingCopy() {
      return 'Victory!';
    },
    getDescriptionCopy() {
      return "Your FOODouken is on it's way <3";
    }
  },
  methods: {
    ...mapMutations({
      pageChange: 'form/pageChange',
      unloadCheckoutForm: 'form/triggerForm',
      clearCart: 'cart/resetCartItems'
    }),
    submit() {
      // TODO: push customer data to database
      this.unloadCheckoutForm(false);
      this.clearCart();
      this.pageChange(1);
    }
  }
}
</script>