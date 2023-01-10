import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import LoginPage from './pages/Login'
import HomePage from './pages/Home'

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
      {loginStatus ?
        <HomePage loginStatus={loginStatus} loginHandler={loginHandler}></HomePage> :
        <LoginPage loginHandler={loginHandler}></LoginPage>
      }
    </>
  );
}

export default App;
