"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { SigninStatus } from "./types";
import SignOutButton from "./SignOutButton";

export default function SignInButton() {
  const { data: session, status } = useSession();

  if (status === SigninStatus.Loading) {
    return <>Loading...</>;
  }

  if (status === SigninStatus.Authenticated) {
    return (
      <Link href="/dashboard">
        {session?.user?.name}
        <SignOutButton />
      </Link>
    );
  }

  return <button onClick={() => signIn()}>Sign In</button>;
}
