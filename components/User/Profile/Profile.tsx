"use client";

import { DefaultSession, ISODateString, Session } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

interface Session1 extends DefaultSession {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string;
    username?: string;
    lastName?: string;
    firstName?: string;
    gender?: string;
  };
  expires: ISODateString;
}
export default function Profile() {
  //const { data: session, status } = useSession();
  const { data, status } = useSession();
  const Session1 = data as Session1;
  return (
    <>
      {Session1?.user ? (
        <form
          className="divide-y divide-gray-200 lg:col-span-9"
          action="#"
          method="POST"
        >
          {/* Profile section */}
          <div className="py-6 px-4 sm:p-6 lg:pb-8">
            <div>
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className="mt-6 flex flex-col lg:flex-row">
              <div className="flex-grow space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <div className="mt-1 rounded-md shadow-sm flex">
                    {/* <span className="bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm">
                workcation.com/
              </span> */}
                    <input
                      type="text"
                      disabled
                      //name={Session1.user.username || null}
                      id="username"
                      autoComplete="username"
                      className="mt-1 cursor-not-allowed block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm bg-gray-300"
                      defaultValue={Session1.user.username}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
                <p
                  className="text-sm font-medium text-gray-700"
                  aria-hidden="true"
                >
                  Photo
                </p>
                <div className="mt-1 lg:hidden">
                  <div className="flex items-center">
                    <div
                      className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                      aria-hidden="true"
                    >
                      <img
                        className="rounded-full h-full w-full cursor-not-allowed"
                        src={Session1.user.image}
                        alt="Hello"
                      />
                    </div>
                    <div className="ml-5 rounded-md shadow-sm">
                      <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                        <label
                          htmlFor="mobile-user-photo"
                          className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                        </label>
                        <input
                          id="mobile-user-photo"
                          name="user-photo"
                          type="file"
                          className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden relative rounded-full overflow-hidden lg:block">
                  <img
                    className="relative rounded-full w-40 h-40"
                    src={Session1.user.image}
                    alt=""
                  />
                  <label
                    htmlFor="desktop-user-photo"
                    className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                  >
                    <span>Change</span>
                    <span className="sr-only"> user photo</span>
                    <input
                      type="file"
                      id="desktop-user-photo"
                      name="user-photo"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-6">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  disabled
                  defaultValue={Session1.user.firstName}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 cursor-not-allowed block w-full border bg-gray-300 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                />
              </div>

              <div className="col-span-12 sm:col-span-6">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  disabled
                  defaultValue={Session1.user.lastName}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 cursor-not-allowed block w-full bg-gray-300 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                />
              </div>

              <div className="col-span-12 sm:col-span-6">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <input
                  disabled
                  defaultValue={Session1.user.gender}
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="cursor-not-allowed mt-1 block w-full border bg-gray-300 border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </form>
      ) : (
        // <form
        //   className="divide-y divide-gray-200 lg:col-span-9"
        //   action="#"
        //   method="POST"
        // >
        //   {/* Profile section */}
        //   <div className="py-6 px-4 sm:p-6 lg:pb-8">
        //     <div>
        //       <h2 className="text-lg leading-6 font-medium text-gray-900">
        //         Profile
        //       </h2>
        //       <p className="mt-1 text-sm text-gray-500">
        //         This information will be displayed publicly so be careful what you
        //         share.
        //       </p>
        //     </div>

        //     <div className="mt-6 flex flex-col lg:flex-row">
        //       <div className="flex-grow space-y-6">
        //         <div>
        //           <label
        //             htmlFor="username"
        //             className="block text-sm font-medium text-gray-700"
        //           >
        //             Username
        //           </label>
        //           <div className="mt-1 rounded-md shadow-sm flex">
        //             {/* <span className="bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm">
        //             workcation.com/
        //           </span> */}
        //             <input
        //               type="text"
        //               name="username"
        //               id="username"
        //               autoComplete="username"
        //               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
        //               defaultValue="username "
        //             />
        //           </div>
        //         </div>

        //       </div>

        //       <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
        //         <p className="text-sm font-medium text-gray-700" aria-hidden="true">
        //           Photo
        //         </p>
        //         <div className="mt-1 lg:hidden">
        //           <div className="flex items-center">
        //             <div
        //               className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
        //               aria-hidden="true"
        //             >
        //               <img
        //                 className="rounded-full h-full w-full"
        //                 src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        //                 alt="Hello"
        //               />
        //             </div>
        //             <div className="ml-5 rounded-md shadow-sm">
        //               <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
        //                 <label
        //                   htmlFor="mobile-user-photo"
        //                   className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
        //                 >
        //                   <span>Change</span>
        //                   <span className="sr-only"> user photo</span>
        //                 </label>
        //                 <input
        //                   id="mobile-user-photo"
        //                   name="user-photo"
        //                   type="file"
        //                   className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
        //                 />
        //               </div>
        //             </div>
        //           </div>
        //         </div>

        //         <div className="hidden relative rounded-full overflow-hidden lg:block">
        //           <img
        //             className="relative rounded-full w-40 h-40"
        //             //src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        //             alt=""
        //           />
        //           <label
        //             htmlFor="desktop-user-photo"
        //             className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
        //           >
        //             <span>Change</span>
        //             <span className="sr-only"> user photo</span>
        //             <input
        //               type="file"
        //               id="desktop-user-photo"
        //               name="user-photo"
        //               className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
        //             />
        //           </label>
        //         </div>
        //       </div>
        //     </div>

        //     <div className="mt-6 grid grid-cols-12 gap-6">
        //       <div className="col-span-12 sm:col-span-6">
        //         <label
        //           htmlFor="first-name"
        //           className="block text-sm font-medium text-gray-700"
        //         >
        //           First name
        //         </label>
        //         <input
        //           type="text"
        //           name="first-name"
        //           id="first-name"
        //           autoComplete="given-name"
        //           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
        //         />
        //       </div>

        //       <div className="col-span-12 sm:col-span-6">
        //         <label
        //           htmlFor="last-name"
        //           className="block text-sm font-medium text-gray-700"
        //         >
        //           Last name
        //         </label>
        //         <input
        //           type="text"
        //           name="last-name"
        //           id="last-name"
        //           autoComplete="family-name"
        //           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
        //         />
        //       </div>

        //       <div className="col-span-12 sm:col-span-6">
        //         <label
        //           htmlFor="company"
        //           className="block text-sm font-medium text-gray-700"
        //         >
        //           Gender
        //         </label>
        //         <input
        //           type="text"
        //           name="company"
        //           id="company"
        //           autoComplete="organization"
        //           className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
        //         />
        //       </div>
        //     </div>
        //   </div>

        //   {/* Privacy section */}

        // </form>
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
