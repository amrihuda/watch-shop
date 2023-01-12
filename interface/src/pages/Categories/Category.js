import React from 'react'
import { Outlet } from 'react-router-dom'

const Category = () => {
    return (
        <>
            <h3>Category Page</h3>
            <Outlet />
        </>
    )
}

export default Category