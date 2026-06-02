import React, { isValidElement, useEffect, useState } from 'react'
import {getAllProducts} from '../services/fakeApi'
import ProductCard from '../components/ProductCard'

export default function Home() {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
   
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getAllProducts()
             console.log(response)
            setProduct(response.products)  
            // setLoading(false)          
        }
        fetchProducts()

    }, [])

    return (
      
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
    {
  loading ? <p className='p-4 text-2xl text-cyan-950 self-center font-bold '>Loading...</p> : (
    product.map((item) => (
      <ProductCard key={item.id} product={item} />
    ))
  )
}      </div>
    )
}