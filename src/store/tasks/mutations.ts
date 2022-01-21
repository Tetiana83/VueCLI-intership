import Itask from '@/types/tasks.interface'
import moment from 'moment'

export default {
  removeTask (state, index: number) {
    state.taskList.splice(index, 1)
  },
  addTask (state, task: Itask) {
    task.id = state.taskList.length + 1
    state.taskList.unshift(task)
  },
  filteredTask (state, searchTitle) {
    const filteredListTask: Itask[] = []
    state.taskList.forEach((task: Itask) => {
      if (task.title.includes(searchTitle)) {
        filteredListTask.push(task)
      }
    })
    state.taskList = filteredListTask
  },
  searchingTaskByDateRange (state, range) {
    const filteredListTask: Itask[] = []
    state.taskList.forEach((task: Itask) => {
      if (moment(task.datEnd).isBetween(range.start, range.end)) {
        filteredListTask.push(task)
      }
    })
    state.taskList = filteredListTask
  },
  updateSelectedTask (state, task) {
    const index = state.taskList.findIndex((item) => item.id === task.id)
    state.taskList[index] = task
  }
}
