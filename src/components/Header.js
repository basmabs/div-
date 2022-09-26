import React from 'react'
import { Link } from 'react-router-dom'
 

function Header() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <Link className="navbar-brand mx-2" to="/Pc">Pricipale</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item-active">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/login">Login <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item-active">
              <Link className="nav-link" to="/addproduct">AddProduct</Link>
            </li>
            <li className="nav-item-active">
              <Link className="nav-link" to="/list">List</Link>
            </li>
            <li className="nav-item-active">
              <Link className="nav-link" to="/weather"> Weather</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div >
  )
}

export default Header