import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-secondary">
                    <div className="container-fluid">
                        <a className="navbar-brand title-font" href="/">
                            PortFolio
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">
                                        <Link to='/'>Home</Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        <Link to='/projects'>Projects</Link>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        <Link to="/qualifications">Qualifications</Link>
                                    </a>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <button className="btn btn-outline-primary profile-links github" type="submit" onClick={() => { window.open('https://github.com/rudra-rk12') } }>
                                    Github
                                </button>
                            </div>
                            <div className="d-flex">
                                <button className="btn btn-outline-primary profile-links linkedin" type="submit" onClick={() => { window.open('https://www.linkedin.com/in/rudrark12') } }>
                                    LinkedIn
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
        </div>
    )
}

export default Navbar