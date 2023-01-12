import React, { useState } from 'react'
import { categoryPost } from '../../axios/categoryAxios'
import { useNavigate } from 'react-router-dom'

const CategoryAdd = () => {
    const [form, setForm] = useState({
        name: "",
    })

    const navigation = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        categoryPost(form, () => {
            navigation('/categories')
        })
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default CategoryAdd