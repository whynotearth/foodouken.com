<template>
  <div>
    <div class="relative overflow-hidden w-full" style="padding-bottom: 45%;">
      <img
        :src="tenant.logoUrl"
        class="absolute w-full object-cover"
        :alt="tenant.name"
      />
      <img
        src="../../assets/coming-soon.png"
        v-if="!tenant.isActive"
        class="absolute w-full h-full object-cover"
      />
    </div>
    <h3 class="font-bold text-white text-opacity-95 px-5 pt-5 text-xl">
      {{ tenant.name }}
    </h3>
    <ul
      class="text-sm text-gray-500 flex flex-wrap items-center mr-auto ml-0 self-end px-5 pb-5 mt-auto"
    >
      <li v-for="(tag, i) in tenant.tags" :key="i" class="tag pr-2 py-2">
        <span v-text="tag" class="px-3 py-1 rounded mx-auto bg-tag" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tenant: {
      type: Object
    }
  }
};
</script>
