"use client";

import Image from "next/image";
import {
  ImgContainer,
  Container,
  Description,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  BuyButton,
  ProductInfo,
  NamePrice,
  Photo,
} from "./styled";
import { useCart } from "@/contexts/CartContext";

interface IProductCardProps {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
}

export default function ProductCard({
  id,
  name,
  description,
  photo,
  price,
}: IProductCardProps) {
  const { addToCart } = useCart();
  return (
    <Container>
      <Description>
        <ImgContainer>
          <Photo src={photo} alt="foto do produto" fill></Photo>
        </ImgContainer>
        <ProductInfo>
          <NamePrice>
            <ProductTitle>{name}</ProductTitle>
            <ProductPrice>R${price.replace(".00", "")}</ProductPrice>
          </NamePrice>
          <ProductDescription>{description}</ProductDescription>
        </ProductInfo>
      </Description>
      <BuyButton
        onClick={() => {
          addToCart({ description, id, name, photo, price, quantity: 1 });
        }}
      >
        <Image
          alt="Sacola"
          src={"shopping-bag.svg"}
          width={12}
          height={13.5}
        ></Image>
        <span>COMPRAR</span>
      </BuyButton>
    </Container>
  );
}
