<template lang="pug">
.header
      .header-content
        div
          .logo
            img(src='../assets/Shapes@2x.png' alt='')
          .header-title Website Redesign
          .dots
            .dot(v-for='(dot, index) in 3' :key='index')
        div
          HeaderAvatarComponent(:avatars="avatars")
          .share
            p Share
          .chat
            p Chat
      HeaderNavBarComponent(:navBar="navBar")
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HeaderAvatarComponent from '../components/HeaderAvatarComponent.vue'
import HeaderNavBarComponent from '../components/HeaderNavBarComponent.vue'

export default defineComponent({
  components: {
    HeaderAvatarComponent,
    HeaderNavBarComponent
  },
  data () {
    return {
      avatars: [
        'https://i.pravatar.cc/150?img=3',
        'https://i.pravatar.cc/150?img=4',
        'https://i.pravatar.cc/150?img=5'
      ],
      navBar: [
        { id: 1, title: 'Tasks', link: 'task', isActive: false },
        { id: 2, title: 'Kanban', link: 'kanban', isActive: false },
        { id: 3, title: 'Activity', link: 'activity', isActive: true },
        { id: 4, title: 'Calendar', link: 'calendar', isActive: false },
        { id: 5, title: 'Files', link: 'files', isActive: false }
      ]
    }
  }
})
</script>
