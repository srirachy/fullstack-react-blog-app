import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';

export const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    user: 'meow',
    category:''
  },
  reducers: {
    changeName: (state) => {
      return state;
    },
    setCategory:(state,action)=>{
      state.category = action.payload
    }
  },
});

export const { changeName,setCategory } = exampleSlice.actions;

export const getCategory = (state:RootState)=>state.example.category

export default exampleSlice.reducer;
