import { ProductPrice } from "../components/ProductCard/styled";
import { IProduct } from "../components/ProductList/ProductList";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
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
  getTotalCartPrice: () => number;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  increaseProduct: (id: number) => void;
  decreaseProduct: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const cartContext = createContext<ICartContextProps>({} as ICartContextProps);

export function CartContextProvider({ children }: ICartContextProviderProps) {
  const [cart, setCart] = useState<ICartProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function increaseProduct(id: number) {
    let index = cart.findIndex((product: ICartProduct) => {
      return product.id == id;
    });
    const tempCart = [...cart];
    tempCart[index].quantity += 1;
    setCart(tempCart);
  }

  function decreaseProduct(id: number) {
    let index = cart.findIndex((product: ICartProduct) => {
      return product.id == id;
    });
    const tempCart = [...cart];
    tempCart[index].quantity -= 1;
    if (tempCart[index].quantity <= 0) {
      tempCart.splice(index, 1);
    }
    setCart(tempCart);
  }

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

  function removeFromCart(id: number) {
    let index = cart.findIndex((product: ICartProduct) => {
      return product.id == id;
    });
    const tempCart = [...cart];
    tempCart.splice(index, 1);
    setCart(tempCart);
  }

  function getTotalCartQuantity() {
    return cart.reduce((sum, product) => {
      return (sum += product.quantity);
    }, 0);
  }
  function getTotalCartPrice() {
    return cart.reduce((sum, product) => {
      return (sum += Number(product.price) * product.quantity);
    }, 0);
  }

  const memoIncreaseProduct = useCallback(increaseProduct, [cart]);

  const memoDecreaseProduct = useCallback(decreaseProduct, [cart]);

  const memoAddToCart = useCallback(addToCart, [cart]);

  const memoRemoveFromCart = useCallback(removeFromCart, [cart]);

  const memoGetTotalCartQuantity = useCallback(getTotalCartQuantity, [cart]);

  const memoGetTotalCartPrice = useCallback(getTotalCartPrice, [cart]);

  const contextValue = useMemo(() => {
    return {
      isOpen,
      setIsOpen,
      cart,
      addToCart: memoAddToCart,
      removeFromCart: memoRemoveFromCart,
      getTotalCartPrice: memoGetTotalCartPrice,
      getTotalCartQuantity: memoGetTotalCartQuantity,
      increaseProduct: memoIncreaseProduct,
      decreaseProduct: memoDecreaseProduct,
    };
  }, [
    isOpen,
    cart,
    memoAddToCart,
    memoRemoveFromCart,
    memoGetTotalCartQuantity,
    memoGetTotalCartPrice,
    memoIncreaseProduct,
    memoDecreaseProduct,
  ]);
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
