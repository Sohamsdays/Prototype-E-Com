"use client";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";

import UserAccount from "../Navigation/userAccount";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CheckoutHeader() {
  //   const [showResults, setShowResults] = React.useState(false);
  //   const showCart = () => setShowResults((x) => !x);
  //   const [open, setOpen] = useState(false);
  return (
    <nav
      aria-label="App Bar"
      className="flex items-center w-full justify-between mx-auto py-4 px-8  relative  z-20 bg-white  backdrop-filter backdrop-blur-xl"
    >
      {/* LOGO */}
      <div className="ml-4 flex lg:ml-0">
        <a href="/">
          <span className="sr-only">Workflow</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>

      <div className="">
        <UserAccount />
      </div>
    </nav>
  );
}
