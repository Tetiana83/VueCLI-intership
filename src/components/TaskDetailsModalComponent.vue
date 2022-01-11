<template lang="pug">
.window-wrapper
  .modal-task-wrapper
    h3(v-if="!isEdit") {{selectedTask.title}}
    input(v-else v-model="tempTitle" @input="isTextEdit = true")
    p(v-if="!isEdit") {{selectedTask.desc}}
    textarea(v-else v-model="tempDesc" @input="isTextEdit = true")
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
    closeModal: Function,
    updateSelectedTask: Function
  },
  data () {
    return {
      isEdit: false,
      isTextEdit: false,
      tempDesc: '',
      tempTitle: ''
    }
  },
  mounted () {
    this.tempDesc = this.selectedTask.desc
    this.tempTitle = this.selectedTask.title
  },
  methods: {
    cancelBtn () {
      this.isEdit = !this.isEdit
      this.isTextEdit = !this.isTextEdit
      this.$emit('closeModal')
      this.tempTitle = ''
      this.tempDesc = ''
    },
    saveBtn () {
      this.isEdit = !this.isEdit
      this.isTextEdit = !this.isTextEdit
      this.$emit('closeModal')
      const data = {
        title: this.tempTitle,
        desc: this.tempDesc
      }
      this.$emit('updateSelectedTask', data)
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
