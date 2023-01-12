import React from 'react'
import { Outlet } from 'react-router-dom'

const Brand = () => {
    return (
        <>
            <h3>Brand Page</h3>
            <Outlet />
        </>
    )
}

export default Brand