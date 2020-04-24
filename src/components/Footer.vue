<template>
  <footer class="h-full bg-footer text-lg text-white static flex">
    <div
      class="max-w-screen-xxl flex flex-col justify-between py-8 px-10 mx-auto lg:flex-row lg:flex-wrap"
    >
      <template v-if="this.orgData.custom !== undefined">
        <div
          v-for="(contact, i) in contactLinks"
          :key="i"
          class="py-3 flex mr-auto items-center lg:mx-auto lg:px-3"
        >
          <img
            :src="contact.icon"
            class="w-8 lg:w-6 mr-4"
            :alt="contact.title"
          />
          <span class="w-auto">
            <a
              v-if="contact.link"
              v-text="contact.label"
              :href="contact.link"
              :title="contact.title"
              :target="contact.newTab ? '_blank' : '_self'"
              rel="noopener"
            ></a>
            <template v-else>
              {{ contact.label }}
            </template>
          </span>
        </div>
      </template>
    </div>
  </footer>
</template>

<script>
import location from '@/assets/location.png';
import phone from '@/assets/phone.png';
import facebook from '@/assets/facebook.png';
import whatsapp from '@/assets/whatsapp.png';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      location: location,
      phone: phone,
      facebook: facebook,
      whatsapp: whatsapp
    };
  },
  computed: {
    ...mapGetters({
      orgData: 'shop/getOrgData'
    }),
    contactLinks() {
      return [
        {
          title: `${this.orgData.title} on Google Maps`,
          label: this.orgData.custom.address.friendlyName,
          icon: this.location,
          link: this.orgData.custom.address.googleMaps,
          newTab: true
        },
        {
          title: `Call ${this.orgData.title}`,
          label: this.orgData.custom.details.phone,
          icon: this.phone,
          link: `tel:${this.orgData.custom.details.phone}`
        },
        {
          title: `${this.orgData.title} on Facebook`,
          label: this.orgData.custom.details.facebook,
          icon: this.facebook,
          link: `https://facebook.com/${this.orgData.custom.details.facebook}`,
          newTab: true
        },
        {
          title: `${this.orgData.title} on WhatsApp`,
          label: this.orgData.custom.details.whatsapp,
          icon: this.whatsapp,
          link: `https://wa.me/${this.orgData.custom.details.whatsapp}`,
          newTab: true
        }
      ];
    }
  }
};
</script>

<style></style>
