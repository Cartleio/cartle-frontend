"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaCheck, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import styles from "../../../styles/Home.module.css";
import Footer from "@/app/components/landingpage_components/Footer";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/app/redux/feature/auth-slice";
import "react-toastify/dist/ReactToastify.css";
import { activeStore, clearStore } from "@/app/redux/feature/storeSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

interface Merchant {
  email: string;
  password: string;
}

const Login = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [visibility, setVisibility] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMgs, setErrorMgs] = useState<string>("");

  //ROUTER INSTANCE
  const router = useRouter();

  // REDUX DISPATCH INSTANCE
  const dispatch = useDispatch();

  // MERCHANT DETAILS HOLDER FOR LOGIN
  const [merchant, setMerchant] = useState<Merchant>({
    email: "",
    password: "",
  });

  //THIS FUNCTION HANDLES THE FROM SUBMISSION FOR AUTHENTICATION AND LOGIN
  const loginMerchant = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    setErrorMgs("");

    if (!merchant.email || !merchant.password) {
      setErrorMgs("Please fill all the fields");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `https://cartle-test.onrender.com/merchants/login`,
        merchant
      );
      setLoading(false);
      const merchantData = response?.data;
      toast.success("login successful");
      console.log(merchantData);
      dispatch(login({ ...merchantData }));
    } catch (error) {
      setLoading(false);
      console.log(error);
      if ((error as any).message === "Network Error") {
        toast.error("Network Error, Please Try again");
      }

      if (
        (error as any).response.status === 401 ||
        (error as any).response.status === 400
      ) {
        setErrorMgs((error as any).response.data.message);
        toast.error("incorrect credentials");
      } else {
        toast.error("Something went wrong, Please Try again");
      }
    }
  };

  // REDUX USER INSTANCE
  const user = useSelector((state: any) => state.auth.user);

  //CLEAR ACTIVE STORE DETAILS ON PAGE LOAD
  useEffect(() => {
    dispatch(clearStore());
  }, [user]);

  // REDIRECT TO MERCHANT HOME IF USER A USER EXIST
  useEffect(() => {
    if (user) {
      router.push("/merchant/home");
    }
  }, [user, router]);

  console.log("env", process.env.BACKEND_URL);

  return (
    <>
      <ToastContainer />
      <div
        className={`grid grid-cols-1 md:grid-cols-2  overflow-hidden font-inter`}
      >
        <form
          className="flex flex-col col-start-1 col-span-1"
          onSubmit={loginMerchant}
        >
          <div className="w-[85%] sm:w-[80%] md:w-9/12 mx-auto mt-5">
            <div className="py-3 md:py-5">
              <h1
                className={`${styles.baskerville} font-libre text-2xl md:text-3xl`}
              >
                Welcome back!
              </h1>
              <p className="text-sm lg:text-xl">Login to continue</p>
            </div>

            <div className="flex flex-col md:min-h-[40vh] lg:min-h-[60vh] my-5 md:my-9">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className=" mb-2 text-base lg:text-xl font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-cream-100 p-2 lg:p-3 border rounded focus:outline-none text-md lg:text-xl focus:border-orange-500"
                  placeholder="Johndoe@yahoo.com"
                  value={merchant.email}
                  onChange={(e) =>
                    setMerchant({ ...merchant, email: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col">
                <label className="mt-5 mb-2 text-base lg:text-xl font-semibold">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={visibility ? "text" : "password"}
                    className="bg-cream-100 p-2 lg:p-3 rounded focus:outline-none text-md border lg:text-xl w-full focus:border-orange-500"
                    value={merchant.password}
                    onChange={(e) =>
                      setMerchant({ ...merchant, password: e.target.value })
                    }
                  />
                  <span
                    className="text-md lg:text-xl absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setVisibility(!visibility)}
                  >
                    {visibility ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                </div>
              </div>

              <div className="flex mt-4 gap-2 items-center justify-between">
                <div className="flex items-center justify-between gap-1">
                  <div
                    className={`w-4 h-4 cursor-pointer border ${
                      loggedIn
                        ? "border-orange-500 bg-orange-500"
                        : "border-black"
                    }  rounded-sm relative `}
                  >
                    <FaCheck
                      className={`text-xs absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-white`}
                    />
                    <input
                      type="checkbox"
                      name="loggedIn"
                      id="loggedIn"
                      checked={loggedIn}
                      onChange={(e) => setLoggedIn(!loggedIn)}
                      className="h-full w-full opacity-0"
                    />
                  </div>
                  <label htmlFor="loggedIn" className="text-sm lg:text-base">
                    Keep me logged in
                  </label>
                </div>
                <Link
                  href={"/auth/forget-password"}
                  className="text-primary-500 text-sm lg:text-base"
                >
                  Forgot password?
                </Link>
              </div>

              <p className="mt-10  font-semibold  rounded-md flex flex-col items-center justify-center cursor-pointer">
                <button className="bg-primary-500  text-white p-2 lg:p-3 text-sm lg:text-xl rounded-lg w-full ">
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <LoadingSpinner />
                      <span>Logging in...</span>
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
              </p>

              {errorMgs && (
                <p className="text-red-500 text-sm py-2">{errorMgs}</p>
              )}

              <div className="flex gap-3 items-center">
                <div className="h-[0.9px] flex-1 bg-slate-400"></div>
                <span>or</span>
                <div className="h-[0.9px] flex-1 bg-slate-400"></div>
              </div>

              <div
                className="bg-[#E7E7E7]  p-2 lg:p-3 text-sm lg:text-xl w-full  rounded-md flex items-center justify-center gap-2 font-semibold cursor-pointer"
                onClick={() => signIn("google")}
              >
                <FcGoogle className="text-xl" />
                <a href="https://cartle-test.onrender.com/merchants/google">
                  {" "}
                  <span>Continue with Google</span>
                </a>
              </div>

              <p className="mt-3 text-sm lg:text-base">
                Don&apos;t have an account yet?
                <Link className="text-primary-500" href={"../auth/signup"}>
                  {" "}
                  Get started for free with Cartle
                </Link>
              </p>
            </div>
          </div>
        </form>

        <div className="hidden md:block relative md:min-h-[40vh] lg:min-h-[60vh] md:col-start-2 col-span-1">
          <img
            src="/login.png"
            className="absolute h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
