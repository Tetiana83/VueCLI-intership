<template>
  <div class="content-body">
    <div class="content-wrapper">
        <div class="today"><p>Tasks</p></div>
        <div class="content-section" v-for="task in taskList" :key="task.id">
            <div class="task-wrapper">
              <div class="task-icon" :style="{ 'background-color': task.color }"></div>
              <div>
                <h3>{{task.title}}</h3>
                <p>{{task.desc}}</p>
              </div>
            </div>
            <div class="time"><span>{{task.datEnd}}</span></div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Task',
  data () {
    return {
      taskList: [
        { id: 1, title: 'Lesson 1', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', datEnd: '31/10/2021', color: '#cf9d9d' },
        { id: 2, title: 'Lesson 2', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', datEnd: '01/11/2021', color: '#a52da7' },
        { id: 3, title: 'Lesson 3', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', datEnd: '03/11/2021', color: '#232daf' },
        { id: 4, title: 'Lesson 4', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', datEnd: '05/11/2021', color: '#23af68' },
        { id: 5, title: 'Homework', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', datEnd: '10/11/2021', color: '#af8a23' }
      ]
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
