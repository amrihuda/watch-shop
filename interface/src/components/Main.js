import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
    Home,
    Brand, BrandList, BrandAdd, BrandEdit
} from '../pages'

const Main = (props) => {
    const { loginStatus, loginHandler } = props

    return (
        <div className='container'>

            <Routes>
                <Route path='/' element={<Home loginStatus={loginStatus} loginHandler={loginHandler} />} />
                <Route path='brands' element={<Brand />}>
                    <Route path='' element={<BrandList />} />
                    <Route path='create' element={<BrandAdd />} />
                    <Route path='edit'>
                        <Route path=':id' element={<BrandEdit />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export default Main