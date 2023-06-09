"use client";
import Link from "next/link";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import ShoppingCart from "./ShoppingCart";
import SearchBar from "./SearchBar";
import UserAccount from "./UserAccount";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
//import { useSession } from "next-auth/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AppBarDesktop() {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const removeOneFromCart = useCartStore((state) => state.removeOneFromCart);

  // Calculate the total price of the products in the cart by adding the prices of each product multiplied by its quantity.

  const [showResults, setShowResults] = React.useState(false);
  //const showCart = () => setShowResults((x) => !x);

  useEffect(() => {
    // setShowResults((x) => !x)
    const showCart = () => setShowResults((x) => !x);
  }, []);
  const [open, setOpen] = useState(false);
  // const {data:session} = useSession();
  const [totalQty, setTotalQty] = useState(0);
  useEffect(() => {
    const total = cart.reduce(
      (acc, product) => acc + (product.quantity as number),
      0
    );
    setTotalQty(total);
  }, [cart]);
  /////
  ////
  ////
  ////
  const [open1, setOpen1] = useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen1(false);
  // };

  // const handleDrawerClose = () => {
  //   setOpen1(false);
  // };
  const router = useRouter();
  // Get the cart status using the hook useCartStore, which gives us access to the cart status of the store.
  //const cart = useCartStore((state) => state.cart);
  //const addToCart = useCartStore((state) => state.addToCart);
  //const removeFromCart = useCartStore((state) => state.removeFromCart);
  //const removeOneFromCart = useCartStore((state) => state.removeOneFromCart);

  // Calculate the total price of the products in the cart by adding the prices of each product multiplied by its quantity.
  const total = cart.reduce(
    (acc, product) => acc + product.price * (product.quantity as number),
    0
  );

  const [openLmao, setOpenLmao] = useState(true);
  const [value, setValue] = useState<number>(2);
  if (total > 0) {
    var disabled = true;
  } else {
    disabled = false;
  }
  const cartCountHandler = (data: number) => {
    setValue(data);
  };
  return (
    <nav
      aria-label="App Bar"
      className="flex items-center w-full mx-auto py-4 px-8  relative  z-20 bg-white  backdrop-filter backdrop-blur-xl"
    >
      {/* LOGO */}
      <div className="ml-4 flex lg:ml-0">
        <a href="/">
          <span className="sr-only">Workflow</span>
          {/* <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
            alt=""
          /> */}
          <h1 className="font-bold text-2xl">Koona.xyz</h1>
        </a>
      </div>

      {/* Search */}
      <SearchBar />

      <div className=" flex items-center">
        <UserAccount />

        {/* Cart */}
        <div className="inline-block ml-4 relative  lg:ml-6 items-center">
          <button onClick={() => setOpen(true)}>
            <ShoppingBagIcon
              className="flex-shrink-0 h-6 w-6 text-gray-500 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </button>
          {/* {open1 && <ShoppingCart />} */}
          {/* {<ShoppingCart isOpen={open1} />} */}
          {/* //
          //
          //
          // */}

          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-30" onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                          <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                            <div className="flex items-start justify-between ">
                              <Dialog.Title className="text-lg font-medium text-gray-900">
                                Shopping cart
                              </Dialog.Title>
                              <div className="ml-3 flex h-7 items-center rela">
                                <button
                                  type="button"
                                  className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="sr-only z-40">
                                    Close panel
                                  </span>
                                  <XMarkIcon
                                    className="h-6 w-6 z-40"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>

                            <div className="mt-8">
                              <div className="flow-root">
                                <ul
                                  role="list"
                                  className="-my-6 divide-y divide-gray-200"
                                >
                                  {cart.map((product) => (
                                    <li key={product.id} className="flex py-6">
                                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                          src={product.thumbnail}
                                          alt={product.title}
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>

                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                          <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>{product.title}</h3>
                                            <p className="ml-4">
                                              {product.price}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                          {/* <p className="text-gray-500">
                                      Qty {product.quantity}
                                    </p> */}
                                          <div>
                                            <label
                                              htmlFor="Quantity"
                                              className="sr-only"
                                            >
                                              {" "}
                                              Quantity{" "}
                                            </label>

                                            <div className="flex items-center border border-gray-200 rounded">
                                              <button
                                                onClick={() =>
                                                  removeOneFromCart(product)
                                                }
                                                type="button"
                                                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                              >
                                                &minus;
                                              </button>

                                              <input
                                                type="number"
                                                id="Quantity"
                                                value={product.quantity}
                                                onChange={() =>
                                                  cartCountHandler(1)
                                                }
                                                className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                              />

                                              <button
                                                onClick={() =>
                                                  addToCart(product)
                                                }
                                                type="button"
                                                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                              >
                                                &#43;
                                              </button>
                                            </div>
                                          </div>

                                          <div className="flex">
                                            <button
                                              onClick={() =>
                                                removeFromCart(product)
                                              }
                                              type="button"
                                              className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                              Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <p>Subtotal</p>
                              <p>{total}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              Shipping and taxes calculated at checkout.
                            </p>
                            <div className="mt-6">
                              {/* <a
                          href="/checkout"
                          //className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          className={total ? "flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700":"bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"}
                        > */}
                              <button
                                disabled={!disabled}
                                onClick={() => router.push("/checkout")}
                                className={
                                  total
                                    ? "flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 w-full"
                                    : "bg-blue-500 text-white font-bold py-3 px-6 rounded-md opacity-50 cursor-not-allowed w-full"
                                }
                              >
                                Checkout
                              </button>
                              
                              {/* </a> */}
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                              <p>
                                or
                                <button
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                  onClick={() => setOpen(false)}
                                >
                                  Continue Shopping
                                  <span aria-hidden="true"> &rarr;</span>
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
          {
            //
            //
            //
            //
          }
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {totalQty}
          </span>
          <span className="sr-only">items in cart, view bag</span>
        </div>
      </div>
    </nav>
  );
}
