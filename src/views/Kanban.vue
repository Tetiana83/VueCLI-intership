<template lang="pug">
table.task-table
  tr
    td.col1
      h2 To do
      .task-wrapper(v-for='task in todoList' :key='task.id')
        h3 {{task.title}}
        p {{task.datEnd}}
    td.col2
      h2 In Progress
      .task-wrapper(v-for='task in inProgressList' :key='task.id')
        h3 {{task.title}}
        p {{task.datEnd}}
    td.col3
      h2 Done
      .task-wrapper(v-for='task in doneList' :key='task.id')
        h3 {{task.title}}
        p {{task.datEnd}}
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { StatusTaskEnum } from '@/enums/task.status.enum'
import Itask from '@/types/tasks.interface'
export default defineComponent({
  data () {
    return {
      todoList: [],
      inProgressList: [],
      doneList: []
    }
  },
  created () {
    const startData: Itask[] = [
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
    startData.forEach((task: Itask) => {
      if (task.status === StatusTaskEnum.Todo) {
        this.todoList.push(task)
      }
      if (task.status === StatusTaskEnum.Inprogress) {
        this.inProgressList.push(task)
      }
      if (task.status === StatusTaskEnum.Done) {
        this.doneList.push(task)
      }
    })
  }
})
</script>
<style scoped lang="scss">
  .task-table {
    width: 99%;
    height: 100vh;
  }
  td {
    vertical-align: top;
    text-align: center;
    background-color: #f7f6f3;
    box-shadow: 0 0 1px ghostwhite;
  }
  .col1 {
    width: 33%;
    color: red;
  }
  .col2 {
    width: 33%;
    color: #ffc200;
  }
  .col3 {
    width: 33%;
    color: green;
  }
  .task-wrapper {
    background-color: ghostwhite;
    box-shadow: 0 0 1px grey;
    color: #000;
    padding: 5px;
    margin: 10px;
    font-weight: 600;
    font-style: italic;
    cursor: pointer;
  }
</style>
