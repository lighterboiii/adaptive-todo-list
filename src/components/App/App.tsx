import { useAppSelector } from '../../services/typedHooks';
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';
import style from './App.module.css';

function App() {
  const tasks = useAppSelector(store => store.todos);
  console.log(tasks);
  return (
    <div className={style.app}>
      <h1 className={style.app__title}>Добавьте задачу</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
