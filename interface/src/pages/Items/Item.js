import React from 'react'
import { Outlet } from 'react-router-dom'

const Item = () => {
    return (
        <>
            <h3>Item Page</h3>
            <Outlet />
        </>
    )
}

export default Item