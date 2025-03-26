import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const navbar = () => {
    return (
        <>



            <nav className="navbar nav navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className='d-flex justify-content-around'>



                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Settings <span className="drop-down-icon"><i className="bi bi-chevron-down"></i></span></a>
                                    <ul className="dropdown-menu">
                                        <li>Option 1</li>
                                        <li>Option 2</li>
                                        <li>Option 3</li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Company <span className="drop-down-icon"><i className="bi bi-chevron-down"></i></span></a>

                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Masters <span className="drop-down-icon"><i className="bi bi-chevron-down"></i></span></a>

                                </li>


                                <li className="nav-item">
                                    <a className="nav-link" href="#">HR Processing <span className='drop-down-icon'><i className="bi bi-chevron-down"></i></span></a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">HR Approvals <span className='drop-down-icon'><i className="bi bi-chevron-down"></i></span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Dashboard <span className='drop-down-icon'><i className="bi bi-chevron-down"></i></span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Reports <span className='drop-down-icon'><i className="bi bi-chevron-down"></i></span></a>
                                </li>
                            </ul>
                        </div>

                        <div className='profile'>
                            <li className="nav-item" >
                                <a className="nav-link text-center" href="#">Abhinav Guarav <span className="drop-down-icon"><i className="bi bi-chevron-down"></i></span></a>
                                <ul className="dropdown-menu">
                                    <li>Option 1</li>

                                </ul>
                            </li>
                        </div>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default navbar