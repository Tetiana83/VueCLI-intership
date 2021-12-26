<template lang="pug">
.window-wrapper
  .modal-task-wrapper
    h3 {{selectedTask.title}}
    p(v-if="!isEdit") {{selectedTask.desc}}
    textarea(v-else v-model="tempDesc" @input="isTextEdit = true")
    p {{selectedTask.datEnd}}
    .btn-edit
      button(@click="isEdit = true" v-if="!isEdit") Edit
      button(v-if="isEdit" @click="cancelBtn()") Cancel
      button(v-if="isTextEdit" @click="saveBtn()") Save
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
  },
  props: {
    selectedTask: Object,
    closeModal: Function,
    updateSelectedTaskDesc: Function
  },
  data () {
    return {
      isEdit: false,
      isTextEdit: false,
      tempDesc: ''
    }
  },
  mounted () {
    this.tempDesc = this.selectedTask.desc
  },
  methods: {
    cancelBtn () {
      this.isEdit = !this.isEdit
      this.isTextEdit = !this.isTextEdit
      this.$emit('closeModal')
      this.tempDesc = ''
    },
    saveBtn () {
      this.isEdit = !this.isEdit
      this.isTextEdit = !this.isTextEdit
      this.$emit('closeModal')
      this.$emit('updateSelectedTaskDesc', this.tempDesc)
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
