import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useSelector,useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/search/searchSlice';
export default function SearchBar() {
     const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.term);
  return (
    <div className="flex items-center bg-white rounded-full px-4 py-2 w-125">
  <input
    type="text"
    placeholder="Search products..."
     value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
    className="flex-1 bg-transparent outline-none"
  />
  <FaSearch className="text-gray-500 text-lg cursor-pointer hover:text-blue-600" />
</div>      
  )
}
