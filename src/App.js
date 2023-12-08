import React from 'react';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './Pages/Login/Login';
import Lock from './Pages/Lock/Lock';
import Teaser from './Pages/Trailer/Teaser';
import Poster from './Store/PosterContext';
import BannerTrailer from './Pages/Trailer/BannerTrailer';
function App() {
  return (
    <div className="App">
      <Poster>
    <Router>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/Netflix.com' element={<SignUp/>}/>
        <Route path='/signup' element={<Login/>}/>
        <Route path='/netflix.com' element={<Home/>}/>
        <Route path='/signin' element={<Lock/>}/>
        <Route path='/teaser' element={<Teaser/>}/>
        <Route path='/Bteaser' element={<BannerTrailer/>}/>
      </Routes>
    </Router>
    </Poster>
    </div>
  );
}

export default App;
