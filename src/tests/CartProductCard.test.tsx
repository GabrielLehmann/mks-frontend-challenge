import "@testing-library/jest-dom";
import CartProductCard from "../components/CartProductCard/CartProductCard";
import { render, screen } from "@testing-library/react";
import { CartContextProvider } from "../contexts/CartContext";

test("CartProductCard Loads and Displays products", async () => {
  render(
    <CartContextProvider>
      <CartProductCard
        id={2}
        name={"headset"}
        description={"headset wireless"}
        photo={""}
        price={"900"}
        quantity={0}
      />
    </CartContextProvider>
  );
  expect(screen.queryByText("headset")).toBeInTheDocument();
});
