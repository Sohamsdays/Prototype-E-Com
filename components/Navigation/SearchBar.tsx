"use client";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function SearchBar() {
  const searchValue = useSearchParams()?.get("q") || "" as string;

  const [searchInputValue, setSearchInputValue] =
    React.useState<string>(searchValue);

  const handleSearchInput: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchInputValue(event.target.value);
  };

  return (
    <div className=" relative mx-auto text-gray-600">
      <form action="/products/search" method="GET">
        <input
          className="border-2 border-gray-300 focus:border-pink-600  bg-white h-11 px-5 pr-16 rounded-lg text-sm focus:outline-none md:w-[700px] w-full "
          type="search"
          name="q"
          placeholder="Search for Facewash, Kajol, Lipstick..."
          value={searchInputValue}
          onChange={(event) => handleSearchInput(event)}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 bottom-0 rounded-r-lg   w-16 border-trasparent  border-0 flex justify-center items-center"
        >
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
        </button>
      </form>
    </div>
  );
}
