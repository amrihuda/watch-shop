import React, { useState, useEffect } from 'react'
import { userLogin } from '../axios/userAxios'
import { useNavigate } from "react-router-dom"

const Login = (props) => {
    const { loginStatus, loginHandler } = props
    const [form, setForm] = useState({
        usernameOrEmail: '',
        password: ''
    })

    const submitHandler = (e) => {
        e.preventDefault()
        userLogin(form, result => {
            localStorage.setItem('user_token', result.user_token)
            loginHandler(true)
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
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input
                                onChange={(e) => setForm({ ...form, usernameOrEmail: e.target.value })}
                                type="text" className="form-control" placeholder="username or name@example.com" required />
                            <label>Username or Email</label>
                        </div>
                        <div className="form-floating">
                            <input
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                type="password" className="form-control" placeholder="password" required />
                            <label>Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2023</p>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Login