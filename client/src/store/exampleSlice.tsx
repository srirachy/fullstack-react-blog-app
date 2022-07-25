import { createSlice } from '@reduxjs/toolkit';

export const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    user: 'meow',
  },
  reducers: {
    changeName: (state) => {
      return state;
    },
  },
});

export const { changeName } = exampleSlice.actions;

export default exampleSlice.reducer;
