import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ItemList } from '../pages'
import LoadingBar from '../helpers/LoadingBar'

import { brandGet } from '../axios/brandAxios'
import { categoryGet } from '../axios/categoryAxios'

const Home = (props) => {
    const { loginStatus, searchKey, watchesList } = props
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    const [manyItems, setManyItems] = useState(5)

    const apiDomain = process.env.REACT_APP_API_DOMAIN

    const checkImage = (path) => {
        const http = new XMLHttpRequest();
        http.open('HEAD', path, false);
        http.send();
        return http.status !== 404;
    }

    const seeMoreHandler = () => {
        setManyItems(manyItems + 5)
    }

    useEffect(() => {
        brandGet(result => setBrands(result))
        categoryGet(result => setCategories(result))
    }, [])

    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide overflow-hidden" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/carousel-1.jpg" className="d-block w-100" alt="carousel-1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/carousel-2.jpg" className="d-block w-100" alt="carousel-2" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/carousel-3.jpg" className="d-block w-100" alt="carousel-3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-4">
                <h3>Brands</h3>
                <Link to='/brands' className='btn btn-sm btn-outline-primary'>SEE ALL</Link>
            </div>
            <div className='mt-1 mb-4 position-relative'>
                {brands.length > 0 ?
                    <div className="row row-cols-1 row-cols-md-4 g-4 text-center">
                        {
                            brands.slice(0, 8).map(brand => {
                                const { id, name, image } = brand
                                const imagePath = apiDomain + '/' + image
                                return (
                                    <div key={id} className="col">
                                        <div className="card h-100 btn btn-outline-primary">
                                            <div className="card-body py-0 d-flex justify-content-center align-items-center" style={{ height: '10vh' }}>
                                                {
                                                    checkImage(imagePath) ?
                                                        <img src={`${apiDomain}/${image}`} className="w-100 h-100" style={{ objectFit: 'contain', filter: 'invert(1)' }} alt={image} />
                                                        :
                                                        <h4 className="card-title my-0">{name}</h4>
                                                }
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
            </div>

            <div className="d-flex justify-content-between align-items-center mt-4">
                <h3>Categories</h3>
                <Link to='/categories' className='btn btn-sm btn-outline-primary'>SEE ALL</Link>
            </div>
            <div className='mt-1 mb-4 position-relative'>
                {
                    categories.length > 0 ?
                        <div className="row row-cols-1 row-cols-md-4 g-4 text-center">
                            {
                                categories.slice(0, 4).map(category => {
                                    return (
                                        <div key={category.id} className="col">
                                            <div className="card h-100 btn btn-outline-primary">
                                                <div className="card-body">
                                                    <h5 className="card-title my-0">{category.name}</h5>
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
            </div>

            <div className='position-relative' ref={watchesList}>
                <ItemList loginStatus={loginStatus} manyItems={manyItems} searchKey={searchKey} />
                <button className='btn btn-md btn-primary mt-4 d-flex mx-auto' onClick={() => seeMoreHandler()}>SEE MORE</button>
            </div>
        </>
    )
}

export default Home