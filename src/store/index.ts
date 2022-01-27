import { createStore } from 'vuex'
import tasks from './tasks'
import activities from './activities'
import pictures from './pictures'
import app from './app'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  modules: {
    tasks,
    activities,
    pictures,
    app
  },
  plugins: [vuexLocal.plugin]
})
