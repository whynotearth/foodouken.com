<template>
  <footer class="h-full bg-footer text-lg text-white static flex">
    <div
      class="max-w-screen-xxl flex flex-col justify-between py-8 px-10 mx-auto lg:flex-row lg:flex-wrap"
    >
      <template v-if="this.orgData.custom !== undefined">
        <div
          v-for="(contact, i) in getContactLinks()"
          :key="i"
          class="py-3 flex mr-auto items-center lg:mx-auto lg:px-3"
        >
          <img
            :src="require(`@/assets/${contact.icon}.png`)"
            class="w-8 lg:w-6 mr-4"
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
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      orgData: 'home/getOrgData'
    })
  },
  methods: {
    getContactLinks() {
      return [
        {
          title: `${this.orgData.title} on Google Maps`,
          label: this.orgData.custom.address.friendlyName,
          icon: 'location',
          link: this.orgData.custom.address.googleMaps,
          newTab: true
        },
        {
          title: `Call ${this.orgData.title}`,
          label: this.orgData.custom.details.phone,
          icon: 'phone',
          link: `tel:${this.orgData.custom.details.phone}`
        },
        {
          title: `${this.orgData.title} on Facebook`,
          label: this.orgData.custom.details.facebook,
          icon: 'facebook',
          link: `https://facebook.com/${this.orgData.custom.details.facebook}`,
          newTab: true
        },
        {
          title: `${this.orgData.title} on WhatsApp`,
          label: this.orgData.custom.details.whatsapp,
          icon: 'whatsapp',
          link: `https://wa.me/${this.orgData.custom.details.whatsapp}`,
          newTab: true
        }
      ];
    }
  }
};
</script>

<style></style>
