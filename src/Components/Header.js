import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

const Header = ({cartItems}) => {
  return (
    <div>
        <nav className="navbar row">
        <div className="col-12 col-md-3">
        </div>
        <Search />
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to={"/Cart"}>
          <span id="cart" className="ml-3">Cart</span>
          <span className="ml-1" id="cart_count">{cartItems.length}</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header