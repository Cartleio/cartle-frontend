"use client";
import { FormEvent, useState } from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

interface User {
  email: string;
  password: string;
}

function Register() {
  const [visible, setVisible] = useState<boolean>(false);
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();

  //THIS FUNCTION HANDLES USER INPUT (CONTROLLED FORM)
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  //THIS FUNCTION HANDLES THE FROM SUBMISSION FOR REGISTRATION AND AUTHENTICATION
  const registerUser = async (e: FormEvent) => {
    setError("");
    e.preventDefault();
    if (!user.email || !user.password) {
      setError("All fields are required");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        "https://cartle-backend-800v.onrender.com/merchants/register",
        user
      );
      if (response.status === 200 || response.status === 201) {
        setLoading(false);
        toast.success(response.data.message);
        setTimeout(() => {
          setSuccess(true);
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      if ((error as any)?.response?.status === 400) {
        setError((error as any)?.response?.data?.error);
      }
    }
  };

  return (
    <>
      <section
        className={`bg-white sm:bg-orange-500 relative py-8 min-h-screen overflow-x-hidden ${styles.avenirFont} text-[#444748]`}
      >
        {success ? (
          <VerifyEmailMessage />
        ) : (
          <div
            className={`p-7 bg-white shadow-none sm:shadow-2xl rounded-3xl mx-auto w-[100%] sm:w-[70%]  md:w-[60%] lg:w-[40%] xl:w-[30%] h-fit sm:min-h-[80vh]  transition-transform duration-700 ease-in-out  flex flex-col gap-6`}
          >
            <div>
              <img src="/cartle-logo.png" className="h-16 mb-6" alt="" />
              <h1 className="text-xl font-semibold text-[#444748]">
                Create an account with Cartle
              </h1>
              <p className="text-[#444748]">Few clicks away from your store</p>
            </div>

            <form action="" className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={(e) => handleInput(e)}
                  className="w-full hover:outline-none focus:outline-none border focus:border-orange-500 h-10 px-3 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password</label>
                <div className="w-full h-fit relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={(e) => handleInput(e)}
                    className="w-full hover:outline-none focus:outline-none border focus:border-orange-500 h-10 px-3 rounded-md"
                  />
                  {visible ? (
                    <IoEyeOff
                      className="text-xl absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <IoEye
                      className="text-xl absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white h-12 font-bold rounded-md flex items-center justify-center mt-3"
                  onClick={registerUser}
                  disabled={loading}
                >
                  {loading ? (
                    <LoadingSpinner />
                  ) : (
                    <span>Create a Cartle Account</span>
                  )}
                </button>

                <div className="w-full">
                  {error && (
                    <span className="text-red-500 text-sm">{error}</span>
                  )}
                </div>
              </div>
            </form>

            <div className="flex gap-3 items-center">
              <div className="h-[0.8px] flex-1 bg-slate-400"></div>
              <span>or</span>
              <div className="h-[0.8px] flex-1 bg-slate-400"></div>
            </div>
            <div className="w-full flex items-center justify-center">
              <p className="inline-flex items-center gap-1">
                Already have a Cartle account? {""}
                <Link
                  href={"/auth/login"}
                  className="text-orange-500 flex items-center"
                >
                  log in <MdOutlineArrowRightAlt />
                </Link>
              </p>
            </div>
            <div>
              <p className="text-sm">
                By proceeding, you agree to the{" "}
                <Link href={"/terms"} className="text-orange-500">
                  {" "}
                  Terms and Conditions{" "}
                </Link>
                and{" "}
                <Link href={"/privacy"} className="text-orange-500">
                  {" "}
                  Privacy Policy
                </Link>
              </p>
            </div>
            <div className="text-sm flex items-center gap-2">
              <Link href={"/"} className="hover:underline">
                Help
              </Link>
              <Link href={"/"} className="hover:underline">
                Privacy
              </Link>
              <Link href={"/"} className="hover:underline">
                Terms
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Register;

const VerifyEmailMessage = () => {
  return (
    <div
      className={`p-7 bg-white shadow-none sm:shadow-2xl rounded-3xl mx-auto w-[100%] sm:w-[70%]  md:w-[60%] lg:w-[40%] xl:w-[30%]   transition-transform duration-700 ease-in-out  flex flex-col gap-6`}
    >
      <div className="flex flex-col gap-3">
        <Image
          src={"/cartle-logo.png"}
          alt={"Cartle Technologies"}
          width={120}
          height={120}
        />
        <h1 className="text-xl font-semibold text-[#444748]">
          Registration Successful
        </h1>
      </div>

      <div className="w-full flex items-center">
        A verification link has been sent to your Email, please click on the
        link to verify your account
      </div>

      <div className="text-sm flex items-center gap-2">
        <Link href={"/"} className="hover:underline">
          Help
        </Link>
        <Link href={"/"} className="hover:underline">
          Privacy
        </Link>
        <Link href={"/"} className="hover:underline">
          Terms
        </Link>
      </div>
    </div>
  );
};
