import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignUp from './pages/signup';
import Main from './pages/Main';
import ViewPost from './pages/ViewPost';
import SubmitPost from './pages/SubmitPost';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<ViewPost />} />
        <Route path="/submit" element={<SubmitPost />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
