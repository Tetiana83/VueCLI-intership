<template lang="pug">
.content-body
  .content-wrapper
    .today
      p Today
    ActivityComponent
    .content-minibox
      .content-minibox-text
        | During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes
    .img-wrapper
      .image(v-for='(pic, index) in pictures' :key='index' @click='setNotifiCount(index)')
        img(:src='pic.url' alt='picture')
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ActivityComponent from '../components/ActivityComponent.vue'
export default defineComponent({
  components: {
    ActivityComponent
  },
  computed: {
    pictures () {
      return this.$store.state.pictures
    }
  },
  methods: {
    setNotifiCount (inx: number) {
      this.$store.commit('setNotifiCount', inx)
    }
  }
})
</script>
