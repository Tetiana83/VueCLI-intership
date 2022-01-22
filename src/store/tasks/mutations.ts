/* eslint-disable */
import Itask from '@/types/tasks.interface'
import moment from 'moment'

export default {
  initState (state: { taskList: Itask[] }, taskList: Itask[]) {
    state.taskList = taskList
  },
  removeTask (state: { taskList: Itask[] }, index: number) {
    state.taskList.splice(index, 1)
    const cachRemove = JSON.parse(localStorage.taskList)
    cachRemove.splice(index, 1)
    localStorage.taskList = JSON.stringify(cachRemove) 
  },
  addTask (state: { taskList: Itask[] }, task: Itask) {
    task.id = state.taskList.length + 1
    state.taskList.unshift(task)
    const cachList = JSON.parse(localStorage.taskList)
    cachList.unshift(task)
    localStorage.taskList = JSON.stringify(cachList)
  },
  filteredTask (state: { taskList: Itask[] }, searchTitle: string) {
    const filteredListTask: Itask[] = []
    state.taskList.forEach((task: Itask) => {
      if (task.title.includes(searchTitle)) {
        filteredListTask.push(task)
      }
    })
    state.taskList = filteredListTask
  },
  searchingTaskByDateRange (state: { taskList: Itask[] }, range: { start: moment.MomentInput; end: moment.MomentInput }) {
    const filteredListTask: Itask[] = []
    state.taskList.forEach((task: Itask) => {
      if (moment(task.datEnd).isBetween(range.start, range.end)) {
        filteredListTask.push(task)
      }
    })
    state.taskList = filteredListTask
  },
  updateSelectedTask (state: { taskList: Itask[] }, task: Itask) {
    const index = state.taskList.findIndex((item: { id: number }) => item.id === task.id)
    state.taskList[index] = task
    const cachUpdate = JSON.parse(localStorage.taskList)
    const cachIndex = cachUpdate.findIndex((item: { id: number }) => item.id === task.id)
    cachUpdate[cachIndex] = task
    localStorage.taskList = JSON.stringify(cachUpdate)
  }
}
