"use client";
import Link from "next/link";
import { HiCheck } from "react-icons/hi2";
import Footer from "../components/home_components/Footer";
import styles from "../../styles/Home.module.css";

const Contact = () => {
  return (
    <section>
      <div
        className={`grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4 font-inter`}
      >
        {/* <div className="bg-[url('/login.png')] bg-center bg-no-repeat bg-cover h-52 flex items-center justify-center lg:hidden">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        </div> */}

        <div className="py-14 max-w-[550px] mx-auto w-[90%] lg:max-w-none  min-h-[60vh]">
          <div className="mb-8">
            <h1 className={`${styles.baskerville} text-3xl`}>Get in Touch</h1>
            <p className="text-zinc-700 font-normal text-[1.17rem]">
              At Cartle, we believe in 24/7 all round assistance. Get in touch.
              Answer all your questions. Get the help you need.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="w-full flex flex-col justify-center">
              <div>
                <div className="mb-2">
                  <label className="font-bold">First Name</label>
                </div>
                <input
                  type="text"
                  className="bg-cream-100 p-3 mb-6 rounded-md w-full focus:outline-0"
                  placeholder="John"
                />
              </div>

              <div>
                <div className="mb-2">
                  <label className="font-bold">Last Name</label>
                </div>
                <input
                  type="text"
                  className="bg-cream-100 p-3 mb-6 rounded-md w-full focus:outline-0"
                  placeholder="Deo"
                />
              </div>
              <div>
                <div className="mb-2">
                  <label className="font-bold">Email</label>
                </div>
                <input
                  type="email"
                  className="bg-cream-100 p-3 mb-6 rounded-md w-full focus:outline-0"
                  placeholder="johndeo@gmail.com"
                />
              </div>

              <div>
                <div className="mb-2">
                  <label className="font-bold" id="enquiry">
                    Enquiry
                  </label>
                </div>
                <textarea
                  name="enquiry"
                  id="enquiry"
                  rows={10}
                  className="w-full outline-0 bg-cream-100 rounded-lg p-3"
                  placeholder="Type in your complaint..."
                ></textarea>
              </div>

              <div className="w-full flex items-center justify-start">
                <button
                  type="submit"
                  className="mt-10 text-white text-base lg:text-lg font-semibold p-[0.5em] rounded-md bg-primary-500"
                >
                  Submit your response
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden md:block bg-[url('/login.png')] bg-center bg-no-repeat bg-cover"></div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
