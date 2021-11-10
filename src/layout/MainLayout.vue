<template lang="pug">
.container-wrapper
  SideBarComponent(:currentUser="currentUser", :notifiNum="notifiNum")
  .right-wrapper
    HeaderComponent()
    router-view(@notifiCount="notifiNum = $event")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBarComponent from '../components/SideBarComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'

export default defineComponent({
  components: {
    SideBarComponent,
    HeaderComponent
  },
  data () {
    return {
      notifiNum: 3,
      currentUser: {
        firstName: 'Jean',
        secondName: 'Gonzales',
        avatar: 'https://i.pravatar.cc/150?img=49',
        workPosition: 'Product Owner'
      }
    }
  }
})
</script>
