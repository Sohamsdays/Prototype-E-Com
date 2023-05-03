"use client";
import React from "react";

export default function MegaMenu() {
  return (
    <nav
      aria-label="Mega Menu"
      className="flex items-center w-full mx-auto z-10  relative shadow-md border-t-[1px] border-gray-300  bg-white  backdrop-filter backdrop-blur-xl"
    >
      <div className="max-w-3xl  flex   items-center justify-between mx-auto  font-medium">
        <ul className="flex      flex-row space-x-8 text-gray-900 pr-20 ">
          {/* {Added padding right to center menu items} */}
          <li className=" inline-block py-3 px-2 hover:border-b-orange-500 border-b-4 border-transparent   ">
            <a
              href="/products/category/laptops"
              className="relative block px-2 "
            >
              Laptops
            </a>
            <div className="p-6 mega-menu mb-16 font-normal  bg-slate-100   ">
              <div className=" h-full  flex ">
                {/* <ul className=" w-full  h-full flex justify-start ">
                  <li className="pr-6 w-1/6">
                    <div>
                      <span className="py-1 px-2 text-pink-600 font-medium">
                        Face
                      </span>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <a
                            href="/products/face/facewash"
                            target="_blank"
                            className="py-1 px-2 hover:text-pink-600"
                          >
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="pr-6 w-1/6">
                    <div>
                      <a
                        href="#"
                        target="_blank"
                        className="py-1 px-2 hover:text-pink-600 font-medium"
                      >
                        Face
                      </a>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="pr-6 w-1/6">
                    <div>
                      <a href="#" target="_blank">
                        Face
                      </a>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="pr-6 w-1/6">
                    <div>
                      <a href="#" target="_blank">
                        Face
                      </a>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="pr-6 w-1/6">
                    <div>
                      <a href="#" target="_blank">
                        Face
                      </a>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="pr-6 w-1/6">
                    <div>
                      <a href="#" target="_blank">
                        Face
                      </a>
                    </div>
                    <div>
                      <ul>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-1 px-2 hover:text-pink-600">
                            Face Wash
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul> */}
                {/* <ul className=" w-full     ">
                  <li>
                    <a href="#">Tatooasdasdine</a>
                  </li>
                </ul>
                <ul className=" w-full     ">
                  <li>
                    <a href="#">Tatooasdasdine</a>
                  </li>
                </ul>
                <ul className=" w-full     ">
                  <li>
                    <a href="#">Tatooasdasdine</a>
                  </li>
                  <li>
                    <a href="#">Tatooasdasdine</a>
                  </li>
                  <li>
                    <a href="#">Tatooasdasdine</a>
                  </li>
                  <li>
                    <a href="#">Tatooasdasdine</a>
                  </li>
                </ul> */}
              </div>
            </div>
          </li>
          <li className=" inline-block py-3 px-2 hover:border-b-orange-500 border-b-4 border-transparent">
            <a href="/products/category/furniture" className="inline-block">
              Furniture
            </a>
          </li>
          <li className=" inline-block py-3 px-2 hover:border-b-orange-500 border-b-4 border-transparent ">
            <a href="/products/category/motorcycle" className="inline-block">
              Motorcycle
            </a>
          </li>
          <li className=" inline-block py-3 px-2 hover:border-b-orange-500 border-b-4 border-transparent ">
            <a href="/products/category/fragrances" className="inline-block">
              Fragrances
            </a>
          </li>
          <li className=" inline-block py-3 px-2 hover:border-b-orange-500 border-b-4 border-transparent ">
            <a href="/products/category/mens-watches" className="inline-block">
              Watches
            </a>
          </li>
          <li className=" inline-block py-3 px-2 hover:border-b-orange-500 border-b-4 border-transparent ">
            <a
              href="/products/category/womens-jewellery"
              className="inline-block"
            >
              Jewellery
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
