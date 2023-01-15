import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const { loginStatus, loginHandler, imageURL, searchHandler } = props

    const handler = () => {
        if (loginStatus) {
            localStorage.clear()
            loginHandler(false)
        } else {
            loginHandler(true)
        }
    }
    
    return (
        <>
            <div className='sticky-top'>
                <nav className="navbar navbar-expand-lg py-3 border-bottom bg-theme-1">
                    <div className="container">
                        <button className="navbar-toggler btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fs-6"></span>
                        </button>
                        <div className="col-lg-3">
                            <Link to="/" className="navbar-brand d-inline-block link-theme-1 fw-bold">
                                Watch Shop
                            </Link>
                        </div>

                        <div className="text-end col-lg-3 order-lg-2">
                            {!loginStatus ?
                                <>
                                    <Link to="/login" className="btn btn-sm btn-outline-primary me-2">Login</Link>
                                    <Link to="/register" className="btn btn-sm btn-primary">Sign-up</Link>
                                </> :
                                <div className="dropdown d-inline-block">
                                    <Link to="#" className="d-block text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={imageURL} alt="..." width="32" height="32" className="rounded-circle"
                                            onError={(e) => { e.target.onerror = null; e.target.src = '/logo192.png' }} />
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-end text-small">
                                        <li><Link className="dropdown-item" to="#">New project...</Link></li>
                                        <li><Link className="dropdown-item" to="#">Settings</Link></li>
                                        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link onClick={() => handler()} className="dropdown-item" to="#">Sign out</Link></li>
                                    </ul>
                                </div>
                            }
                        </div>
                        
                        <div className="collapse navbar-collapse col-lg-auto justify-content-center order-lg-1" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-0">
                                <li><Link to="/" className="nav-link px-2 link-theme-1">Home</Link></li>
                                <li><Link to="/items" className="nav-link px-2 link-theme-1">Watches</Link></li>
                                <li><Link to="/categories" className="nav-link px-2 link-theme-1">Categories</Link></li>
                                <li><Link to="/brands" className="nav-link px-2 link-theme-1">Brands</Link></li>
                                <li><Link to="#" className="nav-link px-2 link-theme-1">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <header className="py-2 mb-4 border-bottom bg-theme-1">
                    <div className="container d-flex flex-wrap justify-content-center">
                        <div className="col-12" role="search">
                            <input
                                onChange={(e) => searchHandler(e.target.value)}
                                type="search" className="form-control bg-theme-2" placeholder="Search..." aria-label="Search" />
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar
