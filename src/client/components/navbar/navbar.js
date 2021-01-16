import React from 'react'
import { hot } from 'react-hot-loader'


const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">GIUploader</a>
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
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#"><span class="fas fa-user"></span> Sign Up</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><span class="fas fa-sign-in-alt"></span> Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
)}

export default hot(module)(Navbar)