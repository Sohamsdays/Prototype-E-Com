"use client";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";
import Link from "next/link";
const orders = [
  {
    number: "WU88191111",
    date: "January 22, 2021",
    datetime: "2021-01-22",
    href: "#",
    invoiceHref: "#",
    total: "$302.00",
    products: [
      {
        id: 1,
        name: "Nomad Tumbler",
        description:
          "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
        href: "#",
        price: "$35.00",
        status: "out-for-delivery",
        date: "January 5, 2021",
        datetime: "2021-01-05",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      {
        id: 2,
        name: "Nomad Tumbler",
        description:
          "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
        href: "#",
        price: "$35.00",
        status: "out-for-delivery",
        date: "January 5, 2021",
        datetime: "2021-01-05",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      {
        id: 3,
        name: "Nomad Tumbler",
        description:
          "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
        href: "#",
        price: "$35.00",
        status: "out-for-delivery",
        date: "January 5, 2021",
        datetime: "2021-01-05",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      {
        id: 4,
        name: "Nomad Tumbler",
        description:
          "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
        href: "#",
        price: "$35.00",
        status: "out-for-delivery",
        date: "January 5, 2021",
        datetime: "2021-01-05",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      // More products...
    ],
  },
  // More orders...
];
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

export default function OrderHistory() {
  const cart = useCartStore((state) => state.cart);
  const [cartItems,setCartItems] = useState<Product[]>([]);
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    console.log(cart);
    setCartItems(cart);
    

  }, [cart]);
  if (cartItems.length === 0) {
    return <div>Add products to cart first</div>;
  }

  return (
    <><div className="px-4 sm:px-0">
    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
      Order history
    </h1>
    <p className="mt-2 text-sm text-gray-500">
      Check the status of recent orders, manage returns, and
      download invoices.
    </p>
  </div>
      {cartItems.map((product) => (
        <div key={product.id} className="flex py-6 sm:py-10">
          <div className="min-w-0 flex-1 lg:flex lg:flex-col">
            <div className="lg:flex-1">
              <div className="sm:flex">
                <div>
                  <h4 className="font-medium text-gray-900">{product.title}</h4>
                  <p className="hidden mt-2 text-sm text-gray-500 sm:block">
                    {product.description}
                  </p>
                </div>
                <p className="mt-1 font-medium text-gray-900 sm:mt-0 sm:ml-6">
                  {product.price}
                </p>
              </div>
              <div className="mt-2 flex text-sm font-medium sm:mt-4">
                
                <Link href={`/products/${product.id}`} className="text-indigo-600 hover:text-indigo-500"> Go to Product</Link>
                <div className="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                  <p className="text-gray-500">Qty {product.quantity}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-4 flex-shrink-0 sm:m-0 sm:mr-6 sm:order-first">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-40 sm:h-40 lg:w-52 lg:h-52"
            />
          </div>
        </div>
      ))}
    </>
  );
}
