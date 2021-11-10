<template lang="pug">
.avatar-wrapper
  .avatar(v-for='(ava, index) in avatars' :key='index')
    img(:src='ava' alt='avatar')
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  date () {
    return {}
  },
  props: {
    avatars: Array
  }
})
</script>
