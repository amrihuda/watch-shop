import React, { useState, useEffect } from 'react'
import { ItemList } from '../pages'
import LoadingBar from '../helpers/LoadingBar'

import { brandGet } from '../axios/brandAxios'
import { categoryGet } from '../axios/categoryAxios'

const Home = (props) => {
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])

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
            <h3 className='mt-4'>Brands</h3>
            <div className='my-4'>
                {brands.length > 0 ?
                    <div className="row row-cols-1 row-cols-md-4 g-4 text-center">
                        {
                            brands.map(brand => {
                                return (
                                    <div className="col">
                                        <div className="card h-100 btn btn-outline-primary">
                                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                                            <div className="card-body">
                                                <h5 className="card-title my-0">{brand.name}</h5>
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
            <h3 className='mt-4'>Categories</h3>
            <div className='my-4'>
                {
                    categories.length > 0 ?
                        <div className="row row-cols-1 row-cols-md-4 g-4 text-center">
                            {
                                categories.map(category => {
                                    return (
                                        <div className="col">
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

            <ItemList />
        </>
    )
}

export default Home