import { createSlice } from '@reduxjs/toolkit';

type ExampleTypes = {};

const initialState = {} as ExampleTypes;

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    changeName: (state) => {
      return state;
    },
  },
});

export const { changeName } = exampleSlice.actions;

export default exampleSlice.reducer;
