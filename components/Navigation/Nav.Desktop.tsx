"use client";
import React, { Fragment, useEffect, useState } from "react";
import AppBarDesktop from "./AppBar.Desktop";
import MegaMenu from "./MegaMenu.Desktop";
import { SessionProvider, useSession } from "next-auth/react";
import { Session } from "next-auth";

export default function NavDesktop() {
  // { session }: { session: Session }
  // const { data: session, status } = useSession();
  // console.log(status);
  return (
    <>
      {/* <SessionProvider session={session}> */}
      <div className="grid grid-cols-1  fixed inset-x-0 top-0 z-10">
        <AppBarDesktop />
        <MegaMenu />
      </div>
      {/* </SessionProvider> */}
    </>
  );
}
