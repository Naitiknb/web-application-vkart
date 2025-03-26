import React from 'react';
import "../index.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import Navbar from "../components/navbar"

const Bank = () => {

    const data = [
        { id: 3, code: 'RBLBMP', name: 'JM Financial Home Loan Ltd.', type: 'NBFC', state: 'Maharashtra', status: 'Active' },
        { id: 2, code: 'TCFSMAH', name: 'Tata Capital Financial Services Ltd', type: 'NBFC', state: 'Maharashtra', status: 'Inactive' },
        { id: 1, code: 'JMFIMAH', name: 'RBL Bank Ltd', type: 'Bank', state: 'Maharashtra', status: 'Active' },
    ];
    return (

        <>

        <Navbar/>
            <header className="navbar  header bg-body-tertiary">
                <div className="container-fluid d-flex justify-content-around align-items-center ">

                    <a className="navbar-brand"><b>Banks/NBFC</b> <span>(3)</span></a>


                    <div className="d-flex align-items-center ">
                        <div className="position-relative d-flex">

                            <input
                                className="form-control search"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />

                            <i
                                className="bi bi-search position-absolute top-50 translate-middle-y"
                                style={{
                                    right: '0px',
                                    color: '#6c757d',
                                    backgroundColor: '#e9ecef',
                                    borderTopRightRadius: '10px',
                                    borderBottomRightRadius: '10px',
                                    padding: '8px',
                                    height: '38px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            ></i>
                        </div>

                        <Link to="add" ><button className="btn btn-primary ms-2">+ Add New </button></Link>
                    </div>
                </div>
            </header>

            <div className="container mt-4">

                <div className='table-responsive'>
                    <table className="table ">
                        <thead className="table ">
                            <tr>
                                <th>ID</th>
                                <th>Code</th>
                                <th>Institute Name</th>
                                <th>Type</th>
                                <th>State</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.code}</td>
                                    <td>{item.name}</td>
                                    <td>{item.type}</td>
                                    <td>{item.state}</td>
                                    <td>
                                        <span className="text-success">
                                            {item.status}
                                        </span>
                                    </td>
                                    <td>
                                        <label className='text-primary'>Manage</label>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>





        </>






    );
};

export default Bank;
