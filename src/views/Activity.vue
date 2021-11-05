<template lang="pug">
.content-body
  .content-wrapper
    .today
      p Today
    .content-section(v-for='activity in activityList' :key='activity.id')
      .content-text-block(:class='activity.class')
        p {{activity.text}}
      .time
        span {{activity.time}}
    .content-minibox
      .content-minibox-text
        | During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes
    .img-wrapper
      .image(v-for='(pic, index) in pictures' :key='index' @click='setNotifiCount(index)')
        img(:src='pic' alt='picture')
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      pictures: [
        'https://picsum.photos/id/1/200/200',
        'https://picsum.photos/id/2/200/200',
        'https://picsum.photos/id/3/200/200',
        'https://picsum.photos/id/4/200/200'
      ],
      activityList: [
        { id: 1, text: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users', time: '8:40 PM', class: 'green-icon' },
        { id: 2, text: 'Emilee Simchenko commented on Account for teams and personal in bottom style', time: '7:32 PM', class: 'blue-icon' },
        { id: 3, text: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects', time: '6:02 PM', class: 'yellow-icon' }
      ]
    }
  },
  methods: {
    setNotifiCount (inx: number) {
      this.$emit('notifiCount', inx)
    }
  }
})
</script>
