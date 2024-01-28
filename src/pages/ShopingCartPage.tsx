import { useContext } from "react";
import Button from "../components/Button";
import CartItemCard from "../components/CartItemCard";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/cartContext";

const ShopingCartPage = () => {
  const context = useContext(CartContext);

  if (!context) {
    // Handle the case where CartContext is undefined
    return <div>Error: CartContext is undefined</div>;
  }

  const { cart } = context;

  const total = cart.cartItems.reduce((sum,item) => sum + item.price, 0)

  return (
    <div>
      <Navbar />
      <div className=" min-h-screen w-screen flex justify-center mt-16 font-serif">
        <div className="flex flex-col items-center w-[50%]">
          <div className=" w-full">
            <h1 className=" font-semibold text-4xl">Shoping Basket</h1>
          </div>

          <div className="w-full flex justify-between items-center mt-4">
            <p>Items selected for purchase: {cart.cartItems.length}</p>
            <p className=" pr-8 font-medium text-3xl">
              Subtotal: {total}.00 INR
            </p>
          </div>

          <div className="w-full flex justify-end mt-12">
            <Button heading="Continue with purchace" color="purple" />
          </div>
          
          {/* // cart item list  */}
          <div className=" mt-20">
          {cart.cartItems.map((item) => (
            <div key={item.id} className="">
              <CartItemCard
                id={item.id}
                name={item.imageName}
                image={item.imageSource}
                price={item.price}
              />
            </div>
          ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShopingCartPage;
