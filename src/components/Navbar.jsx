import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { HiOutlineShoppingCart } from "react-icons/hi";

import { useSelector } from 'react-redux'

export default function Navbar() {
 
  
   
  const cartItems = useSelector((state) => state.cart.items);
 

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-blue-100 shadow-md">
  
<div className="bg-blue-600 p-3 rounded-full">
  <HiOutlineShoppingCart
    size={28}
    className="text-white"
  />
</div>
   <SearchBar/>
  <nav>
    <ul className="flex gap-8 text-lg font-medium">
      <li>
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          Home
        </Link>
      </li>

      
      <li>
        <Link
          to="/cart"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          Cart ({cartItems.length})
        </Link>
      </li>
    </ul>
  </nav>
</div>
  )
}
