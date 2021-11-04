<template lang="pug">
.container-wrapper
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
        .dot(v-for='(dot, index) in dots' :key='index')
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
          li My Tasks
          li.notifi
            span {{notifiNum}}
  .right-wrapper
    .header
      .header-content
        div
          .logo
            img(src='../assets/Shapes@2x.png' alt='')
          .header-title Website Redesign
          .dots
            .dot(v-for='(dot, index) in dots' :key='index')
        .avatar-wrapper
          .avatar(v-for='(ava, index) in avatars' :key='index')
            img(:src='ava' alt='avatar')
          .share
            p Share
          .chat
            p Chat
      .nav-bar-wrapper
        ul
          li(v-for='(elem, index) in navBar' :key='index')
            router-link.first(:to='elem.link' :class='{ active: elem.isActive }' @click='navActiveToggle(elem)') {{elem.title}}
    router-view
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
import InavBarElem from '../types/nav-bar.interface'

export default defineComponent({
  data () {
    return {
      comleteTasks: 372,
      openTasks: 11,
      modal: false,
      avatars: [
        'https://i.pravatar.cc/150?img=3',
        'https://i.pravatar.cc/150?img=4',
        'https://i.pravatar.cc/150?img=5'
      ],
      notifiNum: 3,
      dots: [
        1, 2, 3
      ],
      currentUser: {
        firstName: 'Jean',
        secondName: 'Gonzales',
        avatar: 'https://i.pravatar.cc/150?img=49',
        workPosition: 'Product Owner'
      },
      navBar: [
        { id: 1, title: 'Tasks', link: 'task', isActive: false },
        { id: 2, title: 'Kanban', link: 'kanban', isActive: false },
        { id: 3, title: 'Activity', link: 'activity', isActive: true },
        { id: 4, title: 'Calendar', link: 'calendar', isActive: false },
        { id: 5, title: 'Files', link: 'files', isActive: false }
      ]
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
    btnYes () {
      this.comleteTasks++
      this.openTasks--
    },
    navActiveToggle (elem: InavBarElem) {
      this.navBar.forEach(element => {
        element.isActive = false
      })
      elem.isActive = true
    }
  }
})
</script>
