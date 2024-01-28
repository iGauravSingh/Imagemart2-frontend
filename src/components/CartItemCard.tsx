import { useContext } from "react";
import war from "../assets/war.jpg";
import { CartContext } from "../context/cartContext";

type Licence = 'Free to use' | 'pay to use'

interface CartItemCardProps {
  id: number,
  name: string,
  image: string,
  size?: number,
  licence?: Licence,
  price: number
}



const CartItemCard = ({id, name,image,size=44,licence='Free to use',price}:CartItemCardProps) => {

  const context = useContext(CartContext);

  if (!context) {
    // Handle the case where CartContext is undefined
    return <div>Error: CartContext is undefined</div>;
  }

  const { cart, setCart } = context;


  const handleRemove = () => {
    const result = cart.cartItems.filter(filtItm => filtItm.id !== id)
    setCart({
      cartItems: [...result]
    })
  }

  return (
    <div className="border-2 border-purple-500 w-full px-4 py-4 font-serif mb-8">
      <div className="w-full flex ">

        {/* Image div  */}
        <div className="flex flex-col justify-center items-center mr-8">
          <img className=" h-48 w-96" src={image} alt={name} />
          <p onClick={handleRemove} className="border border-purple-300 rounded-full px-2 py-1 mt-1 cursor-pointer">X</p>
        </div>

        {/* Item name and detail  */}
        <div className="flex gap-16 ">
          {/* item Tag  */}
          <div>
            <p>Name:</p>
            <p>Size:</p>
            <p>Licence</p>
          </div>
          {/* Item Value  */}
          <div>
            <p>{name}</p>
            <p>{size} mb</p>
            <p>{licence}</p>
          </div>
        </div>

        {/* price  */}
        <div className="flex  w-full justify-end ">
        <p className=" font-semibold text-lg">₹ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
