<template lang="pug">
form.form
  input(type="text" placeholder="Enter task title" required v-model="title")
  textarea(type="text" placeholder="Enter task description" required v-model="desc")
  button(@click="AddTask()") Add
transition-group(name='bounce' tag='p')
  .content-section(v-for='(task, index) in array' :key='task.id' :class="{blink: task.new}")
    .task-wrapper
      .task-icon(:style="{ 'background-color': task.color }" @click="TaskDone(index)")
      div
        h3 {{task.title}}
        p {{task.desc}}
      .time
        span {{task.datEnd}}
      button.task-icon(@click="removeTask(index)")
        svg(xmlns='http://www.w3.org/2000/svg' height='24px' viewbox='0 0 24 24' width='24px' fill='#000000')
          path(d='M0 0h24v24H0z' fill='none')
          path(d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z')
</template>
<script lang="ts">
import Itask from '@/types/tasks.interface'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    ListTask: {
      type: Array
    },
    taskDone: Function,
    taskRemove: Function,
    taskAdd: Function
  },
  data () {
    return {
      title: '',
      desc: '',
      datEnd: '',
      color: '#fff',
      array: []
    }
  },
  mounted () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    this.ListTask.forEach((task: Itask, index) => {
      setTimeout(() => {
        this.array.push(task)
      }, 500 * index)
    })
  },
  methods: {
    TaskDone (index: number) {
      this.$emit('taskDone', index)
    },
    removeTask (index: number) {
      this.array.splice(index, 1)
      this.$emit('taskRemove', index)
    },
    AddTask () {
      if (this.title !== '' && this.desc !== '') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        const task: Itask = { id: this.ListTask.length + 1, title: this.title, desc: this.desc, datEnd: new Date().toLocaleString().split(',')[0], color: this.color, new: true }
        this.array.unshift(task)
        this.$emit('taskAdd', task)
        this.title = ''
        this.desc = ''
      } else {
        alert('Fill the form, please!')
      }
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
  .form {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 3px;
    background-color: #f7f6f3;
    padding: 15px;
    box-shadow: 0 0 1px ghostwhite;
  }
  ::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    color: gray;
  }
  .form > input {
    padding: 10px;
    margin-bottom: 10px;
    border: #f7f6f3;
  }
  .form > textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: #f7f6f3;
  }
  .form > button {
    font-weight: bold;
    padding: 10px 0;
    border-color: rgb(239, 239, 239), rgb(59, 59, 59);
    cursor: pointer;
  }
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
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
