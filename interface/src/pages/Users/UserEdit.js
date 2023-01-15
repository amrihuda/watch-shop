import React, { useState, useEffect } from 'react'
import { userPut, userGetById } from '../../axios/userAxios'

const UserEdit = (props) => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        age: "",
        image: ""
    })

    useEffect(() => {
        userGetById(result => {
            setForm({
                username: result.username,
                email: result.email,
                age: result.age
            })
        })
    }, [])


    const submitHandler = (e) => {
        e.preventDefault()
        userPut(form, () => {
            props.imageHandler()
        })
    }

    return (
        <>
            <form onSubmit={submitHandler} className='col-lg-6 mx-auto'>
                <h3>Edit Brand</h3>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        value={form.username}
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                        type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        value={form.age}
                        onChange={(e) => setForm({ ...form, age: e.target.value })}
                        type="number" className="form-control" min="0" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                        className="form-control" type="file" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default UserEdit