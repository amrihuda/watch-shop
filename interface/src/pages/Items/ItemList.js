import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { itemGet, itemDelete } from '../../axios/itemAxios'

import LoadingBar from '../../helpers/LoadingBar'
import rupiah from '../../helpers/rupiah'
import { MdMode } from 'react-icons/md'

const ItemList = (props) => {
    const [items, setItem] = useState([])
    const { loginStatus, manyItems, searchKey } = props

    const location = useLocation()
    const navigation = useNavigate()
    const apiDomain = process.env.REACT_APP_API_DOMAIN

    useEffect(() => {
        itemGet(result => setItem(result))
    }, [])

    const detailsHandler = (id) => {
        navigation(`/items/details/${id}`)
    }

    const deleteHandler = (id) => {
        itemDelete(id, () => {
            itemGet(result => setItem(result))
        })
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h3>Watches</h3>
                {location.pathname === '/' ?
                    <Link to='/items' className='btn btn-sm btn-outline-primary'>SEE ALL</Link> : <></>}
            </div>
            {loginStatus ? <Link to='/items/create' className='btn btn-sm btn-primary'>Add Item</Link> : <></>}
            {
                items.length > 0 ?
                    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">
                        {
                            items.filter((el) => el.name.toLowerCase().includes(searchKey.toLowerCase())).slice(0, manyItems).map((item, i) => {
                                const { id, name, price, image, user, category } = item
                                return (
                                    <div key={id} className="col position-relative">
                                        <div className="card h-100 btn btn-outline-primary btn-card p-0" onClick={() => detailsHandler(id)}>
                                            <img src={`${apiDomain}/${image}`}
                                                onError={(e) => { e.target.onerror = null; e.target.src = '/images/item.jpg' }}
                                                className="card-img-top" alt={image} />
                                            <div className="card-body">
                                                <h5 className="card-title text-truncate-2">{name}</h5>
                                                <p className="card-text fw-bold text-theme">{rupiah(price)}</p>
                                                <span className="lh-sm fw-light text-muted">Category: {category?.name}</span>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-muted">Added by {user?.username}</small>
                                            </div>
                                        </div>
                                        {loginStatus ?
                                            <div className="dropdown position-absolute top-0 end-0" style={{ marginRight: 'calc(var(--bs-gutter-x) * .5)' }}>
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