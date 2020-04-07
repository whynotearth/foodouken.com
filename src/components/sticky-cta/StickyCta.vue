<template>
  <div
    class="fixed p-4 inset-x-0 bottom-0 w-full"
    v-bind:class="[
      backgroundColor,
      border,
      borderColor,
      fontColor,
      mobileOnly ? 'md:hidden' : ''
    ]"
  >
    <div class="flex flex-row items-center">
      <div class="flex-1">{{ leftContent }}</div>
      <div class="flex-grow text-center">
        <a v-if="ctaLink" :href="ctaLink">{{ centerContent }}</a>
        <span v-else>{{ centerContent }}</span>
      </div>
      <div class="flex-1 text-right">{{ rightContent }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StickyCta',
  props: {
    leftContent: String,
    centerContent: String,
    rightContent: String,
    ctaLink: String,
    backgroundColor: {
      type: String,
      default: 'bg-footer'
    },
    border: {
      type: String,
      default: 'border-t'
    },
    borderColor: {
      type: String,
      default: 'border-gray-500'
    },
    fontColor: {
      type: String,
      default: 'text-white'
    },
    mobileOnly: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style />
