import React, { useState, useEffect } from 'react'
import { MdMode } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import { itemGetById, itemDelete } from '../../axios/itemAxios'
import rupiah from '../../helpers/rupiah'

const ItemDetails = (props) => {
    const [item, setItem] = useState({})

    const apiDomain = process.env.REACT_APP_API_DOMAIN
    const params = useParams()
    const id = +params.id

    useEffect(() => {
        itemGetById(id, result => {
            setItem(result)
        })
    }, [id])

    const deleteHandler = (id) => {
        itemDelete(id, () => {
            itemGetById(id, result => setItem(result))
        })
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h3>{item.name}</h3>
                {props.loginStatus ?
                    <div className="dropdown">
                        <button className="btn btn-outline-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <MdMode />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><Link to={`/items/edit/${id}`} className='dropdown-item'>Edit</Link></li>
                            <li><button onClick={() => deleteHandler(id)} className='dropdown-item'>Delete</button></li>
                        </ul>
                    </div> : <></>
                }
            </div>
            <div className='row py-2'>
                <div className='col-md-4'>
                    <img src={`${apiDomain}/${item.image}`} alt={item.image} className='w-100 rounded-3'
                        onError={(e) => { e.target.onerror = null; e.target.src = '/images/item.jpg' }} />
                </div>
                <div className='col-md-8 py-3 position-relative'>
                    <h4 className='fw-bold text-theme'>{rupiah(item.price)}</h4>
                    <hr />
                    <h5>Stock: {item.stock}</h5>
                    <hr />
                    <h5>Description</h5>
                    <p>{item.desc}</p>
                    <h5>Brand</h5>
                    <p>{item.brand?.name}</p>
                    <p>{item.brand?.desc}</p>
                    <h5>Category</h5>
                    <p>{item.category?.name}</p>
                </div>
            </div>
        </>
    )
}

export default ItemDetails