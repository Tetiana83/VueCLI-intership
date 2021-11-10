<template lang="pug">
.nav-bar-wrapper
  ul
    li(v-for='(elem, index) in navBar' :key='index')
      router-link.first(:to='elem.link' :class='{ active: elem.isActive }' @click='navActiveToggle(elem)') {{elem.title}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InavBarElem from '../types/nav-bar.interface'

export default defineComponent({
  props: {
    navBar: Array,
    default: function () {
      return []
    }
  },
  methods: {
    navActiveToggle (elem: InavBarElem) {
      this.navBar.forEach(element => {
        element.isActive = false
      })
      elem.isActive = true
    }
  }
})
</script>
