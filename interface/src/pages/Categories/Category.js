import React from 'react'
import { Outlet } from 'react-router-dom'

const Category = () => {
    return (
        <>
            <div>Category Page</div>
            <Outlet />
        </>
    )
}

export default Category