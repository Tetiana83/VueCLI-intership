<template lang="pug">
.left-wrapper
  .left-first-block
    .left-logo
      p Projectus
  .left-second-block
    div
      .left-user-avatar
        img(:src='currentUser.avatar' alt='avatar')
      .left-user-data
        p {{currentUser.firstName}} {{currentUser.secondName}}
        p {{currentUser.workPosition}}
    .left-dots
      .dot(v-for='(dot, index) in 3' :key='index')
  .left-third-block
    #button(@click='toggle()')
      p#done-task {{comleteTasks}}
      p Completed Tasks
    div
      p#open-task {{openTasks}}
      p Open Tasks
  .left-menu
    .menu-title Menu
    .menu-list
      ul
        li Home
        li(@click='redirectTasks()') My Tasks
        li.notifi
          span {{notifiNum}}
  #windowWrapper.window-wrapper(v-if='modal' @click='modal = false')
    #askWindow.ask-window
      div
        h3 Are you sure you want to change the number of tasks?
      .answers
        button#btnYes.yes(@click='btnYes()') yes
        button#btnNo.no(@click='modal = false') no
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      modal: false,
      comleteTasks: 372,
      openTasks: 11
    }
  },
  props: {
    currentUser: Object
  },
  computed: {
    notifiNum () {
      return this.$store.state.app.notifiCount
    }
  },
  methods: {
    toggle () {
      if (this.openTasks === 0) {
        alert('There are no tasks to complete!')
      } else {
        this.modal = !this.modal
      }
    },
    redirectTasks () {
      this.$router.push({ name: 'Task' })
    },
    btnYes () {
      this.comleteTasks++
      this.openTasks--
    }
  }
})
</script>
<style scoped>

</style>
