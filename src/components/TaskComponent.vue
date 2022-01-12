<template lang="pug">
.calendar-wrapper(v-if="showCalendar")
  .calendar
    v-date-picker(v-model="range" is-range)
    .calendar-btn-wrapper
      button(@click="showCalendar = false") Close
      button(@click="searchingTaskByDateRange()") Search
.create-search-wrapper
  button.create(@click="isShowModal = !isShowModal") Create a new task
  .search
    input(type="text" placeholder="searching..." v-model="searchTitle")
    button.calendar-btn(@click="showCalendar = !showCalendar") Calendar
    button.search-btn(@click="searchingTask()") Search
AddTaskComponent(@taskAdd="taskAdd" v-if="isShowModal" @toggleModal="toggleModal")
transition-group(name='bounce' tag='p')
  .content-section(v-for="(task, index) in listTaskRender" :key="task.id" :class="{blink: task.new}")
    .task-wrapper
      .task-icon(:class="{todo: task.status === 'TODO', inprogress: task.status === 'INPROGRESS', done: task.status === 'DONE'}"  @click="doneTask(index)")
      .task-body(@click="openTaskDetails(task)")
        h3 {{task.title}}
        p {{task.desc}}
      .time
        span {{getTime(task.datEnd)}}
      button.task-icon(@click="removeTask(index)")
        img(src='../assets/delete.svg' alt='')
TaskDetailsModalComponent(v-if="isShowEditModal" :selectedTask="selectedTask" @updateSelectedTask="updateSelectedTask" @closeModal="closeModal")
</template>
<script lang="ts">
import Itask from '@/types/tasks.interface'
import AddTaskComponent from '../components/AddTaskComponent.vue'
import TaskDetailsModalComponent from './TaskDetailsModalComponent.vue'
import { defineComponent } from 'vue'
import moment from 'moment'

export default defineComponent({
  components: {
    AddTaskComponent,
    TaskDetailsModalComponent
  },
  props: {
    ListTask: {
      type: Array
    },
    taskDone: Function,
    taskRemove: Function
  },
  data () {
    return {
      isShowEditModal: false,
      isShowModal: false,
      selectedTask: null,
      title: '',
      desc: '',
      datEnd: '',
      color: '#fff',
      listTaskRender: [],
      searchTitle: null,
      filteredListTask: [],
      showCalendar: false,
      range: {
        start: null,
        end: null
      }
    }
  },
  mounted () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    this.ListTask.forEach((task: Itask, index) => {
      setTimeout(() => {
        this.listTaskRender.push(task)
      }, 500 * index)
    })
  },
  methods: {
    toggleModal () {
      this.isShowModal = !this.isShowModal
    },
    doneTask (index: number) {
      this.$emit('taskDone', index)
    },
    removeTask (index: number) {
      this.listTaskRender.splice(index, 1)
      this.$emit('taskRemove', index)
    },
    taskAdd (task: Itask) {
      task.id = this.listTaskRender.length + 1
      this.listTaskRender.unshift(task)
    },
    openTaskDetails (element: Itask) {
      this.isShowEditModal = !this.isShowEditModal
      this.selectedTask = element
    },
    closeModal () {
      this.isShowEditModal = false
    },
    updateSelectedTask (data: Itask) {
      this.selectedTask = Object.assign(this.selectedTask, data)
    },
    getTime (time: string) {
      return moment(time).format('DD/MM/YYYY')
    },
    searchingTask () {
      this.listTaskRender.forEach((task: Itask) => {
        if (task.title.includes(this.searchTitle)) {
          this.filteredListTask.push(task)
        }
      })
      this.listTaskRender = this.filteredListTask
    },
    searchingTaskByDateRange () {
      this.listTaskRender.forEach((task: Itask) => {
        if (moment(task.datEnd).isBetween(this.range.start, this.range.end)) {
          this.filteredListTask.push(task)
        }
      })
      this.listTaskRender = this.filteredListTask
      this.showCalendar = false
    }
  }
})
</script>
<style scoped lang="scss">
  .task-wrapper {
    display: flex;
    h3 {
      margin: 0;
    }
  }
  .task-icon {
    width: 40px;
    height: 40px;
    background-color: ghostwhite;
    border-radius: 50%;
    border: 1px dotted gray;
    margin: 0 20px;
  }
  .todo {
    background-color: red;
  }
  .inprogress {
    background-color: yellow;
  }
  .done {
    background-color: green;
  }
  .create {
    margin: 30px 20px 0 20px
  }
  .task-body {
    cursor: pointer;
  }
  .search {
    display: flex;
  }
  .search-btn {
    cursor: pointer;
    margin: 0 30px 0 5px ;
  }
  .create-search-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .calendar-btn {
    margin-left: 5px;
  }
  .calendar-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .calendar {
    display: flex;
    flex-direction: column;
  }
  .calendar-btn-wrapper {
    padding: 5px 0;
    display: flex;
    justify-content: flex-end;
  }
  /*
    my animations
  */
  .blink {
        animation: blink-animation 1s steps(3, start) (7, end);
        }
      @keyframes blink-animation {
        to {
          visibility: hidden;
        }
      }
  .bounce-enter-active {
    animation: bounce-in .5s ease-out;
  }

  .bounce-leave-active {
    animation: bounce-in .5s ease-in;
  }

  @keyframes bounce-in {
    0% {
      font-size: 1em;
      // transform: scale(1);
    }
    50% {
      font-size: 1.1em;
      // transform: scale(1.1);
    }
    100% {
      font-size: 1em;
      // transform: scale(1);
    }
  }
</style>
