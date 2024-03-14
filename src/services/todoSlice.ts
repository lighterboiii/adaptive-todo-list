import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  name: string;
  description: string;
  completed: boolean;
}

const initialState: Task[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push({
        ...action.payload,
        id: state.length + 1,
      })
    }
  }
})

export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;