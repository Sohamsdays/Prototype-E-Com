"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import {
  QueueListIcon,
  HeartIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
// import { signIn, useSession } from "next-auth/react";
import { DefaultSession, ISODateString, Session } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Session1 extends DefaultSession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    username?: string | null;
  };
  expires: ISODateString;
}

export default function UserAccount() {
  // const { data: session } = useSession();
  // console.log(324234, session);
  const { data, status } = useSession();
  const Session1 = data as Session1;
  console.log("Hello");
  const router = useRouter();
  return (
    <>
      {Session1?.user ? (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 items-center   px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50">
              <UserCircleIcon className="h-6 w-6 text-gray-500" />
              {Session1.user.username}
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-30 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "inline-flex px-4 py-2 text-sm w-full"
                      )}
                      onClick={() => router.push("/user/profile")}
                    >
                      <UserIcon className="h-5 w-5 mr-3 text-gray-500" />
                      Profile
                    </button>
                  )}
                </Menu.Item>
                {/* <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "inline-flex px-4 py-2 text-sm w-full"
                      )}
                    >
                      <QueueListIcon className="h-5 w-5 mr-3 text-gray-500" />
                      Orders
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "inline-flex px-4 py-2 text-sm w-full"
                      )}
                    >
                      <HeartIcon className="h-5 w-5 mr-3 text-gray-500" />
                      Wishlist
                    </a>
                  )}
                </Menu.Item> */}
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => signOut()}
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "inline-flex px-4 py-2 text-sm w-full"
                        )}
                      >
                        <ArrowRightOnRectangleIcon className="h-5 w-5 mr-3 text-gray-500" />
                        Log out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        // <h1>Hello</h1>
        <button
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      )}
    </>
  );
}
