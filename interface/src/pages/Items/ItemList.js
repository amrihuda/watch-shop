import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { itemGet, itemDelete } from '../../axios/itemAxios'
import LoadingBar from '../../helpers/LoadingBar'
import rupiah from '../../helpers/rupiah'
import { MdMode } from 'react-icons/md'

const ItemList = () => {
    const [items, setItem] = useState([])

    useEffect(() => {
        itemGet(result => setItem(result))
    }, [])

    const deleteHandler = (id) => {
        itemDelete(id, () => {
            itemGet(result => setItem(result))
        })
    }

    const apiDomain = process.env.REACT_APP_API_DOMAIN

    return (
        <>
            <Link to='create' className='btn btn-sm btn-primary'>Add Item</Link>
            {
                items.length > 0 ?
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-2">
                        {
                            items.map((item, i) => {
                                const { id, name, price, image } = item
                                return (
                                    <div className="col">
                                        <div className="card h-100">
                                            <img src={`${apiDomain}/${image}`}
                                                onError={(e) => { e.target.onerror = null; e.target.src = '/images/item.jpg' }}
                                                className="card-img-top" alt={image} />
                                            <div className="card-body">
                                                <h5 className="card-title">{name}</h5>
                                                <p className="card-text">{rupiah(price)}</p>
                                                <div className="dropdown position-absolute top-0 end-0">
                                                    <button className="btn btn-outline-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <MdMode />
                                                    </button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li><Link to={`edit/${id}`} className='dropdown-item'>Edit</Link></li>
                                                        <li><button onClick={() => deleteHandler(id)} className='dropdown-item'>Delete</button></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <LoadingBar />
            }
        </>
    )
}

export default ItemList