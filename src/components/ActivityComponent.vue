<template lang="pug">
.content-section(v-for='activity in activityList' :key='activity.id')
      .content-text-block(:class='activity.class')
        p {{activity.text}}
      .time
        span {{activity.time}}
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    activityList () {
      return this.$store.state.activityList
    }
  }
})
</script>
