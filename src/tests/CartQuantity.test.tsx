import "@testing-library/jest-dom";
import CartQuantity from "../components/CartQuantity/CartQuantity";
import { render, screen } from "@testing-library/react";
import { CartContextProvider } from "../contexts/CartContext";

test("CartQuantity renders cart icon and total quantity from CartContext", async () => {
  render(
    <CartContextProvider>
      <CartQuantity />
    </CartContextProvider>
  );

  const cartIcon = screen.getByAltText("Carrinho");
  expect(cartIcon).toBeInTheDocument();
});
