<template>
  <div class="[ c-TextBlock ] [ u-WYSIWYG ]" v-html="wysiwygContent"></div>
</template>

<script>
export default {
  name: 'TextBlock',
  props: {
    wysiwygContent: {
      type: String,
      required: true
    }
  }
}
</script>
