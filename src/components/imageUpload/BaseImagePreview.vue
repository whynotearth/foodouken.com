<template functional>
  <img
    @click="props.selectImage([props.image, props.index])"
    class="upload-img--dimension object-cover cursor-pointer m-1"
    :src="props.image"
  />
</template>
