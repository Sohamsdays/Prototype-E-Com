"use client";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";
//import router from "next/router";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function AuthForm() {
  const notify = () =>
    toast.error("Wrong Username Password Try Again", {
      position: "bottom-center",
      duration: 4000,
    });
  const userName = useRef("");
  const pass = useRef("");
  const router = useRouter();
  const [resultError, setResultError] = useState(false);
  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    // const result = await signIn("credentials", {
    //   username: userName.current,
    //   password: pass.current,
    //   redirect: false,

    // })

    try {
      const result = await signIn("credentials", {
        username: userName.current,
        password: pass.current,
        redirect: false,
      });
      if (result?.ok) {
        router.push("/");
      } else {
        console.log(result?.error);
        notify();
        setResultError(true);
      }
    } catch (error) {
      console.log(error + "This is error");
    }

    //   .then(({ok,error})=>{
    //     if (ok) {
    //         router.push("/dashboard");
    //     } else {
    //         console.log(error)
    //         toast("Credentials do not match!", { type: "error" });
    //     }
    // })
  };
  console.log("result");

  return (
    <>
      <ErrorBoundary fallback={<h1>Error</h1>}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  User Name
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => (userName.current = e.target.value)}
                    id="email"
                    name="username"
                    type="text"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <Toaster />
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => (pass.current = e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={(e: React.SyntheticEvent) => onSubmit(e)}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
                {resultError ? (
                  <h1 className="flex items-center ">Error: Wrong Username or Password Try username = kminchelle and password = 0lelplR </h1>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
}
