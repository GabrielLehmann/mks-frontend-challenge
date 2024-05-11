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
  MobilePrice,
} from "./styled";
import { useCart } from "../../contexts/CartContext";
import { useWindowSize } from "../../hooks/useWindowSize";

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
  const { width } = useWindowSize();
  const isMobile = width! <= 768;
  return (
    <Container>
      <ProductContainer>
        <RemoveButton
          onClick={() => {
            removeFromCart(id);
          }}
        >
          <Image
            src={isMobile ? "x.svg" : "Close_cart.svg"}
            width={18}
            height={18}
            alt="Fechar Carrinho"
          />
        </RemoveButton>
        <ImgContainer>
          <Photo src={photo} alt="foto do produto" fill></Photo>
        </ImgContainer>
        <ProductTitle>{name}</ProductTitle>
        <MobilePrice>
          <AddButton>
            <Qtd>Qtd:</Qtd>
            <MinusButton
              onClick={() => {
                decreaseProduct(id);
              }}
            >
              <Image
                src="-.svg"
                width={isMobile ? 10 : 5}
                height={15}
                alt="Menos"
              />
            </MinusButton>
            <Quantity>{quantity}</Quantity>
            <PlusButton
              onClick={() => {
                increaseProduct(id);
              }}
            >
              <Image
                src="+.svg"
                width={isMobile ? 10 : 5}
                height={15}
                alt="Mais"
              />
            </PlusButton>
          </AddButton>
          <ProductPrice>R${price.replace(".00", "")}</ProductPrice>
        </MobilePrice>
      </ProductContainer>
    </Container>
  );
}
