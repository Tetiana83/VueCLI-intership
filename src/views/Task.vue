<template lang="pug">
.content-body
  .content-wrapper
    .today
      p Tasks
    TaskComponent(@taskDone="taskDone" @taskRemove="taskRemove" :ListTask="taskList" @taskAdd='taskAdd')
</template>

<script lang="ts">
import Itask from '@/types/tasks.interface'
import { StatusTaskEnum } from '../enums/task.status.enum'
import { defineComponent } from 'vue'
import TaskComponent from '../components/TaskComponent.vue'
export default defineComponent({
  name: 'Task',
  components: {
    TaskComponent
  },
  data () {
    return {
      taskList: null
    }
  },
  created () {
    const startData = [
      {
        id: 1,
        title: 'Lesson 1',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        datEnd: '31.10.2021',
        new: false,
        status: StatusTaskEnum.Inprogress
      },
      {
        id: 2,
        title: 'Lesson 2',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        datEnd: '01.11.2021',
        new: false,
        status: StatusTaskEnum.Inprogress
      },
      {
        id: 3,
        title: 'Lesson 3',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        datEnd: '03.11.2021',
        new: false,
        status: StatusTaskEnum.Todo
      },
      {
        id: 4,
        title: 'Lesson 4',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        datEnd: '05.11.2021',
        new: false,
        status: StatusTaskEnum.Done
      },
      {
        id: 5,
        title: 'Homework',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        datEnd: '10.11.2021',
        new: false,
        status: StatusTaskEnum.Done
      }
    ]
    this.taskList = startData
  },
  methods: {
    taskDone (index: number) {
      this.taskList[index].color = 'green'
    },
    taskRemove (index: number) {
      this.taskList.splice(index, 1)
    },
    taskAdd (task: Itask) {
      this.taskList.push(task)
    }
  }
})
</script>
