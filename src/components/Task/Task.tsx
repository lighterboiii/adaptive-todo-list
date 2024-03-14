import { FC } from "react";
import style from './Task.module.css';
import { deleteTask, toggleTaskCompletion } from "../../services/todoSlice";
import { ITask } from "../../utils/types";
import { useAppDispatch } from "../../services/typedHooks";

interface ITaskProps {
  task: ITask;
}

const Task: FC<ITaskProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id))
  };

  const handleTaskCompketion = (id: number) => {
    dispatch(toggleTaskCompletion(id));
  }

  return (
    <li key={task.id} className={style.task}>
      <label htmlFor={`checkbox-${task.id}`} className={style.task__label}>
        Отметить как выполненное
        <input
          type="checkbox"
          id={`checkbox-${task.id}`}
          checked={task.completed}
          onChange={() => handleTaskCompketion(task.id)}
          className={style.task__checkbox}
        />
      </label>
      <div className={style.task__content}>
        <h3 className={style.task__name}>{task.name}</h3>
        <p className={style.task__description}>{task.description}</p>
      </div>
      <button
        className={style.task__deleteButton}
        onClick={() => handleDeleteTask(task.id)}
      >
        &times;
      </button>
    </li>
  )
};

export default Task;