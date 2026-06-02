import React from 'react'
import { FaSearch } from "react-icons/fa";
export default function SearchBar() {
  return (
    <div className="flex items-center bg-gray-100 border rounded-full px-4 py-2 w-125">
  <input
    type="text"
    placeholder="Search products..."
    className="flex-1 bg-transparent outline-none"
  />
  <FaSearch className="text-gray-500 text-lg cursor-pointer hover:text-blue-600" />
</div>      
  )
}
