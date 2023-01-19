import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../components'

const Main = (props) => {
    const { loginStatus, loginHandler, imageURL, searchHandler } = props

    return (
        <>
            <Navbar loginStatus={loginStatus} loginHandler={loginHandler} imageURL={imageURL} searchHandler={searchHandler} />
            <div className='container pb-5'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Main