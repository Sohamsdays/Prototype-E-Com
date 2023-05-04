"use client";
import Address from "@/components/User/Address/Address";
import Profile from "@/components/User/Profile/Profile";
import { useSession, getSession } from "next-auth/react";
export default function ProfilePage() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <>
      <Profile />
    </>
  );
}
