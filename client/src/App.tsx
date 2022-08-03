import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/index';
import Home from './pages';
import AddPost from './pages/AddPost';
import SignUp from './pages/signup';
import ViewPost from './pages/ViewPost';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ViewPost" element={<ViewPost />} />
        <Route path="/AddPost" element={<AddPost />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
