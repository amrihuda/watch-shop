import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Main = (props) => {
    const { loginStatus, loginHandler } = props

    return (
        <>
            <Navbar loginStatus={loginStatus} loginHandler={loginHandler} />
            <div className='container pb-5'>
                <Outlet />
            </div>
        </>
    )
}

export default Main