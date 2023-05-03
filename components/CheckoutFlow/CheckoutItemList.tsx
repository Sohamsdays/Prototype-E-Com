"use client";
import { useCartStore } from "@/store/cartStore";
import React, { useEffect, useState } from "react";

const CheckoutItemList = () => {
  const cart1 = useCartStore((state) => state.cart);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (<>
    {mounted && (
      <ul
        role="list"
        className="text-sm font-medium text-gray-900 divide-y divide-gray-200"
      >
        {cart1.map((product) => (
          <li key={product.id} className="flex items-start py-6 space-x-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="flex-none w-20 h-20 rounded-md object-center object-cover"
            />
            <div className="flex-auto space-y-1">
              <h3>{product.title}</h3>
              {/* <p className="text-gray-500">{product.stock}</p>
              <p className="text-gray-500">{product.size}</p> */}
              <p className="text-gray-500">QTY: {product.quantity}</p>
            </div>
            <p className="flex-none text-base font-medium">{product.price}</p>
          </li>
        ))}
      </ul>
    )}
    </>
  );
};

export default CheckoutItemList;
