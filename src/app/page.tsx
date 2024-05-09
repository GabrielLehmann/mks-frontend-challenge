"use client";

import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductList from "@/components/ProductList/ProductList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container } from "./styled";
import { CartContextProvider } from "@/contexts/CartContext";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <QueryClientProvider client={queryClient}>
          <ProductList />
        </QueryClientProvider>

        {/* <ProductCard /> */}
        <Footer />
      </Container>
    </CartContextProvider>
  );
}
