import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'


import { useSelector } from 'react-redux'

export default function Navbar() {
 
  
   
  const cartItems = useSelector((state) => state.cart.items);
 

  return (
    <div className="sticky top-0 flex justify-between items-center px-8 py-4 bg-white shadow-md">
  <h1 className="text-3xl font-bold text-blue-600">
    Logo
  </h1>
   <SearchBar/>
  <nav>
    <ul className="flex gap-8 text-lg font-medium">
      <li>
        <Link
          to="/"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Home
        </Link>
      </li>

      
      <li>
        <Link
          to="/cart"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Cart ({cartItems.length})
        </Link>
      </li>
    </ul>
  </nav>
</div>
  )
}
