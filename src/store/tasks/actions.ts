import Itask from '@/types/tasks.interface'
import taskApi from '../../service/tasksApi'

export default {
  getTasks (ctx: any) {
    taskApi.list().then((res) => {
      ctx.commit('initState', res.data)
    })
  },
  createTask (ctx: any, task: Itask) {
    taskApi.create(task).then((res) => {
      ctx.commit('addTask', res.data)
    })
  },
  deleteTask (ctx: any, data: any) {
    taskApi.delete(data.id).then(() => {
      ctx.commit('removeTask', data.index)
    })
  },
  editTask (ctx: any, task: Itask) {
    taskApi.edit(task).then((res) => {
      ctx.commit('updateSelectedTask', res.data)
    })
  }
}
