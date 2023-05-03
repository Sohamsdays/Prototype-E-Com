"use client";
// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };
import "../globals.css";
import { Inter } from "next/font/google";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
