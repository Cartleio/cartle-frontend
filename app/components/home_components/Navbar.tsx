"use client";
import React from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import { usePathname } from "next/navigation";

function Navbar({ backgroundColor }: { backgroundColor: string }) {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const navigationLinks = [
    {
      name: "home",
      id: 1,
      path: "/",
    },
    {
      name: "pricing",
      id: 1,
      path: "/pricing",
    },
    {
      name: "contact",
      id: 1,
      path: "/contact",
    },
  ];
  return (
    <>
      <nav className={`${backgroundColor} p-3 lg:p-10`}>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center border-b border-b-[#060606] pb-4">
            <Link href={"/"}>
              <img src="/img (1).png" className="h-10 lg:h-16 block" alt="" />
            </Link>

            <div className="lg:flex gap-10 capitalize text-2xl hidden">
              {navigationLinks.map((navigationLink) => {
                const { name, path, id } = navigationLink;
                return (
                  <Link
                    href={path}
                    key={id}
                    className={`capitalize ${
                      pathname === path ? "text-primary-500" : "text-black"
                    }`}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu */}
            <div
              className={`${
                open ? "left-0 " : "left-[-100%]"
              } bg-[rgba(0,0,0,0.6)] fixed min-h-screen w-[100%] top-0 z-20 lg:hidden transition-all duration-700`}
            >
              <div className="min-h-screen sm:w-[40%] w-[60%]  bg-cream-100  p-3 flex flex-col">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-5">
                    <img
                      src="/img (1).png"
                      className="h-10 lg:h-16 block"
                      alt="logo"
                    />
                    <AiOutlineClose
                      className="text-xl text-primary-500"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  <div className="flex flex-col gap-8 capitalize text-2xl">
                    <Link href={"/"}>home</Link>
                    <Link href={"/pricing"}>pricing</Link>
                    <Link href={"/contact"}>contact</Link>
                  </div>
                </div>

                <div className="border-t border-t-[#060606] p-4 pl-0 flex flex-col gap-5 h-fit">
                  <Link
                    href={"/auth/login"}
                    className="text-primary-500 capitalize text-2xl flex items-center justify-center"
                  >
                    <span>Login</span>
                  </Link>

                  <Link
                    href={"/auth/signup"}
                    className="border border-primary-500 hover:bg-primary-500 px-[0.75rem] py-[0.6rem] rounded-lg text-xl hover:text-white flex items-center justify-center text-primary-500"
                  >
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex gap-6 lg:gap-10 text-xl capitalize items-center">
              <Link
                href={"/auth/login"}
                className="text-primary-500 hidden lg:block"
              >
                Login
              </Link>
              <Link
                href={"/auth/signup"}
                className="bg-primary-500 px-[0.75em] py-[0.6em] lg:px-[1em] lg:py-[.8em] rounded-md text-xs lg:text-xl font-semibold text-white "
              >
                Get Started
              </Link>
              <div
                className="block lg:hidden cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <FiMenu />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
