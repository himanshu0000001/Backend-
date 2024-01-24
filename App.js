import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sign from './components/sign/Sign';
import Login from './components/login/Login';
import Dashboard from "./components/Dashboard";
import Addstudent from './components/CRAD/Addstudent';
import Deletestudent from './components/CRAD/Deletestudent';
import Readstudent from './components/CRAD/Readstudent';
import Updatestudent from './components/CRAD/Updatestudent';
function App() {
  return (
    <React.Fragment>

      <Routes>
        <Route index element={<Home/>} />
        <Route path='/sign' element={<Sign/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/addstudent' element={<Addstudent/>}/>
        <Route path='/updatestudent' element={<Updatestudent/>}/>
        <Route path='/deletestudent' element={<Deletestudent/>}/>
        <Route path='/readstudent' element={<Readstudent/>}/>
        <Route path='*' element={<div></div>} />
      </Routes>


    </React.Fragment>


  );
}

export default App;
