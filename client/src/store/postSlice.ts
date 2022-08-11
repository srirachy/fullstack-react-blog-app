import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Key } from 'react';
import type { RootState } from './index.js';

type PostPropNoId = {
  title: String;
  body: String;
  community: String;
  userName: String;
  slugifiedName: String;
};

// type PostProps = PostPropNoId | { _id: Key | null | undefined };
type PostProps = {
  _id: Key | null | undefined;
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
  post: PostProps;
};

const initialState = {
  loading: true,
  error: false,
  posts: [],
  post: {},
} as unknown as PostTypes;

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async () => {
    const res = await axios.get('http://localhost:9000/api/posts');
    return res.data;
  },
);

export const getPostById = createAsyncThunk(
  'posts/getPostById',
  async (id: String) => {
    const res = await axios.get(
      `http://localhost:9000/api/posts/${id}`,
    );
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
  }: PostPropNoId) => {
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
    return res.data;
  },
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id: String) => {
    await axios.delete(`http://localhost:9000/api/posts/${id}`);
  },
);

// export const updatePost = createAsyncThunk();

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
        console.log(action.payload);
        state.posts.push(action.payload);
      })
      .addCase(getPostById.fulfilled, (state, { payload }) => {
        console.log(payload.data);
        state.post = payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.error = false;
        state.loading = true;
        state.posts = [];
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        console.log(action.payload);
        state.error = false;
        state.loading = false;
      })
      .addCase(deletePost.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.posts = [];
      });
  },
});

export const getPost = (state: RootState) => state;

export default postSlice.reducer;
