"use client";
import FilterWidget from "@/components/ProductList/FilterWidget";
import ProductList from "@/components/ProductList/ProductList";
import axios from "axios";
//import { ErrorBoundary } from "react-error-boundary";
//import Error from "next/error";
//import Error from "@/components/Error/Error";
import { Suspense } from "react";
//import Error from "@/app/products/search/error";

import Error from "./error";
import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import useSWR from "swr";
import Loading from "@/components/ProductList/Loading";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const fetcherr = async () => {
  const response = await fetch("");
};
export default function SearchResult({ params, searchParams }) {
  // const { data, isLoading } = useQuery({
  //   queryFn: async () => {
  //     const { data } = await axios.get(
  //       `https://dummyjson.com/products/search?q=phone`
  //     );
  //     return data;
  //   },
  // });

  //
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/search?q=${searchParams.q}`,
    fetcher
  );

  // const { data } = await axios.get(
  //   `https://dummyjson.com/products/search?q=phone`
  // );
  //const x = data.products;
  //console.log(data.products[2].title, 232);

  // fetch("https://dummyjson.com/products")
  //   .then((res) => res.json())
  //   .then(console.log);

  // ...
  if (error) throw Error;
  if (isLoading) return <Loading />;
  if (data.total === 0) {
    throw Error;
  }
  return (
    <>
      <div className="relative  flex h-full w-full flex-row">
        <FilterWidget />

        <div className="border-l border-gray-200 ">
          <h1 className="w-full font-medium py-6 text-2xl pb-3 px-4 border-b border-gray-200">
            Search Result For {searchParams.q}
          </h1>

          <ProductList products={data} searchQuery={searchParams.q} />
        </div>
      </div>
    </>
  );
}
