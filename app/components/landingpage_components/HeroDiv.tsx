"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeroImg from "../../assets/heroImage.png";
import HeroImage2 from "../../assets/2ndimage.png";
import HeroImg3 from "../../assets/4th.png";
import Vector from "../../assets/Vector.png";
import { useSpring, animated } from "react-spring";

const HeroDiv = () => {
  const [index, setIndex] = useState(0);
  const texts = ["CREATE A WEBSITE", "SELL MORE ", "GROW FASTER"];
  const images = [HeroImg, HeroImage2, HeroImg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text and image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const textAnimationProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }, // Updated to 3 seconds
  });

  const imageAnimationProps = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 }, // Updated to 3 seconds
  });

  return (
    <section className="bg-transparent mt-20 mb-20 relative overflow-hidden">
      <div className="grid pl-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10">
        <div className="lg:mr-20 place-self-center lg:col-span-7">
          <animated.h1
            style={textAnimationProps}
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black"
          >
            {texts[index]}
            <br /> WITH <span className="mt-4 text-[#FF7600]"> CARTLE</span>
          </animated.h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-gray-700">
            Cartle is making commerce easier for African entrepreneurs, setting
            them up to grow, compete and win globally
          </p>
          <a
            href="/auth/signup"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg  hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 py-4 bg-[#FF7600]"
          >
            Get started for free
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <p className="py-1 text-gray-400 px-4">no credit card required</p>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex lg:justify-end">
          <animated.div
            style={{ ...imageAnimationProps, position: "relative", zIndex: 1 }}
          >
            <Image
              className="w-full h-full"
              src={images[index]}
              width={500}
              height={500}
              alt={`Image ${index + 1}`}
            />
          </animated.div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <Image src={Vector} alt="Vector Image" />
        </div>
      </div>
    </section>
  );
};

export default HeroDiv;
