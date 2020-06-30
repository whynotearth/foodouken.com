<template>
  <div v-if="error" class="text-sm text-error">
    <span v-if="error.title">
      {{ error.title }}
    </span>
    <span v-else-if="error.message">{{ error.message }}</span>
    <span v-else>{{ error }}</span>
    <template v-if="error.errors">
      <div v-for="(error, key) in error.errors" :key="key">
        <p v-for="(detail, key) in error" :key="key">{{ detail }}</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'BaseAPIErrorDisplay',
  props: {
    error: [String, Object]
  }
};
</script>
