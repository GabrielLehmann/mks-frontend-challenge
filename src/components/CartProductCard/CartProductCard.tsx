"use client";

import Image from "next/image";
import {
  ImgContainer,
  Container,
  ProductTitle,
  ProductPrice,
  Photo,
  ProductContainer,
  AddButton,
  PlusButton,
  MinusButton,
  RemoveButton,
  Quantity,
  Qtd,
} from "./styled";
import { useCart } from "@/contexts/CartContext";

interface IProductCardProps {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
  quantity: number;
}

export default function CartProductCard({
  id,
  name,
  photo,
  price,
  quantity,
}: IProductCardProps) {
  const { increaseProduct, decreaseProduct, removeFromCart } = useCart();
  return (
    <Container>
      <ProductContainer>
        <RemoveButton
          onClick={() => {
            removeFromCart(id);
          }}
        >
          <Image
            src="Close_cart.svg"
            width={18}
            height={18}
            alt="Fechar Carrinho"
          />
        </RemoveButton>
        <ImgContainer>
          <Photo
            src={photo}
            alt="foto do produto"
            width={46}
            height={57}
          ></Photo>
        </ImgContainer>
        <ProductTitle>{name}</ProductTitle>
        <AddButton>
          <Qtd>Qtd:</Qtd>
          <MinusButton
            onClick={() => {
              decreaseProduct(id);
            }}
          >
            <Image src="-.svg" width={5} height={15} alt="Menos" />
          </MinusButton>
          <Quantity>{quantity}</Quantity>
          <PlusButton
            onClick={() => {
              increaseProduct(id);
            }}
          >
            <Image src="+.svg" width={5} height={15} alt="Mais" />
          </PlusButton>
        </AddButton>
        <ProductPrice>R${price.replace(".00", "")}</ProductPrice>
      </ProductContainer>
    </Container>
  );
}
