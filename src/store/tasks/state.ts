import { StatusTaskEnum } from '@/enums/task.status.enum'

export default {
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
  ]

}
