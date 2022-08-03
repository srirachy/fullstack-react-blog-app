import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/index.jsx';

type ExampleTypes = {
  category: string;
};

const initialState = {
  category: '',
} as ExampleTypes;

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    changeName: (state) => {
      return state;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      // const category = payload;
      // return category;
      state.category = action.payload;
    },
  },
});

export const { changeName, setCategory } = exampleSlice.actions;

export const getCategory = (state: RootState) => state;

export default exampleSlice.reducer;
