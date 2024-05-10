"use client";

import { useCart } from "@/contexts/CartContext";
import { CartQuantityContainer } from "./styled";
import Image from "next/image";

export default function CartQuantity() {
  const { getTotalCartQuantity, setIsOpen } = useCart();
  return (
    <CartQuantityContainer
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <Image alt="Carrinho" src={"cart.svg"} width={18} height={19}></Image>
      <p>{getTotalCartQuantity()}</p>
    </CartQuantityContainer>
  );
}
