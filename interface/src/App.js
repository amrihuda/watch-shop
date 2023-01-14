import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import { Main } from './components'

import {
  Home, Login, Register,
  Item, ItemList, ItemAdd, ItemEdit,
  Brand, BrandList, BrandAdd, BrandEdit,
  Category, CategoryList, CategoryAdd, CategoryEdit,
  UserEdit
} from './pages'
import { userGetById } from './axios/userAxios';

function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  const [imageURL, setImageURL] = useState('')
  const [searchKey, setSearchKey] = useState('')

  const loginHandler = (result) => {
    setLoginStatus(result)
  }

  const imageHandler = () => {
    userGetById(result => {
      const URL = process.env.REACT_APP_API_DOMAIN + '/' + result.image
      setImageURL(URL)
    })
  }

  const watchesList = useRef(null)
  const searchHandler = (result) => {
    setSearchKey(result)
    window.scrollTo({
      top: watchesList.current?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (localStorage.getItem('user_token')) {
      setLoginStatus(true)
      imageHandler()
    } else {
      setLoginStatus(false)
    }
  }, [loginStatus])

  return (
    <>
      <Routes>
        <Route path="/" element={<Main loginStatus={loginStatus} loginHandler={loginHandler} imageURL={imageURL} searchHandler={searchHandler} />} >
          <Route path='' element={<Home loginStatus={loginStatus} searchKey={searchKey} watchesList={watchesList} />} />
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
          <Route path='/profile' element={<UserEdit imageHandler={imageHandler} />} />
        </Route>
        <Route path='/login' element={<Login loginStatus={loginStatus} loginHandler={loginHandler} />} />
        <Route path='/Register' element={<Register loginStatus={loginStatus} />} />
      </Routes>
    </>
  );
}

export default App;
