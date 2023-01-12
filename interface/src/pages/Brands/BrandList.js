import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { brandGet, brandDelete } from '../../axios/brandAxios'
import LoadingBar from '../../helpers/LoadingBar'

const BrandList = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        brandGet(result => setBrands(result))
    }, [brands])

    const deleteHandler = (id) => {
        brandDelete(id)
        brandGet(result => setBrands(result))
    }

    return (
        <>
            <Link to='create' className='btn btn-sm btn-primary'>Add Brand</Link>
            {
                brands.length > 0 ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Desc</th>
                                <th>Image</th>
                                <th className='text-end'>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                brands.map((brand, i) => {
                                    const { id, name, desc, image } = brand
                                    return (
                                        <tr key={id}>
                                            <td>{i + 1}</td>
                                            <td>{name}</td>
                                            <td>{desc}</td>
                                            <td>{image}</td>
                                            <td className='text-end'>
                                                <Link to={`edit/${id}`} className='btn btn-sm btn-info'>Edit</Link>
                                                <button onClick={() => deleteHandler(id)} className='btn btn-sm btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    :
                    <LoadingBar />
            }
        </>
    )
}

export default BrandList