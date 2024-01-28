
import { useContext } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { CartContext } from "../context/cartContext";


interface CartProps {
  size: number;
  color?: string | null;
}

const Cart = ({ size, color = null }: CartProps) => {

  const context = useContext(CartContext);
  
  if (!context) {
    // Handle the case where CartContext is undefined
    return <div>Error: CartContext is undefined</div>;
  }

  const { cart } = context;

  return (
    <div className=" relative">
      <div>
        <RiShoppingCartFill size={size} color={color} />
      </div>
      {cart.cartItems.length === 0 ? null : (<div className=" h-4 w-4 bg-red-500 absolute -top-2 -right-2 rounded-full flex justify-center items-center">
        <p className="text-sm text-white">
          {cart.cartItems.length}
        </p>
      </div>)}
    </div>
  );
};

export default Cart;
