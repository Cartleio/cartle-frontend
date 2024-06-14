"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const VerifyAccount = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/auth/onboarding");
    }, 2000);
  }, []);
  return <div>Account Verified Successfully</div>;
};

export default VerifyAccount;
