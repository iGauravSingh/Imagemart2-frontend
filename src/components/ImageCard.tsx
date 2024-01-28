import { useContext } from "react";
import { RiShoppingCartFill } from "react-icons/ri";

import { CartContext } from "../context/cartContext";

interface ImageCardProps {
  id: number;
  name: string;
  img: string;
  price: number;
}

const ImageCard = ({ id, name, img, price }: ImageCardProps) => {
  const context = useContext(CartContext);

  if (!context) {
    // Handle the case where CartContext is undefined
    return <div>Error: CartContext is undefined</div>;
  }

  const { cart, setCart } = context;

  const handleClick = () => {
    if (!cart.cartItems.some((itm) => itm.id === id)) {
      setCart({
        cartItems: [
          ...cart.cartItems,
          {
            id: id,
            imageName: name,
            imageSource: img,
            price: price,
            quantity: 1,
          },
        ],
      });
    } else {
      const result = cart.cartItems.filter((filtItm) => filtItm.id !== id);
      setCart({
        cartItems: [...result],
      });
    }

    //console.log(cart);
  };

const handleSave =() => {
  
}

  return (
    <div className="">
      <div className=" relative group">
        {/* iumage  */}
        <div className="relative">
          <div>
            <img className=" w-[500px] h-[250px]" src={img} alt={name} />
          </div>
          <div className=" absolute w-[500px] h-[250px] inset-0 bg-slate-700 opacity-0 group-hover:opacity-20"></div>
        </div>

        {/* cart functionality  */}
        <div
          onClick={handleClick}
          className=" absolute h-12 w-12 rounded-lg right-2 top-2 px-1 py-1 group-hover:backdrop-brightness-50 flex items-center justify-center cursor-pointer"
        >
          <div className=" hidden group-hover:block relative">
            <div>
              <RiShoppingCartFill size={30} color={"white"} />
            </div>

            {/* // red dot on cart icon  */}
            {cart.cartItems.some((itm) => itm.id === id) ? (
              <div className=" h-2 w-2 bg-red-500 absolute -top-1 -right-1 rounded-full flex justify-center items-center"></div>
            ) : null}
          </div>
        </div>

        {/* Save functionality  */}
        <div>
          <div
            onClick={handleSave}
            className=" absolute h-12 w-14 rounded-lg right-2 top-20 px-1 py-1 group-hover:backdrop-brightness-50 flex items-center justify-center cursor-pointer"
          >
            <div className=" hidden group-hover:block relative font-serif">
              <div>
                <p className=" font-medium text-lg text-white">Save</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
