import { IProduct } from "@/components/ProductList/ProductList";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface ICartContextProviderProps {
  children: ReactNode;
}

interface ICartProduct extends IProduct {
  quantity: number;
}

interface ICartContextProps {
  cart: ICartProduct[];
  addToCart: (product: ICartProduct) => void;
  getTotalCartQuantity: () => number;
}

const cartContext = createContext<ICartContextProps>({} as ICartContextProps);

export function CartContextProvider({ children }: ICartContextProviderProps) {
  const [cart, setCart] = useState<ICartProduct[]>([]);

  function addToCart(product: ICartProduct) {
    if (
      cart.find((element) => {
        return element.id == product.id;
      })
    ) {
      const index = cart.findIndex((element) => {
        return element.id == product.id;
      });
      const tempList = [...cart];
      tempList[index].quantity += product.quantity;
      setCart(tempList);
    } else {
      setCart([...cart, product]);
    }
  }

  function getTotalCartQuantity() {
    return cart.reduce((sum, product) => {
      return (sum += product.quantity);
    }, 0);
  }

  const memoAddToCart = useCallback(addToCart, [cart]);

  const memoGetTotalCartQuantity = useCallback(getTotalCartQuantity, [cart]);

  const contextValue = useMemo(() => {
    return {
      cart,
      addToCart: memoAddToCart,
      getTotalCartQuantity: memoGetTotalCartQuantity,
    };
  }, [cart, memoAddToCart, memoGetTotalCartQuantity]);
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
