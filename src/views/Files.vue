<template>
  <h1>All Files</h1>
  <draggable
  v-model="myArray"
  group="people"
  @start="drag=true"
  @end="drag=false"
  item-key="id">
  <template #item="{element}">
    <div>{{element.name}}</div>
   </template>
</draggable>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import draggable from 'vuedraggable'
export default defineComponent({
  components: {
    draggable
  },
  data () {
    return {
      drag: false,
      myArray: [
        {
          name: 'John',
          id: 0
        },
        {
          name: 'Joao',
          id: 1
        },
        {
          name: 'Jean',
          id: 2
        }
      ]
    }
  }
})
</script>
