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

interface IProductCardProps {
  name: string;
  description: string;
  photo: string;
  price: string;
}

export default function ProductCard({
  name,
  description,
  photo,
  price,
}: IProductCardProps) {
  return (
    <Container>
      <Description>
        <ImgContainer>
          <Photo src={photo} alt="foto do produto" fill></Photo>
        </ImgContainer>
        <ProductInfo>
          <NamePrice>
            <ProductTitle>{name}</ProductTitle>
            <ProductPrice>R${price}</ProductPrice>
          </NamePrice>
          <ProductDescription>{description}</ProductDescription>
        </ProductInfo>
      </Description>
      <BuyButton href="">
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
