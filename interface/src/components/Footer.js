import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='bg-theme-1'>
                <footer className="container py-5">
                    <div className="row">
                        <div className="col-md-8 mb-3">
                            <h5>ABOUT</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eveniet dolorum qui? Nostrum iusto ipsa
                                quia
                                iste reprehenderit quae odio voluptatum, aspernatur harum et commodi eum cum. Optio, aliquid molestias!
                            </p>
                        </div>

                        <div className="col-md-4 mb-3">
                            <h5>QUICK LINKS</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 link-theme-1">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/items" className="nav-link p-0 link-theme-1">Watches</Link></li>
                                <li className="nav-item mb-2"><Link to="/categories" className="nav-link p-0 link-theme-1">Categories</Link></li>
                                <li className="nav-item mb-2"><Link to="/brands" className="nav-link p-0 link-theme-1">Brands</Link></li>
                                <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 link-theme-1">About</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top">
                        <p>&copy; 2022 RiAM. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer