import state from './state'
import mutations from './mutations'
import actions from './actions'
import { Module } from 'vuex'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store: Module<any, any> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default store
