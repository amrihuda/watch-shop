import React from 'react'

const Home = (props) => {
    const { loginStatus } = props

    return (
        <>
            <h1>Home Page</h1>
            <p>Login Status: </p>
            <p>{JSON.stringify(loginStatus)}</p>
        </>
    )
}

export default Home