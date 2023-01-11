import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import { Navbar, Main } from './components'
import { LoginPage } from './pages';

function App() {
  const [loginStatus, setLoginStatus] = useState(false)

  const loginHandler = (result) => {
    setLoginStatus(result)
  }

  useEffect(() => {
    if (localStorage.getItem('user_token')) {
      setLoginStatus(true)
    } else {
      setLoginStatus(false)
    }
  }, [loginStatus])

  return (
    <>
      <Navbar loginStatus={loginStatus} loginHandler={loginHandler} />
      <Main loginStatus={loginStatus} loginHandler={loginHandler} />
      {/* <Routes>
        <Route path="/" element={
          <>
            <Navbar loginStatus={loginStatus} loginHandler={loginHandler} />
            <Main loginStatus={loginStatus} loginHandler={loginHandler} />
          </>
        } />
        <Route path='/login' element={<LoginPage loginStatus={loginStatus} loginHandler={loginHandler} />} />
      </Routes> */}

      {/* {loginStatus ?
        <HomePage loginStatus={loginStatus} loginHandler={loginHandler}></HomePage>
        :
        <LoginPage loginHandler={loginHandler}></LoginPage>
      } */}
    </>
  );
}

export default App;
