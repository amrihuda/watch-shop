import React, { useState } from 'react'
import { brandPost } from '../../axios/brandAxios'
import { useNavigate } from 'react-router-dom'

const BrandAdd = () => {
    const [form, setForm] = useState({
        name: "",
        desc: "",
        image: ""
    })

    const navigation = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        brandPost(form, () => {
            navigation('/brands')
        })
    }

    return (
        <>
            <form onSubmit={submitHandler} className='w-50 mx-auto'>
                <h3>Add Brand</h3>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        onChange={(e) => setForm({ ...form, desc: e.target.value })}
                        type="text" className="form-control" />
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

export default BrandAdd