// import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import communityReducer from './communitySlice';
import postReducer from './postSlice';

export const store = configureStore({
  reducer: {
    community: communityReducer,
    posts: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
