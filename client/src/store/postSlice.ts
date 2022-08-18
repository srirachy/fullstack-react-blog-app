import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Key } from 'react';
import type { RootState } from './index.js';

type PostPropNoId = {
  title: string;
  body: string;
  community: string;
  userName: string;
  slugifiedName: string;
};

type PostProps = PostPropNoId & { _id: Key | null | undefined };
type PostPropObj = PostPropNoId & { curId: Key | null | undefined };

type PostTypes = {
  loading: boolean;
  error: boolean;
  reload: boolean;
  editor: boolean;
  posts: PostProps[];
  post: PostProps;
};

const initialState = {
  loading: true,
  error: false,
  reload: false,
  editor: false,
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

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({
    curId,
    title,
    body,
    community,
    userName,
    slugifiedName,
  }: PostPropObj) => {
    const postObj = {
      title,
      body,
      community,
      userName,
      slugifiedName,
    };
    const id = curId;
    const res = await axios.put(
      `http://localhost:9000/api/posts/${id}`,
      postObj,
    );
    return res.data;
  },
);

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setEditor: (state, { payload }) => {
      state.editor = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.error = false;
        state.loading = false;
        state.posts = payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.error = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(getPostById.fulfilled, (state, { payload }) => {
        state.post = payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.reload = !state.reload;
      })
      .addCase(deletePost.rejected, (state) => {
        state.error = true;
      })
      .addCase(updatePost.fulfilled, (state, { payload }) => {
        state.post = payload;
      });
  },
});

export const getPost = (state: RootState) => state;
export const { setEditor } = postSlice.actions;

export default postSlice.reducer;
