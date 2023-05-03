"use client";
import { usePathname } from "next/navigation";
import React from "react";
import useSWR from "swr";
import ProductCard from "../ProductList/ProductCard";
import Loading from "../ProductList/Loading";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity?: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const HomePageProducts = () => {
  const pathname = usePathname();
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products?limit=10&skip=10`,
    fetcher
  );
  console.log(data);
  //console.log(data);

  // const { data } = await axios.get(
  //   `https://dummyjson.com/products/search?q=phone`
  // );
  //const x = data.products;
  //console.log(data.products[2].title, 232);

  // fetch("https://dummyjson.com/products")
  //   .then((res) => res.json())
  //   .then(console.log);

  // ...<Loading />
  if (error) throw Error;
  if (isLoading) return <Loading/>;
//   if (data.total === 0) {
//     throw Error;
//   }


  return data.products.map((product:Product) => {
    return <ProductCard product={product} key={Math.random()} />;
  });
};

export default HomePageProducts;
