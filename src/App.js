import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../src/services/AuthService'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './component/Profile';
import Login from './component/Login';
import Register from './component/Register';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
