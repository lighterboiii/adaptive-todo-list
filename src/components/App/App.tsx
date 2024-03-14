import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/typedHooks';
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';
import style from './App.module.css';
import { setTasks } from '../../services/todoSlice';

function App() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(store => store.todos);
  console.log(tasks);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    console.log(storedTasks);
    if (storedTasks) {
      dispatch(setTasks(JSON.parse(storedTasks)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className={style.app}>
      <h1 className={style.app__title}>Добавьте задачу</h1>
      <AddTask />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
