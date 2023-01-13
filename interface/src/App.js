import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import { Main } from './components'

import {
  Home, Login, Register,
  Item, ItemList, ItemAdd, ItemEdit,
  Brand, BrandList, BrandAdd, BrandEdit,
  Category, CategoryList, CategoryAdd, CategoryEdit
} from './pages'

function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  const [searchKey, setSearchKey] = useState('')

  const loginHandler = (result) => {
    setLoginStatus(result)
  }

  const searchHandler = (result) => {
    setSearchKey(result)
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
      <Routes>
        <Route path="/" element={<Main loginStatus={loginStatus} loginHandler={loginHandler} searchHandler={searchHandler} />} >
          <Route path='' element={<Home loginStatus={loginStatus} searchKey={searchKey} />} />
          <Route path='items' element={<Item />}>
            <Route path='' element={<ItemList loginStatus={loginStatus} searchKey={searchKey} />} />
            <Route path='create' element={<ItemAdd />} />
            <Route path='edit'>
              <Route path=':id' element={<ItemEdit />} />
            </Route>
          </Route>
          <Route path='brands' element={<Brand />}>
            <Route path='' element={<BrandList loginStatus={loginStatus} searchKey={searchKey} />} />
            <Route path='create' element={<BrandAdd />} />
            <Route path='edit'>
              <Route path=':id' element={<BrandEdit />} />
            </Route>
          </Route>
          <Route path='categories' element={<Category />}>
            <Route path='' element={<CategoryList loginStatus={loginStatus} searchKey={searchKey} />} />
            <Route path='create' element={<CategoryAdd />} />
            <Route path='edit'>
              <Route path=':id' element={<CategoryEdit />} />
            </Route>
          </Route>
        </Route>
        <Route path='/login' element={<Login loginStatus={loginStatus} loginHandler={loginHandler} />} />
        <Route path='/Register' element={<Register loginStatus={loginStatus} />} />
      </Routes>
    </>
  );
}

export default App;
