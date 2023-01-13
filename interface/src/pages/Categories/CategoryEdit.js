import React, { useState, useEffect } from 'react'
import { categoryPut, categoryGetById } from '../../axios/categoryAxios'
import { useNavigate, useParams } from 'react-router-dom'

const CategoryEdit = () => {
    const [form, setForm] = useState({
        name: "",
    })

    const navigation = useNavigate()
    const params = useParams()
    const id = +params.id

    useEffect(() => {
        categoryGetById(id, result => {
            const { name } = result
            setForm({
                name
            })
        })
    }, [id])


    const submitHandler = (e) => {
        e.preventDefault()
        categoryPut(id, form, () => {
            navigation('/categories')
        })
    }

    return (
        <>
            <form onSubmit={submitHandler} className='w-50 mx-auto'>
                <h3>Edit Category</h3>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default CategoryEdit