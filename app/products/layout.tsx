"use client";
import "../globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Session } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body className="flex flex-col h-screen leading-normal tracking-normal bg-gray-100">
        <SessionProvider session={session}>
          {/* to keep footer on the bottom always, add justify-between in the body */}
          <Header />
          {/* <QueryClientProvider client={queryClient}> */}
          <main className="mt-36 max-w-7xl mx-auto mb-auto relative  border-2 border-red-500">
            {children}
          </main>
          {/* </QueryClientProvider> */}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
