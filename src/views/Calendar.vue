<template lang="pug">
.content-body
  .content-wrapper
    .today
      p Calendar
    v-calendar.calendar(:attributes='attrs')
</template>

<script lang="ts">
import Itask from '@/types/tasks.interface'
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      attrs: []
    }
  },
  created () {
    this.$store.state.taskList.forEach((task: Itask) => {
      const attr = {
        dates: task.datEnd,
        highlight: {
          color: 'orange',
          fillMode: 'solid',
          contentClass: 'italic'
        },
        popover: {
          label: `Title: ${task.title} Description: ${task.desc}`,
          visibility: 'click'
        }
      }
      this.attrs.push(attr)
    })
  }
})
</script>
<style scoped>
    .calendar {
    width: 100%;
  }
</style>
