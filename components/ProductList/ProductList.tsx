"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { ErrorBoundary } from "react-error-boundary";
//import Error from "./error";
import axios from "axios";
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
interface Products {
  products: Product[];
}
function ProductList({ products }: { products: Products }) {
  // console.log(products, 23123123312);
  return (
    <section
      aria-labelledby="products-section"
      className="px-4 grow grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-3 py-3"
    >
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.products.map((product: any) => (
            <ProductCard product={product} key={Math.random()} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
