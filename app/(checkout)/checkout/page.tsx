"use client";
import { Popover, Transition } from "@headlessui/react";
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import { Suspense } from "react";
import CheckoutItemList from "@/components/CheckoutFlow/CheckoutItemList";
const steps = [
  { name: "Address", href: "#", status: "current" },
  { name: "Payment", href: "#", status: "upcoming" },
];
const products = [
  {
    id: 1,
    name: "Micro Backpack",
    href: "#",
    price: "$70.00",
    color: "Moss",
    size: "5L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-04-product-01.jpg",
    imageAlt:
      "Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.",
  },
  // More products...
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
interface Products {
  products: Product[];
}

 const CheckoutPage = () => {
  const cart = useCartStore((state) => state.cart);
  useEffect(()=>{
    
  },[cart])
  console.log(cart);
  return (
    <div className="bg-white ">
      {/* Background color split screen for large screens */}

      <header className="relative  bg-white border-b border-gray-200 text-sm font-medium text-gray-700">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-end sm:justify-center">
            <nav aria-label="Progress" className="hidden sm:block">
              <ul role="list" className="flex space-x-4">
                {steps.map((step, stepIdx) => (
                  <li key={step.name} className="flex items-center">
                    {step.status === "current" ? (
                      <a
                        href={step.href}
                        aria-current="page"
                        className="text-indigo-600"
                      >
                        {step.name}
                      </a>
                    ) : (
                      <a href={step.href}>{step.name}</a>
                    )}

                    {stepIdx !== steps.length - 1 ? (
                      <ChevronRightIcon
                        className="w-5 h-5 text-gray-300 ml-4"
                        aria-hidden="true"
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
            <p className="sm:hidden">Step 2 of 4</p>
          </div>
        </div>
      </header>

      <main className="relative flex w-full  ">
        <form className="pt-8 pb-36 px-4 grow">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <section aria-labelledby="contact-info-heading">
              <h2
                id="contact-info-heading"
                className="text-lg font-medium text-gray-900"
              >
                Contact information
              </h2>

              <div className="mt-6">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    required
                    type="email"
                    id="email-address"
                    name="email-address"
                    autoComplete="email"
                    className="border-2 border-gray-300 focus:border-pink-600  bg-white h-9 px-5 pr-16 rounded-lg text-sm focus:outline-none  "
                  />
                </div>
              </div>
            </section>

            <section aria-labelledby="payment-heading" className="mt-10">
              <h2
                id="payment-heading"
                className="text-lg font-medium text-gray-900"
              >
                Payment details
              </h2>

              <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                <div className="col-span-3 sm:col-span-4">
                  <label
                    htmlFor="name-on-card"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name on card
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name-on-card"
                      name="name-on-card"
                      autoComplete="cc-name"
                      className="border-2 border-gray-300 focus:border-pink-600  bg-white h-9 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="col-span-3 sm:col-span-4">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card number
                  </label>
                  <div className="mt-1">
                    <input
                      placeholder="0000 0000 0000 0000"
                      type="text"
                      id="card-number"
                      name="card-number"
                      autoComplete="cc-number"
                      className="border-2 border-gray-300 focus:border-pink-600  bg-white h-9 px-5  rounded-lg text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="col-span-3 sm:col-span-4">
                  <label
                    htmlFor="expiration-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiration date (MM/YY)
                  </label>
                  <div className="mt-1">
                    <input
                    placeholder="MM/YY"
                      type="text"
                      name="expiration-date"
                      id="expiration-date"
                      autoComplete="cc-exp"
                      className="border-2 border-gray-300 focus:border-pink-600  bg-white h-9 px-5  rounded-lg text-sm focus:outline-none w-1/6"
                    />
                  </div>
                </div>

                <div className="col-span-3 sm:col-span-4">
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CVC
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      autoComplete="csc"
                      className="border-2 border-gray-300 focus:border-pink-600  bg-white h-9 px-5  rounded-lg text-sm focus:outline-none w-1/6"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="shipping-heading" className="mt-10">
              <h2
                id="shipping-heading"
                className="text-lg font-medium text-gray-900"
              >
                Shipping address
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
               

                <div className="sm:col-span-3">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div className="mt-1">
                    <textarea
                      
                      id="address"
                      name="address"
                      autoComplete="street-address"
                      className=" pl-3 block border-2 h-16 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="apartment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apartment, suite, etc.
                  </label>
                  <div className="mt-1">
                    <textarea
                      
                      id="apartment"
                      name="apartment"
                      className="pl-3 block border-2 h-16 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      autoComplete="address-level2"
                      className="border-2 h-10 pl-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="region"
                      name="region"
                      autoComplete="address-level1"
                      className="border-2 h-10 pl-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Postal code
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="postal-code"
                      name="postal-code"
                      autoComplete="postal-code"
                      className=" border-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 pl-3"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="billing-heading" className="mt-10">
              <h2
                id="billing-heading"
                className="text-lg font-medium text-gray-900"
              >
                Billing information
              </h2>

              <div className="mt-6 flex items-center">
                <input
                  id="same-as-shipping"
                  name="same-as-shipping"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <div className="ml-2">
                  <label
                    htmlFor="same-as-shipping"
                    className="text-sm font-medium text-gray-900"
                  >
                    Same as shipping information
                  </label>
                </div>
              </div>
            </section>

            <div className="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
              {/* <Link href="/with_progress_bars"> */}
                <button
                  type="submit"
                  className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:ml-6 sm:order-last sm:w-auto"
                >
                  Continue
                </button>
              {/* </Link> */}
              <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                You be charged until the next step.
              </p>
            </div>
          </div>
        </form>
        <div className=" basis-[450px] sticky top-8 self-start">
          <h1 className="sr-only">Order information</h1>

          <section
            aria-labelledby="summary-heading"
            className="bg-gray-50  pb-10 px-4 sm:px-6 "
          >
            <div>
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Order summary
              </h2>

              
                {/* <ul
                  role="list"
                  className="text-sm font-medium text-gray-900 divide-y divide-gray-200"
                >
                    

                  {cart.map((product) => (
                    <li
                      key={product.id}
                      className="flex items-start py-6 space-x-4"
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.imageAlt}
                        className="flex-none w-20 h-20 rounded-md object-center object-cover"
                      />
                      <div className="flex-auto space-y-1">
                        <h3>{product.title}</h3>
                        <p className="text-gray-500">{product.color}</p>
                        <p className="text-gray-500">{product.size}</p>
                      </div>
                      <p className="flex-none text-base font-medium">
                        {product.price}
                      </p>
                    </li>
                  ))}
                
                </ul> */}
              
              <CheckoutItemList />
              <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd>$320.00</dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Shipping</dt>
                  <dd>$15.00</dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt className="text-gray-600">Taxes</dt>
                  <dd>$26.80</dd>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">$361.80</dd>
                </div>
              </dl>

              <Popover className="fixed bottom-0 inset-x-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
                <div className="relative z-10 bg-white border-t border-gray-200 px-4 sm:px-6">
                  <div className="max-w-lg mx-auto">
                    <Popover.Button className="w-full flex items-center py-6 font-medium">
                      <span className="text-base mr-auto">Total</span>
                      <span className="text-base mr-2">$361.80</span>
                      <ChevronUpIcon
                        className="w-5 h-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>
                </div>

                <Transition.Root as={Fragment}>
                  <div>
                    <Transition.Child
                      as={Fragment}
                      enter="transition-opacity ease-linear duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity ease-linear duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                      as={Fragment}
                      enter="transition ease-in-out duration-300 transform"
                      enterFrom="translate-y-full"
                      enterTo="translate-y-0"
                      leave="transition ease-in-out duration-300 transform"
                      leaveFrom="translate-y-0"
                      leaveTo="translate-y-full"
                    >
                      <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
                        <dl className="max-w-lg mx-auto space-y-6">
                          <div className="flex items-center justify-between">
                            <dt className="text-gray-600">Subtotal</dt>
                            <dd>$320.00</dd>
                          </div>

                          <div className="flex items-center justify-between">
                            <dt className="text-gray-600">Shipping</dt>
                            <dd>$15.00</dd>
                          </div>

                          <div className="flex items-center justify-between">
                            <dt className="text-gray-600">Taxes</dt>
                            <dd>$26.80</dd>
                          </div>
                        </dl>
                      </Popover.Panel>
                    </Transition.Child>
                  </div>
                </Transition.Root>
              </Popover>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default CheckoutPage;