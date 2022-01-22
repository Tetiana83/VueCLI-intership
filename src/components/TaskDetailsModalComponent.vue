<template lang="pug">
.window-wrapper
  .modal-task-wrapper
    input(v-if="isEdit" v-model="form.title" @input="isTextEdit = true")
    h3(v-else) {{selectedTask.title}}
    textarea(v-if="isEdit" v-model="form.desc" @input="isTextEdit = true")
    p(v-else) {{selectedTask.desc}}
    p {{getTime(selectedTask.datEnd)}}
    .btn-edit
      button(@click="isEdit = true" v-if="!isEdit && selectedTask.status !== 'DONE'") Edit
      button(v-if="isEdit" @click="cancelBtn()") Cancel
      button(v-if="isTextEdit" @click="saveBtn()") Save
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import moment from 'moment'

export default defineComponent({
  components: {
  },
  props: {
    selectedTask: Object,
    closeModal: Function
  },
  data () {
    return {
      isEdit: false,
      isTextEdit: false,
      form: {
        desc: '',
        title: ''
      }
    }
  },
  created () {
    this.form = Object.assign(this.form, this.selectedTask)
  },
  methods: {
    cancelBtn () {
      this.isEdit = !this.isEdit
      this.isTextEdit = !this.isTextEdit
      this.$emit('closeModal')
      this.form = { desc: '', title: '' }
    },
    saveBtn () {
      this.isEdit = !this.isEdit
      this.isTextEdit = !this.isTextEdit
      this.$emit('closeModal')
      this.$store.commit('tasks/updateSelectedTask', this.form)
    },
    getTime (time: string) {
      return moment(time).format('DD/MM/YYYY')
    }
  }
})
</script>
<style scoped>
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
