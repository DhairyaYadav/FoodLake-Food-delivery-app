import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../Screens/Cart';
import { useCart } from './ContextReducer';

const Navbar = () => {
  let data = useCart();
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("autToken");
    navigate("/login");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 fst-italic" to="/">FoodLake</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              </li>
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="myOrder">My Orders</Link>
                </li>
                : ""}
            </ul>
            {(!localStorage.getItem("authToken")) ?
              <div className='d-flex me-auto '>
                <Link className="btn bg-white mx-4 text-danger" to="/login">login</Link>
                <Link className="btn bg-white mx-1 text-danger" to="/createuser">Signup</Link>
              </div>
              :
              <div className='d-flex me-auto'>
                <div className='btn bg-none fs-5 text-white d-flex me-auto' onClick={() => { setCartView(true) }}>My Cart{" "}
                  <Badge pill bg="danger">{data.length}</Badge>
                </div>
                {cartView ? <Modal onClose={() => { setCartView(false) }}><Cart></Cart></Modal> : null}
                <div className='btn bg-none fs-5 text-white d-flex me-auto' onClick={handleLogout}>Logout</div>
              </div>
            }
            <form className="d-flex">
              <input className="form-control me-2 text-black rounded" style={{ width: "20vw", backgroundColor: "#ffe4c45e" }} type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar