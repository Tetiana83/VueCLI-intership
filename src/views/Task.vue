<template lang="pug">
.content-body
  .content-wrapper
    .today
      p Tasks
    TaskComponent
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskComponent from '../components/TaskComponent.vue'
export default defineComponent({
  name: 'Task',
  components: {
    TaskComponent
  }
})
</script>
