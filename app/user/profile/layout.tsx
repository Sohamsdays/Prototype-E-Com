"use client";
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
import Providers from "@/app/provider/providers";

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
  

  
  
];
export default function DashboardLayout({
  children, // will be a page or nested layout
  // session,
}: {
  children: React.ReactNode;
  // session: any;
}) {
  const [name, setName] = React.useState("Plan & Billing");
  return (<>
  {/* <SessionProvider session={session}> */}
  <Providers>
    <section className=" relative  flex h-full w-full flex-row ">
      {/* Include shared UI here e.g. a header or sidebar */}
      <aside className="w-64 px-4 basis-64 sticky top-32 self-start">
        <nav className="space-y-1">
          {subNavigation.map((item) => (
            <a
              onClick={() => setName(item.name)}
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-50 text-orange-600 hover:bg-white"
                  : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                "group rounded-md px-3 py-2 flex items-center text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-orange-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>

      {children}
    </section>
    </Providers>
    {/* </SessionProvider> */}
    </>
  );
}
