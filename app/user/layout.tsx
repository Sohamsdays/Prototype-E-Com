"use client"
import "../globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer";
import {
  Bars3Icon,
  BellIcon,
  CogIcon,
  CreditCardIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Session } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const subNavigation = [
  {
    name: "Profile",
    href: "/user/profile",
    icon: UserCircleIcon,
    current: false,
  },
  { name: "Address", href: "/user/address", icon: CogIcon, current: false },

  {
    name: "Orders",
    href: "/user/order-history",
    icon: CogIcon,
    current: false,
  },
  { name: "WishList", href: "/user/wishlist", icon: CogIcon, current: false },
];

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

 function DashLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  //const [name, setName] = React.useState("Plan & Billing");
  return (
    <html lang="en">
      <body className="flex flex-col h-screen leading-normal tracking-normal bg-gray-100">
        {" "}
        <SessionProvider session={session}>
        {/* to keep footer on the bottom always, add justify-between in the body */}
        <Header />
        <main className="mt-36 max-w-7xl mx-auto mb-auto relative  border-2 border-red-500">
          {children}
        </main>
        <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
export default DashLayout;
