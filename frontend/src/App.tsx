import React from 'react';
import logo from './logo.svg';
import './App.css';
import  AppBar  from './components/AppBar';
import Home from '../src/screens/Home'
function App() {
  return (
    <div className="App">
        <AppBar/>
        <Home/>
    </div>
  );
}

export default App;
