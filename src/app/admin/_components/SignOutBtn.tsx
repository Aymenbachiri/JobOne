"use client";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export function SignOutBtn() {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await signOut();
        router.push("/");
      }}
      className="underline"
    >
      Log out
    </button>
  );
}
