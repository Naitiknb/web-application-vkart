import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../index.css';
import Sidebar from "../components/sidebar.jsx";
import Navbar  from '../components/navbar.jsx';
import { Link } from 'react-router-dom';

const Add_Client = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [cities, setCities] = useState([]);
  const [status, setStatus] = useState(false);

  const stateCityData = {
    Maharashtra: ['Mumbai'],
    Gujarat: ['Ahmedabad'],
    Karnataka: ['Bangalore'],
    Rajasthan: ['Jaipur'],
  };

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setCurrentDate(formattedDate);
    setCities(stateCityData[selectedState]);
  }, [selectedState]);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleStatusChange = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  return (
    <>

<Navbar/>

      <header className="navbar header bg-body-tertiary">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand"><b>Add Empanel Client</b></a>
          <div className="d-flex align-items-center">

            <button className="btn btn-success ms-2 px-4">
              <i className="bi bi-box-arrow-in-down"></i> Save
            </button>
           <Link to="/"  > <button className="btn btn-dark ms-2 px-4">
              <i className="bi bi-box-arrow-in-left"></i> Cancel
            </button></Link>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row my-3 mx-4">
          <div className='col-lg-2 col-md-3 mb-3'>
          <Sidebar/>
          </div>

          <div className="col-lg-9 col-md-9">
            <p className="head">Main Information</p>

            <div className='form-input'>
              <div className="row">
                <div className="col-md-6 col-lg-3 mb-3">
                  <label>Code</label>
                  <input type="text" className="form-control" placeholder="HDFCMAH" />
                </div>

                <div className="col-md-6 col-lg-3 mb-3">
                  <label>Type</label>
                  <select className="form-select" defaultValue="private">
                    <option value="public">Public Bank</option>
                    <option value="private">Private Bank</option>
                  </select>
                </div>

                <div className="col-md-6 col-lg-3 mb-3">
                  <label>Client Name</label>
                  <input type="text" className="form-control" placeholder="HDFC Bank" />
                </div>

                <div className="col-md-6 col-lg-3 mb-3">
                  <label>State</label>
                  <select className="form-select" value={selectedState} onChange={handleStateChange}>
                    {Object.keys(stateCityData).map((state, index) => (
                      <option key={index} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 col-lg-3 mb-3">
                  <label>City</label>
                  <select className="form-select">
                    {cities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6 col-lg-3 mb-3">
                  <label>Request Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={currentDate}
                    onChange={(e) => setCurrentDate(e.target.value)}
                  />
                </div>

                <div className="col-md-6 col-lg-3 mb-3 d-flex flex-column">
                  <label className="mb-2">Status</label>
                  <div className="d-flex align-items-center">
                    <label className="form-check-label me-2" htmlFor="statusToggle">Inactive</label>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="statusToggle"
                        checked={status}
                        onChange={handleStatusChange}
                      />
                    </div>
                    <label className="form-check-label ms-2" htmlFor="statusToggle">Active</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Client;