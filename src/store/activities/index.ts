import state from './state'
import mutations from './mutations'
import { Module } from 'vuex'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store: Module<any, any> = {
  namespaced: true,
  state,
  mutations
}

export default store
