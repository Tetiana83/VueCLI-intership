<template lang="pug">
.content-section(v-for='(task, index) in ListTask' :key='task.id')
  .task-wrapper
    .task-icon(:style="{ 'background-color': task.color }" @click="TaskDone(index)")
    div
      h3 {{task.title}}
      p {{task.desc}}
    .time
      span {{task.datEnd}}
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    ListTask: Array,
    taskDone: Function
  },
  methods: {
    TaskDone (index: number) {
      this.$emit('taskDone', index)
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
    margin-right: 10px;
  }
</style>
