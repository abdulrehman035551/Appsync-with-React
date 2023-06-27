import React, { useState } from 'react';
import "./index.css"
import SearchCompnent from './Apollo/pages/searchCompnent';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './Apollo/pages/Home';
import Header from './Apollo/pages/Header';
import MovieForm from './Apollo/pages/Admin';
import { ToastContainer, toast } from 'react-toastify';
function App() {


  return (
    <div className=' bg-center  bg-no-repeat bg-cover  bg-contain    h-screen w-screen' style={{ backgroundImage: "url('https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/10557/netflix_29.jpg?w=608&ar=default&fit=crop&crop=faces,edges&auto=format')" }}>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<MovieForm/>} />
          <Route path="/search" element={<SearchCompnent />} />
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  )
}

export default App;
