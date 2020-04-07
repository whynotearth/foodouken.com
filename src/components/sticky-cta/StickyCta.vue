<template>
  <div
    class="sticky inset-x-0 bottom-0 w-full"
    v-bind:class="[mobileOnly ? 'md:hidden' : '']"
  >
    <div
      class="flex flex-row items-center p-2"
      v-bind:class="[
        backgroundColor,
        border,
        fontColor,
        boxShadow ? 'shadow-md' : '',
        mobileOnly ? 'md:hidden' : ''
      ]"
    >
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
      default: 'bg-button'
    },
    border: {
      type: String
    },
    fontColor: {
      type: String,
      default: 'text-white'
    },
    boxShadow: {
      type: Boolean,
      default: true
    },
    mobileOnly: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style />
