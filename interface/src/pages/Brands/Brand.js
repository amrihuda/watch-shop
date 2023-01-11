import React from 'react'
import { Outlet } from 'react-router-dom'

const Brand = () => {
    return (
        <>
            <h1>Brand Page</h1>
            <Outlet />
        </>
    )
}

export default Brand