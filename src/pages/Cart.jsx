import { useSelector , useDispatch} from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();

 const cartItems = useSelector((state) => state.cart.items);

   console.log("Cart Items:", cartItems);

  

  return (
    <div  className="justify-between gap-1 items-center grid grid-cols-3 m-1">
      

      {cartItems.map((product) => (
        
      <div key={product.id} className="  p-4 shadow-md hover:shadow-xl transition duration-300 bg-white">
       <img
        className="w-full h-48 object-contain mb-4"
        src={product.thumbnail}
        alt={product.title}
     />

      <h1 className="font-semibold text-lg mb-2 line-clamp-1">
        {product.title}
      </h1>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {product.description}
      </p>

      <p className="text-green-600 font-bold text-xl">
        ${product.price}
      </p>
      <button  onClick={() => dispatch(removeFromCart(product.id))} className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg active:scale-95 transition-all duration-300">
        Remove
        </button>
                      
    </div>

      
    ))}
    </div>
  );
}

export default Cart;