import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from './index.js';

type PostProps = {
  title: String;
  body: String;
  community: String;
  userName: String;
  slugifiedName: String;
};

type PostTypes = {
  loading: Boolean;
  error: Boolean;
  posts: PostProps[];
};

const initialState = {
  loading: true,
  error: false,
  posts: [],
} as PostTypes;

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const res = await axios.get('http://localhost:9000/api/posts');
    return res.data;
  },
);

export const addPost = createAsyncThunk(
  'posts/addPost',
  async ({
    title,
    body,
    community,
    userName,
    slugifiedName,
  }: PostProps) => {
    const newPost = {
      title,
      body,
      community,
      userName,
      slugifiedName,
    };
    const res = await axios.post(
      'http://localhost:9000/api/posts',
      newPost,
    );
    console.log(res);
    console.log(newPost);
    return newPost;
  },
);

// export const updatePost = createAsyncThunk();
// export const deletePost = createAsyncThunk();

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changeName: (state) => {
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.error = false;
        state.loading = true;
        state.posts = [];
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        console.log(payload.data);
        state.error = false;
        state.loading = false;
        state.posts = payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.posts = [];
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export const getPost = (state: RootState) => state;

export default postSlice.reducer;
