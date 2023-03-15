import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  
  const  user = "nmhmd";



  return (
    <div className="app">
      <Routes>
        {!user ? (
          <Route path='/' element={<Login/>}/>
        ): (<Route path='/' element={<Home/>}/>)}
      </Routes>
    </div>
  );
}

export default App;
