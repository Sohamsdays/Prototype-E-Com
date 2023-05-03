"use client";

import React, { Fragment, useEffect, useState } from "react";
import AppBarMobile from "./appBar.mobile";
import SearchBar from "./searchBar";

export default function NavMobile() {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-10">
        <AppBarMobile />
        <SearchBar />
      </div>
    </>
  );
}