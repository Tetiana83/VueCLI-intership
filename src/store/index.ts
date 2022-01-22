import { createStore } from 'vuex'
import tasks from './tasks'
import activities from './activities'
import pictures from './pictures'
import app from './app'

export default createStore({
  modules: {
    tasks,
    activities,
    pictures,
    app
  }
})
