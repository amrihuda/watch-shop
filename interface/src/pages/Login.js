import React, { useState } from 'react'
import axios from 'axios'

const Login = (props) => {
    const { loginHandler } = props
    const [form, setForm] = useState({
        usernameOrEmail: '',
        password: ''
    })

    const loginUser = async () => {
        try {
            let result = await axios({
                method: 'POST',
                url: 'http://localhost:3000/api/users/login',
                data: form
            })
            const { user_token } = result.data
            localStorage.setItem('user_token', user_token)
            loginHandler(true)
        } catch (error) {
            console.log(error)
        }
    }

    const submitHandler = () => {
        loginUser()
    }

    return (
        <>
            <div className='login-page text-center'>
                <main className="form-signin w-100 m-auto">
                    <form onSubmit={() => submitHandler()}>
                        <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input
                                onChange={(e) => setForm({ ...form, usernameOrEmail: e.target.value })}
                                type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Login