import Itask from '@/types/tasks.interface'
import http from './api'

export default {
  list () {
    return http.get('/tasks')
  },
  create (task: Itask) {
    return http.post('/tasks', task)
  },
  delete (id: string) {
    return http.delete(`/tasks/${id}`)
  },
  edit (task: Itask) {
    const data = {
      title: task.title,
      desc: task.desc
    }
    return http.patch(`/tasks/${task._id}`, data)
  }
}
