import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignUp from './pages/signup';
import Main from './pages/Main';
import ViewPost from './pages/ViewPost';
import SubmitPost from './pages/SubmitPost';
import ViewCommunity from './pages/ViewCommunity';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/submit" element={<SubmitPost />} />
        <Route
          path="/c/:communityName/post/:id"
          element={<ViewPost />}
        />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/c/:community" element={<ViewCommunity />} />
      </Routes>
    </>
  );
}

export default App;
