import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import ViewPost from './pages/ViewPost';

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/post/:id" element={<ViewPost />} />
    </Routes>
  );
}

export default App;
