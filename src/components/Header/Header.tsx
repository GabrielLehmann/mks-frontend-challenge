"use client";

import CartQuantity from "../CartQuantity/CartQuantity";
import {
  Container,
  HeaderSubTitle,
  HeaderTitle,
  TitleContainer,
} from "./styled";

export default function Header() {
  return (
    <Container>
      <TitleContainer>
        <HeaderTitle>MKS</HeaderTitle>
        <HeaderSubTitle>Sistemas</HeaderSubTitle>
      </TitleContainer>
      <CartQuantity></CartQuantity>
    </Container>
  );
}
