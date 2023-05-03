"use client";
import toast, { Toaster } from "react-hot-toast";
import { HeartIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import Skeleton from "react-loading-skeleton";
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
const notify = () =>
  toast.success("Added to cart.", {
    position: "bottom-center",
    duration: 4000,
  });
function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cart);
  const [colorRed,setColorRed]= useState(false)
  // console.log(product);
  function handleClick() {
    setColorRed(!colorRed);
   ;}
  return (
    <div className="max-w-xs relative flex flex-col bg-white shadow-sm overflow-hidden rounded-md border border-gray-200">
      <div className="h-96 pb-10 w-60 px-4 pt-4">
        <a href={`/products/${product.id}`}  target="_blank">
          <div className="h-60 rounded-lg overflow-hidden pb-4">
            <img
              // src={product.primary_image_url}
              // alt={product.imageAlt}
              // className="w-full h-full object-center object-cover"
              src={product.images[0] }
              alt={product.description }
              className="w-full h-full object-center object-cover"
            />
          </div>
          <h3 className="font-normal text-sm text-gray-900 h-10 overflow-clip">
            {/* {product.name} */}
            {product.title ||<Skeleton/>}
          </h3>

          <h4 className="text-sm text-gray-900 font-light py-3">
            MRP: <span className="font-normal">{product.price  ||<Skeleton/>}</span>
          </h4>
        </a>
      </div>

      <div className="flex items-center w-full absolute bottom-0">
        <button className="h-10 basis-1/4 relative flex border-t hover:border-gray-200  w-full px-2 items-center justify-center">
         <button onClick={handleClick}><HeartIcon className={`h-6 w-6 ${colorRed ?"text-red-500" : "text-gray-500"}  `}/></button> 
          <span className="sr-only">
            , {/* {product.name} */}
            {product.title}
            
          </span>
        </button>

        <button
          onClick={() => {
            addToCart(product);
            notify();
          }}
          className="max-h-10 overflow-hidden relative flex basis-3/4 w-full bg-pink-500 hover:bg-pink-600 py-2 px-8 items-center justify-center text-lg font-medium text-white"
        >
          Add to cart
          <span className="sr-only">
            , {/* {product.name} */}
            {product.title}
          </span>
        </button>
        <Toaster />
      </div>
    </div>
  );
}

export default ProductCard;
