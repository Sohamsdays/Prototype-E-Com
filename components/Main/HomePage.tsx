"use client";

import { usePathname } from "next/navigation";
import React from "react";
import useSWR from "swr";
import Loading from "../ProductList/Loading";
import ProductCard from "../ProductList/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import HomePageProducts from "./HomePageProducts";
import { signOut } from "next-auth/react";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function HomePage() {
  const pathname = usePathname();
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products?limit=10&skip=10`,
    fetcher
  );

  //console.log(data);

  // const { data } = await axios.get(
  //   `https://dummyjson.com/products/search?q=phone`
  // );
  //const x = data.products;
  //console.log(data.products[2].title, 232);

  // fetch("https://dummyjson.com/products")
  //   .then((res) => res.json())
  //   .then(console.log);

  // ...<Loading />
  // if (error) throw Error;
  // if (isLoading) return <h1>HJajskdh</h1>;
  // if (data.total === 0) {
  //   throw Error;
  // }
  return (
    <>
      <div className="w-full py-6 flex flex-col items-center mx-auto">
        {/* Caraousel */}<button onClick={()=>signOut()}></button>
        <div className="carousel relative container mx-auto">
          <div className="carousel-inner relative overflow-hidden w-full">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  onClick={() => {
                    console.log("clicked");
                  }}
                  alt="product_image"
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ"
                  width={200}
                  height={200}
                  style={{ width: "full", height: "500px" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt="product_image"
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ"
                  width={200}
                  height={200}
                  style={{ width: "full", height: "500px" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  alt="product_image"
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ"
                  width={200}
                  height={200}
                  style={{ width: "full", height: "500px" }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Product Section */}
        <section className="bg-white py-8">
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            {/* {data.products.map((product) => {
              return <ProductCard product={product} />;
            })} */}

            <HomePageProducts />

            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg"
                  src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                />
                <div className="pt-3 flex items-center justify-between">
                  <p className="">Product Name</p>
                  <svg
                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                  </svg>
                </div>
                <p className="pt-1 text-gray-900">£9.99</p>
              </a>
            </div>

            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg"
                  src="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                />
                <div className="pt-3 flex items-center justify-between">
                  <p className="">Product Name</p>
                  <svg
                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                  </svg>
                </div>
                <p className="pt-1 text-gray-900">£9.99</p>
              </a>
            </div>

            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg"
                  src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                />
                <div className="pt-3 flex items-center justify-between">
                  <p className="">Product Name</p>
                  <svg
                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                  </svg>
                </div>
                <p className="pt-1 text-gray-900">£9.99</p>
              </a>
            </div>

            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg"
                  src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                />
                <div className="pt-3 flex items-center justify-between">
                  <p className="">Product Name</p>
                  <svg
                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                  </svg>
                </div>
                <p className="pt-1 text-gray-900">£9.99</p>
              </a>
            </div>

            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg"
                  src="https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                />
                <div className="pt-3 flex items-center justify-between">
                  <p className="">Product Name</p>
                  <svg
                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                  </svg>
                </div>
                <p className="pt-1 text-gray-900">£9.99</p>
              </a>
            </div>

            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg"
                  src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                />
                <div className="pt-3 flex items-center justify-between">
                  <p className="">Product Name</p>
                  <svg
                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                  </svg>
                </div>
                <p className="pt-1 text-gray-900">£9.99</p>
              </a>
            </div>

            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg"
                  src="https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                />
                <div className="pt-3 flex items-center justify-between">
                  <p className="">Product Name</p>
                  <svg
                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                  </svg>
                </div>
                <p className="pt-1 text-gray-900">£9.99</p>
              </a>
            </div>

            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <a href="#">
                <img
                  className="hover:grow hover:shadow-lg"
                  src="https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
                />
                <div className="pt-3 flex items-center justify-between">
                  <p className="">Product Name</p>
                  <svg
                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                  </svg>
                </div>
                <p className="pt-1 text-gray-900">£9.99</p>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-8">
          <div className="container py-8 px-6 mx-auto">
            <a
              className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
              href="#"
            >
              About
            </a>

            <p className="mt-8 mb-8">
              This template is inspired by the stunning nordic minamalist design
              - in particular:
              <br />
              <a
                className="text-gray-800 underline hover:text-gray-900"
                href="http://savoy.nordicmade.com/"
                target="_blank"
              >
                Savoy Theme
              </a>{" "}
              created by{" "}
              <a
                className="text-gray-800 underline hover:text-gray-900"
                href="https://nordicmade.com/"
              >
                https://nordicmade.com/
              </a>{" "}
              and{" "}
              <a
                className="text-gray-800 underline hover:text-gray-900"
                href="https://www.metricdesign.no/"
                target="_blank"
              >
                https://www.metricdesign.no/
                
              </a>
              <button onClick={()=>signOut()}>Logout here</button>
            </p>

            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur{" "}
              <a href="#">random link</a> adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Vel risus commodo
              viverra maecenas accumsan lacus vel facilisis volutpat. Vitae
              aliquet nec ullamcorper sit. Nullam eget felis eget nunc lobortis
              mattis aliquam. In est ante in nibh mauris. Egestas congue quisque
              egestas diam in. Facilisi nullam vehicula ipsum a arcu. Nec nam
              aliquam sem et tortor consequat. Eget mi proin sed libero enim sed
              faucibus turpis in. Hac habitasse platea dictumst quisque. In
              aliquam sem fringilla ut. Gravida rutrum quisque non tellus orci
              ac auctor augue mauris. Accumsan lacus vel facilisis volutpat est
              velit egestas dui id. At tempor commodo ullamcorper a. Volutpat
              commodo sed egestas egestas fringilla. Vitae congue eu consequat
              ac.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
