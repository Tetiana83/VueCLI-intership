import { StatusTaskEnum } from '@/enums/task.status.enum'
import Itask from '@/types/tasks.interface'
import moment from 'moment'
import { createStore } from 'vuex'

export default createStore({
  state: {
    taskList: [
      {
        id: 1,
        title: 'Create a video',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        datEnd: '2022-01-22T13:37:41.459+00:00',
        new: false,
        status: StatusTaskEnum.Inprogress
      },
      {
        id: 2,
        title: 'Practical video',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        datEnd: '2021-11-01T13:37:41.459+00:00',
        new: false,
        status: StatusTaskEnum.Inprogress
      },
      {
        id: 3,
        title: 'Buy bread',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        datEnd: '2022-01-07T13:37:41.459+00:00',
        new: false,
        status: StatusTaskEnum.Todo
      },
      {
        id: 4,
        title: 'Eat bread',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        datEnd: '2022-01-05T13:37:41.459+00:00',
        new: false,
        status: StatusTaskEnum.Done
      },
      {
        id: 5,
        title: 'Homework',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        datEnd: '2022-05-10T13:37:41.459+00:00',
        new: false,
        status: StatusTaskEnum.Done
      }
    ],
    notifiCount: 3,
    pictures: [
      { id: 1, title: 'The first picture', url: 'https://picsum.photos/id/1/200/200' },
      { id: 2, title: 'The second picture', url: 'https://picsum.photos/id/2/200/200' },
      { id: 3, title: 'The third picture', url: 'https://picsum.photos/id/3/200/200' },
      { id: 4, title: 'The fourth picture', url: 'https://picsum.photos/id/4/200/200' }
    ],
    activityList: [
      { id: 1, text: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users', time: '8:40 PM', class: 'green-icon' },
      { id: 2, text: 'Emilee Simchenko commented on Account for teams and personal in bottom style', time: '7:32 PM', class: 'blue-icon' },
      { id: 3, text: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects', time: '6:02 PM', class: 'yellow-icon' }
    ]
  },
  mutations: {
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
    },
    setNotifiCount (state, inx) {
      state.notifiCount = inx
    }
  },
  actions: {
  }
})
