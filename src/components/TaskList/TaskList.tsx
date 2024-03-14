import { FC, useState } from "react";
import style from './TaskList.module.css';
import { ITask } from "../../utils/types";
import Task from "../Task/Task";

interface ITaskList {
  tasks: ITask[]
}

const TaskList: FC<ITaskList> = ({ tasks }) => {
  const [isFiltered, setFiltered] = useState(false);

  const filteredTasks = isFiltered ? tasks.filter(task => task.completed) : tasks;

  return (
    <div className={style.tasks}>
      {tasks.length > 1 && <button className={style.tasks__button} onClick={() => setFiltered(!isFiltered)}>
        Показать выполненные
      </button>}
      <ul className={style.list}>
        {filteredTasks.map(task => (
          <Task task={task} />
        ))}
      </ul>
    </div>

  )
};

export default TaskList;