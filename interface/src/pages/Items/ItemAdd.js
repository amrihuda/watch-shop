import React, { useState, useEffect } from 'react'
import { itemPost } from '../../axios/itemAxios'
import { useNavigate } from 'react-router-dom'
import { categoryGet } from '../../axios/categoryAxios'
import { brandGet } from '../../axios/brandAxios'

const ItemAdd = () => {
    const [form, setForm] = useState({
        name: "",
        desc: "",
        price: "",
        stock: "",
        image: "",
        categoryId: "",
        brandId: ""
    })
    const [categories, setCategory] = useState([])
    const [brands, setBrand] = useState([])

    const navigation = useNavigate()

    const submitHandler = () => {
        itemPost(form, () => {
            navigation('/items')
        })
    }

    useEffect(() => {
        categoryGet(result => setCategory(result))
        brandGet(result => setBrand(result))
    }, [])

    return (
        <>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        onChange={(e) => setForm({ ...form, desc: e.target.value })}
                        type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <div className="input-group">
                        <span className="input-group-text">Rp</span>
                        <input
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
                            type="number" className="form-control" min="0" required />
                        <span className="input-group-text">.00</span>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Stock</label>
                    <input
                        onChange={(e) => setForm({ ...form, stock: e.target.value })}
                        type="number" className="form-control" min="0" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                        type="file" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Brand</label>
                    <select className="form-select"
                        onChange={(e) => setForm({ ...form, brandId: e.target.value })}>
                        <option selected></option>
                        {
                            brands.map((brand, i) => {
                                const { id, name } = brand
                                return (
                                    <option key={id} value={id}>{name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select className="form-select"
                        onChange={(e) => setForm({ ...form, categoryId: e.target.value })}>
                        <option selected></option>
                        {
                            categories.map((category, i) => {
                                const { id, name } = category
                                return (
                                    <option key={id} value={id}>{name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <button onClick={() => submitHandler()} type="button" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default ItemAdd