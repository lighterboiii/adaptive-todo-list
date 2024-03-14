import { FC } from "react";
import style from './Task.module.css';
import { toggleTaskCompletion } from "../../services/todoSlice";
import { ITask } from "../../utils/types";

interface ITaskProps {
  task: ITask;
}

const Task: FC<ITaskProps> = ({ task }) => {
  return (
    <li key={task.id} className={style.list__element}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => { toggleTaskCompletion(task.id) }}
        className={style.list__checkbox}
      />
      <p className={style.list__name}>{task.name}</p>
      <p className={style.list__description}>{task.description}</p>
    </li>
  )
};

export default Task;