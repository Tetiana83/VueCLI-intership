import { StatusTaskEnum } from '@/enums/task.status.enum'

export default interface Itask {
    id: number;
    title: string;
    desc: string;
    datEnd: string;
    new: boolean;
    status: StatusTaskEnum;
}
