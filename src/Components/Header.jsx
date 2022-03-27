import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './Buttons/CartBtn'

import Login from './Buttons/Login'
import SingUp from './Buttons/SingUp'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">PHONE</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Products">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="Contact" tabIndex="-1" >Contact</NavLink>
        </li>
        
        <Login />
        <SingUp />
        <CartBtn />
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header