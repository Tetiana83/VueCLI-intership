<template lang="pug">
.content-body
  .content-wrapper
    .today
      p Files List
    .files-list
      ul
        li(v-for='pic in pictures' :key="pic.id")
          p {{pic.title}}
</template>

<script lang="ts">
import ComingSoonComponent from '../components/ComingSoonComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    ComingSoonComponent
  },
  computed: {
    pictures () {
      return this.$store.state.pictures
    }
  }
})
</script>
<style lang='scss'>
.files-list {
  font-family: Helvetica;
  font-size: 16px;
  color: #131313;
  line-height: 20px;
}
</style>
