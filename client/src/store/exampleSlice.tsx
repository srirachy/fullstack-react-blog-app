import { createSlice } from '@reduxjs/toolkit';
// import { RootState } from '.';

type ExampleTypes = {};

const initialState = {} as ExampleTypes;

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    changeName: (state) => {
      return state;
    },
    // setCategory: (state, action) => {
    //   state.category = action.payload;
    // },
  },
});

export const { changeName } = exampleSlice.actions;
// export const { changeName, setCategory } = exampleSlice.actions;

// export const getCategory = (state: RootState) =>
//   state.example.category;

export default exampleSlice.reducer;
