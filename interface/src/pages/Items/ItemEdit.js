import React, { useState, useEffect } from 'react'
import { itemPut, itemGetById } from '../../axios/itemAxios'
import { useNavigate, useParams } from 'react-router-dom'

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

    const navigation = useNavigate()
    const params = useParams()
    const id = +params.id

    useEffect(() => {
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
                <div class="mb-3">
                    <label class="form-label">Price</label>
                    <div class="input-group">
                        <span class="input-group-text">Rp</span>
                        <input
                            value={form.price}
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
                            type="number" class="form-control" min="0" required />
                        <span class="input-group-text">.00</span>
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
                    <input value={form.brandId}
                        onChange={(e) => setForm({ ...form, brandId: e.target.value })}
                        type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input value={form.categoryId}
                        onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
                        type="text" className="form-control" required />
                </div>
                <button onClick={() => submitHandler()} type="button" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default ItemEdit