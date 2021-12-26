<template lang="pug">
table.task-table
  tr
    td.col1
      h2 To do
      draggable#todo(v-model='todoList' group='tasks' :move="checkMove" item-key='id')
        template(#item='{element}')
          .task-wrapper(@click='taskDetails(element)')
            h3 {{element.title}}
            p {{element.datEnd}}
    td.col2#2
      h2 In Progress
      draggable#inprogress(v-model='inProgressList' group='tasks' :move="checkMove" item-key='id')
        template(#item='{element}')
          .task-wrapper(@click='taskDetails(element)')
            h3 {{element.title}}
            p {{element.datEnd}}
    td.col3#3
      h2 Done
      draggable#done(v-model="doneList" group="tasks" :move="checkMove" item-key="id")
        template(#item="{element}")
          .task-wrapper(@click='taskDetails(element)')
            h3 {{element.title}}
            p {{element.datEnd}}
TaskDetailsModalComponent(v-if="modal" :selectedTask="selectedTask" @closeModal="closeModal")
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TaskDetailsModalComponent from '../components/TaskDetailsModalComponent.vue'
import { StatusTaskEnum } from '@/enums/task.status.enum'
import Itask from '@/types/tasks.interface'
import draggable from 'vuedraggable'
export default defineComponent({
  components: {
    draggable,
    TaskDetailsModalComponent
  },
  data () {
    return {
      modal: false,
      selectedTask: null,
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
  },
  methods: {
    taskDetails (element: Itask) {
      this.modal = !this.modal
      this.selectedTask = element
    },
    closeModal () {
      this.modal = false
    },
    checkMove (evt: any) {
      if (evt.to.id === 'todo') {
        return false
      } else {
        return true
      }
    }
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
    padding: 10px;
    margin: 10px;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    border-radius: 8px;
  }
  .modal-task-wrapper {
    background-color: ghostwhite;
    box-shadow: 0 0 1px grey;
    color: #000;
    padding: 10px;
    margin: 10px;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    border-radius: 8px;
    width: 400px;
  }
  .modal-task-wrapper > textarea {
    width: 100%;
  }
  .btn-edit {
    display: flex;
    justify-content: flex-end;
    margin: 10px;
  }
</style>
