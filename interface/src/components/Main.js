import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Main = (props) => {
    const { loginStatus, loginHandler, imageURL, searchHandler } = props

    return (
        <>
            <Navbar loginStatus={loginStatus} loginHandler={loginHandler} imageURL={imageURL} searchHandler={searchHandler} />
            <div className='container pb-5'>
                <Outlet />
            </div>
        </>
    )
}

export default Main