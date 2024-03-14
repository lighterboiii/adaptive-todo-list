import { FC } from "react";
import style from './TaskList.module.css';
import { ITask } from "../../utils/types";
import Task from "../Task/Task";

interface ITaskList {
  tasks: ITask[]
}

const TaskList: FC<ITaskList> = ({ tasks }) => {

  return (
    <ul className={style.list}>
      {tasks.map(task => (
        <Task task={task} />
      ))}
    </ul>
  )
};

export default TaskList;