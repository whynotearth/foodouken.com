<template>
  <div
    class="bg-black bg-opacity-54 z-50 fixed h-screen w-screen inset-0 flex justify-center items-center"
    @click="closeModal"
  >
    <div class="flex flex-col items-center text-left w-full h-full relative">
      <button
        class="p-4 absolute left-0 top-0"
        @click.prevent="closeModal"
        title="Close"
      >
        <Close />
      </button>
      <img class="my-auto" :src="image.url" alt="image" />
      <button
        class="p-4 absolute right-0 bottom-0"
        @click.prevent="deleteImage"
        title="Delete"
      >
        <Delete />
      </button>
    </div>
  </div>
</template>

<script>
import Close from '@/assets/close.svg';
import Delete from '@/assets/delete.svg';

export default {
  name: 'ImagePreviewModal',
  props: ['image'],
  components: { Close, Delete },
  methods: {
    closeModal() {
      this.$emit('resetSelectedImage');
    },
    deleteImage() {
      this.$emit('deleteImage', this.image.index);
      this.closeModal();
    }
  }
};
</script>
