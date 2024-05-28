"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
function SignInBtn() {
  const { status } = useSession();
  const location = useRouter();

  return (
    <div>
      {status === "authenticated" ? (
        <button
          className="text-red-600 w-fit p-4 bg-black rounded-xl"
          onClick={() => signOut()}
        >
          sign out
        </button>
      ) : (
        <button
          className="text-red-600 w-fit p-4 bg-black rounded-xl"
          onClick={() => signIn("google")}
        >
          sign in with google
        </button>
      )}
    </div>
  );
}

export default SignInBtn;
