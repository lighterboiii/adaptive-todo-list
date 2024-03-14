import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../utils/types';

const initialState: ITask[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.push({
        ...action.payload,
      })
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      return state.filter(task => task.id !== taskId);
    },
    toggleTaskCompletion: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      const task = state.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setTasks: (state, action: PayloadAction<ITask[]>) => {
      return state.concat(action.payload);
    }
  }
})

export const { addTask, deleteTask, toggleTaskCompletion, setTasks } = todoSlice.actions;
export default todoSlice.reducer;