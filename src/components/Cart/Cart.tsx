import { useCart } from "../../contexts/CartContext";
import CartProductCard from "../CartProductCard/CartProductCard";
import Image from "next/image";
import {
  Container,
  Exit,
  Finish,
  FinishPrice,
  Price,
  Products,
  Title,
  TitleExit,
  Total,
  TotalPrice,
} from "./styled";

const variants = {
  open: { x: 0 },
  closed: { x: "100%" },
};

export default function Cart() {
  const { cart, isOpen, setIsOpen, getTotalCartPrice } = useCart();
  return (
    <Container
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      initial={"closed"}
      transition={{ bounce: 0 }}
    >
      <TitleExit>
        <Title>
          Carrinho <br />
          de compras
        </Title>
        <Exit
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Image
            src="Close_cart.svg"
            width={38}
            height={38}
            alt="Fechar Carrinho"
          />
        </Exit>
      </TitleExit>
      <Products>
        {cart.map((product) => {
          return <CartProductCard {...product} key={product.id} />;
        })}
      </Products>
      <FinishPrice>
        <TotalPrice>
          <Total>Total:</Total>
          <Price>R${getTotalCartPrice()}</Price>
        </TotalPrice>
        <Finish href="">Finalizar Compra</Finish>
      </FinishPrice>
    </Container>
  );
}
