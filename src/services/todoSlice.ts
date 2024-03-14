import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITask {
  id: number;
  name: string;
  description: string;
  completed: boolean;
}

const initialState: ITask[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.push({
        ...action.payload,
        id: state.length + 1,
      })
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      const taskToDelete = state.findIndex(task => task.id === taskId);
      taskToDelete !== 1 && state.splice(taskToDelete, 1); 
    },
    toggleTaskCompletion: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      const task = state.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    }
  }
})

export const { addTask, deleteTask, toggleTaskCompletion } = todoSlice.actions;
export default todoSlice.reducer;