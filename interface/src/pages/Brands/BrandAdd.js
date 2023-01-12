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

    const submitHandler = () => {
        brandPost(form, () => {
            navigation('/brands')
        })
    }

    return (
        <>
            <form>
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
                <button onClick={() => submitHandler()} type="button" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default BrandAdd