import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { categoryGet, categoryDelete } from '../../axios/categoryAxios'
import LoadingBar from '../../helpers/LoadingBar'

const CategoryList = (props) => {
    const [categories, setCategories] = useState([])
    const { loginStatus, searchKey } = props

    useEffect(() => {
        categoryGet(result => setCategories(result))
    }, [])

    const deleteHandler = (id) => {
        categoryDelete(id, () => {
            categoryGet(result => setCategories(result))
        })
    }

    return (
        <>
            <h3>Categories</h3>
            {loginStatus ? <Link to='create' className='btn btn-sm btn-primary'>Add Category</Link> : <></>}
            {
                categories.length > 0 ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                {loginStatus ? <th className='text-end'>Options</th> : <></>}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.filter((el) => el.name.toLowerCase().includes(searchKey.toLowerCase())).map((category, i) => {
                                    const { id, name } = category
                                    return (
                                        <tr key={id}>
                                            <td>{i + 1}</td>
                                            <td>{name}</td>
                                            {loginStatus ?

                                                <td className='text-end'>
                                                    <Link to={`edit/${id}`} className='btn btn-sm btn-info'>Edit</Link>
                                                    <button onClick={() => deleteHandler(id)} className='btn btn-sm btn-danger'>Delete</button>
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

export default CategoryList