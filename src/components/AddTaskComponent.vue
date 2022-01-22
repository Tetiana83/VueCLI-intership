<template lang="pug">
.window-wrapper
  form.form
    .form-content
      span.task-desc-title
        input(type="text" placeholder="Enter task title" required v-model="title")
        textarea(type="text" placeholder="Enter task description" required v-model="desc")
      .calendar
        v-date-picker(v-model='datEnd', :min-date='new Date()')
    button(@click='AddTask()') Add
</template>
<script lang="ts">
import { StatusTaskEnum } from '@/enums/task.status.enum'
import Itask from '@/types/tasks.interface'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    taskAdd: Function,
    toggleModal: Function
  },
  data () {
    return {
      title: '',
      desc: '',
      datEnd: ''
    }
  },
  methods: {
    AddTask () {
      if (this.title !== '' && this.desc !== '' && this.datEnd !== '') {
        const task: Itask = {
          id: null,
          title: this.title,
          desc: this.desc,
          datEnd: new Date(this.datEnd).toISOString(),
          new: true,
          status: StatusTaskEnum.Todo
        }
        this.$store.commit('tasks/addTask', task)
        this.title = ''
        this.desc = ''
        this.datEnd = ''
        this.$emit('toggleModal')
      } else {
        alert('Fill the form, please!')
      }
    }
  }
})
</script>

<style scoped lang="scss">
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
  .form-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .task-desc-title {
    display: flex;
    flex-direction: column;
    width: 380px;
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
  input {
    height: 20%;
    margin-bottom: 5px;
  }
  textarea {
    height: 75%;
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
</style>
