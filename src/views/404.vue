<template lang="pug">
.wrapper
.text
  h1 404
  h4 Page not found
  button(@click="redirect()") Go home
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    redirect () {
      this.$router.push({ path: '/' })
    }
  }
})
</script>
<style scoped>
  .wrapper {
    background: #000 url("../assets/fon404.jpeg");
    background-size: 100%;
    height: 100vh;
    filter: blur(8px);
  }
  h1 {
    font-size: 170px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 30px;
  }
  h4 {
    font-size: 70px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 10px;
  }
  .text {
    text-align: center;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  button {
    border-radius: 8px;
    padding: 5px;
    background-color: aquamarine;
    cursor: pointer;
  }
</style>
