import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from './index.js';

type ComTypes = {
  name: String;
};

type CommunityTypes = {
  loading: Boolean;
  error: Boolean;
  community: ComTypes[];
};

const initialState = {
  loading: true,
  error: false,
  community: [],
} as CommunityTypes;

export const getCommunities = createAsyncThunk(
  'communities/getCommunities',
  async () => {
    const res = await axios.get(
      'http://localhost:9000/api/communities',
    );
    return res.data;
  },
);

export const addCommunity = createAsyncThunk(
  'communities/addCommunity',
  async (commName: String) => {
    const newComm = { name: commName };
    const res = await axios.post(
      'http://localhost:9000/api/communities',
      newComm,
    );
    console.log(res);
    console.log(newComm);
    return newComm;
  },
);

export const communitySlice = createSlice({
  name: 'communities',
  initialState,
  reducers: {
    changeName: (state) => {
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCommunities.pending, (state) => {
        state.error = false;
        state.loading = true;
        state.community = [];
      })
      .addCase(getCommunities.fulfilled, (state, { payload }) => {
        console.log(payload.data);
        state.error = false;
        state.loading = false;
        state.community = payload;
      })
      .addCase(getCommunities.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.community = [];
      })
      .addCase(addCommunity.fulfilled, (state, action) => {
        state.community.push(action.payload);
      });
  },
});

export const getCommunity = (state: RootState) => state;

export default communitySlice.reducer;
