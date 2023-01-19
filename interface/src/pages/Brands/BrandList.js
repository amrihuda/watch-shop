import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { brandGet, brandDelete } from '../../axios/brandAxios'
import LoadingBar from '../../helpers/LoadingBar'

const BrandList = (props) => {
    const [brands, setBrands] = useState([])
    const { loginStatus, searchKey } = props

    useEffect(() => {
        brandGet(result => setBrands(result))
    }, [brands])

    const deleteHandler = (id) => {
        brandDelete(id)
        brandGet(result => setBrands(result))
    }

    return (
        <>
            <h3>Brands</h3>
            {loginStatus ? <Link to='create' className='btn btn-sm btn-primary'>Add Brand</Link> : <></>}
            {
                brands.length > 0 ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: '5%' }}>#</th>
                                <th>Name</th>
                                <th>Desc</th>
                                <th>Image</th>
                                {loginStatus ? <th className='text-end col-1 col-lg-auto'>Options</th> : <></>}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                brands.filter((el) => el.name.toLowerCase().includes(searchKey.toLowerCase())).map((brand, i) => {
                                    const { id, name, desc, image } = brand
                                    return (
                                        <tr key={id}>
                                            <td>{i + 1}</td>
                                            <td>{name}</td>
                                            <td>{desc}</td>
                                            <td>{image}</td>
                                            {loginStatus ?
                                                <td className='text-end'>
                                                    <Link to={`edit/${id}`} className='btn btn-sm btn-info col-12 col-lg-auto'>Edit</Link>
                                                    <button onClick={() => deleteHandler(id)} className='btn btn-sm btn-danger col-12 col-lg-auto'>Delete</button>
                                                </td> : <></>
                                            }

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