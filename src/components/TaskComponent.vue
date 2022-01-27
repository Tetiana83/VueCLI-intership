<template lang="pug">
.create-search-wrapper
  button.create(@click="isShowModal = !isShowModal") Create a new task
AddTaskComponent(v-if="isShowModal" @toggleModal="toggleModal")
transition-group(name='bounce' tag='p')
  .content-section(v-for="(task, index) in ListTask" :key="task.id" :class="{blink: task.new}")
    .task-wrapper
      .task-icon(:class="{todo: task.status === 'TODO', inprogress: task.status === 'INPROGRESS', done: task.status === 'DONE'}"  @click="doneTask(index)")
      .task-body(@click="openTaskDetails(task)")
        h3 {{task.title}}
        p {{task.desc}}
      .time
        span {{getTime(task.datEnd)}}
      button.task-icon(@click="removeTask(index)")
        img(src='../assets/delete.svg' alt='')
TaskDetailsModalComponent(v-if="isShowEditModal" :selectedTask="selectedTask" @closeModal="closeModal")
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
  data () {
    return {
      isShowEditModal: false,
      isShowModal: false,
      selectedTask: null,
      title: '',
      desc: '',
      datEnd: '',
      color: '#fff',
      filteredListTask: []
    }
  },
  computed: {
    ListTask () {
      return this.$store.state.tasks.taskList
    }
  },
  methods: {
    toggleModal () {
      this.isShowModal = !this.isShowModal
    },
    removeTask (index: number) {
      this.$store.commit('tasks/removeTask', index)
    },
    openTaskDetails (element: Itask) {
      this.isShowEditModal = !this.isShowEditModal
      this.selectedTask = element
    },
    closeModal () {
      this.isShowEditModal = false
    },
    getTime (time: string) {
      return moment(time).format('DD/MM/YYYY')
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
