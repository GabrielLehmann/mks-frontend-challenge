import "@testing-library/jest-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import { render, screen } from "@testing-library/react";
import { CartContextProvider } from "../contexts/CartContext";

test("ProductCard Loads and Displays products", async () => {
  render(
    <CartContextProvider>
      <ProductCard
        description="iphone de 2025"
        id={1}
        name="iphone 11"
        photo=""
        price="600"
      />
    </CartContextProvider>
  );
  expect(screen.queryByText("iphone 11")).toBeInTheDocument();
});
