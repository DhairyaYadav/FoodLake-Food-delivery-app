
import React from 'react'
import Home from './Screens/Home'
import Login from './Screens/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'; //importing bootstrap
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //importing bootstrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'; //importing js bootstrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; //importing js bootstrap
import Signup from './Screens/Signup.js';
import { CartProvider } from './Components/ContextReducer.js';
import MyOrders from './Screens/MyOrders.js';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div >
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/createuser' element={<Signup />} />
            <Route exact path='/myOrder' element={<MyOrders />} />

          </Routes>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App