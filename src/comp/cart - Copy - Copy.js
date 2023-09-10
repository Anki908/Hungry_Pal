import { clearCart } from "./CartSlice";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import EmptyCart from "./Empty";

const Cart = () => {

    
    const cartItems = useSelector((store) => store.cart.items); 
     //** Now here is a big catch here i am not subscribing to the whole store but we are only subscribe to the specific slice for better performance */

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (cartItems.length === 0) ? <EmptyCart/> : (
        <div className="bg-gray-300  min-h-screen max-h-fit">
            <h1 className="font-bold text-3xl">Cart Items : {cartItems.length}</h1>
            <button className="p-2 m-2 bg-blue-500 hover:bg-blue-900 text-white rounded-md" onClick={() => handleClearCart()}>Clear</button>
            <div className="flex flex-wrap ">
                {cartItems.map((item) => (
                    <FoodItem key = {item.id} {...item}/>
                ))}
            </div>
        </div>
    )
}

export default Cart;