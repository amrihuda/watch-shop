import React, { useState, useEffect } from 'react'
import { itemPut, itemGetById } from '../../axios/itemAxios'
import { useNavigate, useParams } from 'react-router-dom'
import { categoryGet } from '../../axios/categoryAxios'
import { brandGet } from '../../axios/brandAxios'

const ItemEdit = () => {
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
    const params = useParams()
    const id = +params.id

    useEffect(() => {
        categoryGet(result => setCategory(result))
        brandGet(result => setBrand(result))
        itemGetById(id, result => {
            setForm({
                name: result.name,
                desc: result.desc,
                price: result.price,
                stock: result.stock,
                categoryId: result.categoryId,
                brandId: result.brandId,
            })
        })
    }, [id])

    const submitHandler = () => {
        itemPut(id, form, () => {
            navigation('/items')
        })
    }
    return (
        <>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        value={form.desc}
                        onChange={(e) => setForm({ ...form, desc: e.target.value })}
                        type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <div className="input-group">
                        <span className="input-group-text">Rp</span>
                        <input
                            value={form.price}
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
                            type="number" className="form-control" min="0" required />
                        <span className="input-group-text">.00</span>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Stock</label>
                    <input value={form.stock}
                        onChange={(e) => setForm({ ...form, stock: e.target.value })}
                        type="number" className="form-control" min="0" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                        type="file" className="form-control" />
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

export default ItemEdit