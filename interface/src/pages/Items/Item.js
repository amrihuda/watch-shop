import React from 'react'
import { Outlet } from 'react-router-dom'

const Item = () => {
    return (
        <>
            <div>Item Page</div>
            <Outlet />
        </>
    )
}

export default Item