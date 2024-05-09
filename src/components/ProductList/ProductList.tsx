"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Container, Grid } from "./styled";

interface IProduct {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
}

interface IResponse {
  products: IProduct[];
  count: number;
}

const page = 1;
const rows = 8;
const sortBy = "id";
const orderBy = "ASC";

export default function ProductList() {
  const { data, isPending } = useQuery<IResponse>({
    queryKey: ["ProductList"],
    queryFn: () => {
      return fetch(
        `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`
      ).then((res) => res.json());
    },
  });
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!data) {
    return <div>Carregando</div>;
  }

  return (
    <Container>
      <Grid>
        {data.products.map((product) => {
          return <ProductCard {...product} key={product.id} />;
        })}
      </Grid>
    </Container>
  );
}
