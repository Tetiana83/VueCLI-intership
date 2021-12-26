<template lang="pug">
button.create(@click='modal = !modal') Create a new task
AddTaskComponent(@taskAdd="taskAdd" v-if='modal' @toggleModal='toggleModal')
transition-group(name='bounce' tag='p')
  .content-section(v-for='(task, index) in listTaskRender' :key='task.id' :class="{blink: task.new}")
    .task-wrapper
      .task-icon(:class="{todo: task.status === 'TODO', inprogress: task.status === 'INPROGRESS', done: task.status === 'DONE'}"  @click="TaskDone(index)")
      .task-body(@click='taskDetails(task)')
        h3 {{task.title}}
        p {{task.desc}}
      .time
        span {{task.datEnd}}
      button.task-icon(@click="removeTask(index)")
        img(src='../assets/delete.svg' alt='')
TaskDetailsModalComponent(v-if="editModal" :selectedTask="selectedTask" @updateSelectedTaskDesc="updateSelectedTaskDesc" @closeModal="closeModal")
</template>
<script lang="ts">
import Itask from '@/types/tasks.interface'
import AddTaskComponent from '../components/AddTaskComponent.vue'
import TaskDetailsModalComponent from './TaskDetailsModalComponent.vue'
import { defineComponent } from 'vue'

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
      editModal: false,
      modal: false,
      selectedTask: null,
      title: '',
      desc: '',
      datEnd: '',
      color: '#fff',
      listTaskRender: []
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
      this.modal = !this.modal
    },
    TaskDone (index: number) {
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
    taskDetails (element: Itask) {
      this.editModal = !this.editModal
      this.selectedTask = element
    },
    closeModal () {
      this.editModal = false
    },
    updateSelectedTaskDesc (tempDesc: string) {
      this.selectedTask.desc = tempDesc
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
