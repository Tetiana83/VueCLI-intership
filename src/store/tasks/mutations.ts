/* eslint-disable */
import Itask from '@/types/tasks.interface'
import moment from 'moment'

export default {
  initState (state: { taskList: Itask[] }, taskList: Itask[]) {
    state.taskList = taskList
  },
  removeTask (state: { taskList: Itask[] }, index: number) {
    state.taskList.splice(index, 1)
  },
  addTask (state: { taskList: Itask[] }, task: Itask) {
    state.taskList.unshift(task)
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
    const index = state.taskList.findIndex((item) => item._id === task._id)
    state.taskList[index].title = task.title
    state.taskList[index].desc = task.desc
  }
}
