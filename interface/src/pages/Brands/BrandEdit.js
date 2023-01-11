import React, { useState, useEffect } from 'react'
import { brandPut, brandGetById } from '../../axios/brandAxios'
import { useNavigate, useParams } from 'react-router-dom'

const BrandEdit = () => {
    const [form, setForm] = useState({
        name: "",
        desc: "",
        image: ""
    })

    const navigation = useNavigate()
    const params = useParams()
    const id = +params.id

    useEffect(() => {
        brandGetById(id, result => {
            const { name, desc, image } = result
            setForm({
                name,
                desc,
                image
            })
        })
    }, [])


    const submitHandler = () => {
        brandPut(id, form)
        navigation('/brands')
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        value={form.desc}
                        onChange={(e) => setForm({ ...form, desc: e.target.value })}
                        type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                        value={form.image}
                        onChange={(e) => setForm({ ...form, image: e.target.value })}
                        type="text" className="form-control" />
                </div>
                <button onClick={() => submitHandler()} type="button" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default BrandEdit