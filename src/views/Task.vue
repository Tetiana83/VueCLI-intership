<template lang="pug">
.content-body
  .content-wrapper
    .today
      p Tasks
    TaskComponent(@taskDone="taskDone" :ListTask="taskList")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskComponent from '../components/TaskComponent.vue'
import Itask from '../types/tasks.interface'
const tasks: Itask[] = [
  { id: 1, title: 'Lesson 1', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', datEnd: '31/10/2021', color: '#cf9d9d' },
  { id: 2, title: 'Lesson 2', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', datEnd: '01/11/2021', color: '#a52da7' },
  { id: 3, title: 'Lesson 3', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', datEnd: '03/11/2021', color: '#232daf' },
  { id: 4, title: 'Lesson 4', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', datEnd: '05/11/2021', color: '#23af68' },
  { id: 5, title: 'Homework', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', datEnd: '10/11/2021', color: '#af8a23' }
]
export default defineComponent({
  name: 'Task',
  components: {
    TaskComponent
  },
  data () {
    return {
      taskList: tasks
    }
  },
  methods: {
    taskDone (index: number) {
      this.taskList[index].color = 'green'
    }
  }
})
</script>
