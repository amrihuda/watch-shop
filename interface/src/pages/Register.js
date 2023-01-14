import React, { useState, useEffect } from 'react'
import { userPost } from '../axios/userAxios'
import { useNavigate } from "react-router-dom"

const Login = (props) => {
    const { loginStatus } = props
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    const submitHandler = (e) => {
        e.preventDefault()
        userPost(form, () => {
            navigation('/login')
        })
    }

    const navigation = useNavigate()
    useEffect(() => {
        if (loginStatus) {
            navigation('/')
        }
    }, [loginStatus, navigation])

    return (
        <>
            <div className='login-page text-center'>
                <main className="form-signin w-100 m-auto">
                    <form onSubmit={submitHandler}>
                        <img className="mb-4" src="/watch.png" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 fw-normal">Sign up</h1>

                        <div className="form-floating">
                            <input
                                onChange={(e) => setForm({ ...form, username: e.target.value })}
                                type="text" className="form-control" placeholder="username" />
                            <label>Username</label>
                        </div>
                        <div className="form-floating">
                            <input
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                type="email" className="form-control" placeholder="name@example.com" />
                            <label>Email address</label>
                        </div>
                        <div className="form-floating">
                            <input
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                type="password" className="form-control" placeholder="password" />
                            <label>Password</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Login