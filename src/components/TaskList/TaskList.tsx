import { FC } from "react";
import style from './TaskList.module.css';

const TaskList: FC = () => {

  return (
    <div className={style.list}>
      <p>TaskList</p>
    </div>
  )
};

export default TaskList;