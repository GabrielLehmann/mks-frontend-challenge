"use client";

import { CartQuantityContainer } from "./styled";
import Image from "next/image";

export default function CartQuantity() {
  return (
    <CartQuantityContainer>
      <Image alt="Carrinho" src={"cart.svg"} width={18} height={19}></Image>
      <p>0</p>
    </CartQuantityContainer>
  );
}
