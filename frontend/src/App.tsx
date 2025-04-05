import React from 'react';
import logo from './logo.svg';
import './App.css';
import  AppBar  from './components/AppBar';
import Home from '../src/screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRegister from './screens/UserRegister';


function App() {
  return(
    <Router>
      <AppBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<UserRegister/>}/>
      </Routes>

    </Router>
  )
}

export default App;
