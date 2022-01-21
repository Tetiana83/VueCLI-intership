<template lang="pug">
table.task-table
  tr
    td.col1
      h2 To do / {{todoList.length}}
      draggable#todo(v-model='todoList' group='tasks' :move="checkMove" item-key='id')
        template(#item='{element}')
          .task-wrapper(:class="{expired: isExpired(element.datEnd), dayBeforExpired: isdayBeforExpired(element.datEnd)}" @click='openTaskDetails(element)')
            h3 {{element.title}}
            p {{getTime(element.datEnd)}}
    td.col2#2
      h2 In Progress / {{inProgressList.length}}
      draggable#inprogress(v-model='inProgressList' group='tasks' :move="checkMove" item-key='id')
        template(#item='{element}')
          .task-wrapper(:class="{expired: isExpired(element.datEnd), dayBeforExpired: isdayBeforExpired(element.datEnd)}" @click='openTaskDetails(element)')
            h3 {{element.title}}
            p {{getTime(element.datEnd)}}
    td.col3#3
      h2 Done / {{doneList.length}}
      draggable#done(v-model="doneList" group="tasks" :move="checkMove" item-key="id")
        template(#item="{element}")
          .task-wrapper(:class="{expired: isExpired(element.datEnd), dayBeforExpired: isdayBeforExpired(element.datEnd)}" @click='openTaskDetails(element)')
            h3 {{element.title}}
            p {{getTime(element.datEnd)}}
TaskDetailsModalComponent(v-if="isShowModal" :selectedTask="selectedTask" @closeModal="closeModal")
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TaskDetailsModalComponent from '../components/TaskDetailsModalComponent.vue'
import { StatusTaskEnum } from '@/enums/task.status.enum'
import Itask from '@/types/tasks.interface'
import draggable from 'vuedraggable'
import moment from 'moment'
export default defineComponent({
  components: {
    draggable,
    TaskDetailsModalComponent
  },
  data () {
    return {
      isShowModal: false,
      selectedTask: null,
      todoList: [],
      inProgressList: [],
      doneList: []
    }
  },
  computed: {
    ListTask () {
      return this.$store.state.taskList
    }
  },
  created () {
    this.ListTask.forEach((task: Itask) => {
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
    openTaskDetails (element: Itask) {
      this.isShowModal = !this.isShowModal
      this.selectedTask = element
    },
    closeModal () {
      this.isShowModal = false
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    checkMove (evt: any) {
      return evt.to.id !== StatusTaskEnum.Todo
    },
    isExpired (end: string) {
      const timeStampEnd = new Date(end).getTime()
      const timeStampCurrent = new Date().getTime()
      return timeStampEnd < timeStampCurrent
    },
    getTime (time: string) {
      return moment(time).format('DD/MM/YYYY')
    },
    isdayBeforExpired (end: string) {
      const datEndMinusDay = moment(end).subtract(1, 'days')
      const dateCurrent = moment()
      const compareDates = moment(datEndMinusDay).isSame(dateCurrent, 'day')
      if (compareDates) {
        return true
      } else {
        return false
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
  .expired {
    border: 1px solid red;
  }
  .dayBeforExpired {
    border: 1px solid orange;
  }
</style>
