import React from 'react'
import { Link } from 'react-router-dom';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  

  useEffect(() => {
    axios
    .get(`https://dummyjson.com/products`)
    .then((res) => setRelatedProducts(res.data.products));
  },[])

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [id]);

  if (!product) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

 const relatedItems = relatedProducts.filter(
  (item) =>
    item.category === product?.category &&
    item.id !== product?.id
);

  return (
    <div className="p-10 max-w-4xl mx-auto">

      <img
        src={product.thumbnail}
        className="w-full h-80 object-contain"
      />

      <h1 className="text-3xl font-bold mt-4">
        {product.title}
      </h1>

      <p className="text-gray-600 mt-2">
        {product.description}
      </p>

      <h2 className="text-2xl font-bold mt-3">
        ${product.price}
      </h2>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-5 bg-blue-500 text-white px-6 py-2 rounded-lg"
      >
        Add to Cart
      </button>

      

      <div className="grid grid-cols-4 gap-4 mt-10">

        {
          relatedItems.map((item) => (

             <Link to={`/product/${item.id}`}key={item.id}>
            
                 <div className="  border rounded-lg p-4 shadow-md">
                   <img
                     src={item.thumbnail}
                     className="w-full h-40 object-contain"
                   />

                   <h2 className="font-semibold line-clamp-1 mt-2">
                     {item.title}
                   </h2>

                   <p className="text-green-600 font-bold">
                     ${item.price}
                   </p>
                 </div>
 
             </Link>
          ))
        }
      </div>

    </div>
  );
}

export default ProductDetails;
  