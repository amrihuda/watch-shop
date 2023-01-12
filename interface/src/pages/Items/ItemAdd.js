import React, { useState } from 'react'
import { itemPost } from '../../axios/itemAxios'
import { useNavigate } from 'react-router-dom'

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

    const navigation = useNavigate()

    const submitHandler = () => {
        itemPost(form, () => {
            navigation('/items')
        })
    }
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
                <div class="mb-3">
                    <label class="form-label">Price</label>
                    <div class="input-group">
                        <span class="input-group-text">Rp</span>
                        <input
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
                            type="number" class="form-control" min="0" required />
                        <span class="input-group-text">.00</span>
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
                    <input
                        onChange={(e) => setForm({ ...form, brandId: e.target.value })}
                        type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input
                        onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
                        type="text" className="form-control" required />
                </div>
                <button onClick={() => submitHandler()} type="button" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default ItemAdd