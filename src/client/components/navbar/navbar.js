import React from 'react'
import {Nav} from 'react-bootstrap'
import { hot } from 'react-hot-loader'
import {Link} from 'react-router-dom'


const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >GIUploader</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Image Search</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Upload</a>
              </li>
            </ul>
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/signup" className="nav-link"> Sign Up</Link>
              </li>
              <Link to="/login" className="nav-link"><li className="nav-item">
                Login
              </li></Link>
            </ul>
          </div>
        </div>
      </nav>
)}

export default Navbar