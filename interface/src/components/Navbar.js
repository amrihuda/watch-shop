import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const { loginStatus, loginHandler } = props

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
            <nav className="navbar navbar-expand-lg py-3 border-bottom">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-lg-3">
                        <Link to="/" className="navbar-brand d-inline-block">
                            Watch Shop
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse col-lg-auto justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
                            <li><Link to="/categories" className="nav-link px-2 link-dark">Categories</Link></li>
                            <li><Link to="/brands" className="nav-link px-2 link-dark">Brands</Link></li>
                            <li><Link to="#" className="nav-link px-2 link-dark">FAQs</Link></li>
                            <li><Link to="#" className="nav-link px-2 link-dark">About</Link></li>
                        </ul>
                    </div>

                    <div className="text-end col-lg-3">
                        {!loginStatus ?
                            <>
                                <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
                                <button type="button" className="btn btn-primary">Sign-up</button>
                            </> :
                            <div className="dropdown d-inline-block">
                                <Link to="#" className="d-block link-dark text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end text-small">
                                    <li><Link className="dropdown-item" to="#">New project...</Link></li>
                                    <li><Link className="dropdown-item" to="#">Settings</Link></li>
                                    <li><Link className="dropdown-item" to="#">Profile</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link onClick={() => handler()} className="dropdown-item" to="#">Sign out</Link></li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </nav>
            <header className="py-1 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <form className="col-12" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>
            </header>
        </>
    )
}

export default Navbar
