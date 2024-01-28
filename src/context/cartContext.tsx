import { ReactNode, createContext, useState } from "react";

type Licence = 'Free to use' 

interface CartItem {
  id: number;
  imageName: string;
  imageSource: string;
  price: number;
  quantity: number;
  size?: number,
  licence?: Licence,
}

interface Cart {
    cartItems: CartItem[]; 
}

interface ContextProps {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
}

export const CartContext = createContext<ContextProps | undefined>(undefined);

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<Cart>({
    cartItems: []
  });

  const contextValue: ContextProps = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
