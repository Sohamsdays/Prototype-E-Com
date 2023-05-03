"use client";
import FilterWidget from "@/components/productList/filterWidget";
import Loading from "@/components/ProductList/Loading";
import ProductList from "@/components/ProductList/ProductList";
import axios from "axios";
import useSWR from "swr";
import { usePathname } from "next/navigation";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function ProductsByCategory() {
  // const { data } = await axios.get(
  //   `https://www.purplle.com/neo/merch/items?list_type=search&custom=&list_type_value=lipstick&page=1`
  // );
  const pathname = usePathname();
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com${pathname}`,
    fetcher
  );

  //console.log(data);

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
            Products by category
          </h1>
          <ProductList products={data} searchQuery={""} />
        </div>
      </div>
    </>
  );
}
