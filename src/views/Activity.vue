<template>
  <div class="content-body">
      <div class="content-wrapper">
          <div class="today"><p>Today</p></div>
          <div class="content-section" v-for="activity in activityList" :key="activity.id">
              <div class="content-text-block" :class="activity.class"><p>{{activity.text}}</p></div>
              <div class="time"><span>{{activity.time}}</span></div>
          </div>
          <div class="content-minibox">
              <div class="content-minibox-text">
                  During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes
              </div>
          </div>
          <div class="img-wrapper">
              <div class="image" v-for="(pic, index) in pictures" :key="index" @click="setNotifiCount(index)">
                <img :src="pic" alt="picture">
              </div>
          </div>
      </div>
  </div>
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
      console.log(inx)
      // this.notifiNum = inx
    }
  }
})
</script>
