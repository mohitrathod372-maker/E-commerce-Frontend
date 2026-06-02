import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

export default function ProductCard({product}) {
  const dispatch=useDispatch()
 
 const handleAddToCart = () => {
  console.log("Product Added");
  dispatch(addToCart(product));
};
  
  return (
    <div>
      <div className="  border rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300 bg-white">
       <img
        className="w-full h-48 object-contain mb-4"
        src={product.thumbnail}
        alt={product.title}
     />

      <h1 className="font-semibold text-lg mb-2 line-clamp-2">
        {product.title}
      </h1>

      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
        {product.description}
      </p>

      <p className="text-green-600 font-bold text-xl">
        ${product.price}
      </p>
    <button onClick={handleAddToCart } className=" active:scale-95 transition-all duration-150 bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg "  >
        Add to Cart
    </button>                    
    </div>
    </div>
  )
}