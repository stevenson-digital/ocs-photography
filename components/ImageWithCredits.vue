<template>
  <div class="c-ImageWithCredits">
    <img class="c-ImageWithCredits__img" :src="imageSrc" :alt="imageAlt">
    <div class="c-ImageWithCredits__credits">
      <p class="c-ImageWithCredits__name">{{ creditName }}</p>
      <p class="c-ImageWithCredits__source">{{ creditSource }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageWithCredits',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    creditName: {
      type: String,
      required: true
    },
    creditSource: {
      type: String,
      required: true
    }
  }
}
</script>
