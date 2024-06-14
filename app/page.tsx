import { Metadata } from "next";
import {
  Footer,
  Hero,
  Features,
  Faq,
  AdSupport,
  Newsletter,
} from "@/app/components";

export const metadata: Metadata = {
  title: "Home: Welcome to Cartle",
  description: "Where the world sells",
};

export default async function Home() {
  return (
    <main className={`text-[#353738] w-full  font-inter`}>
      <Hero />
      <Features />
      <Faq />
      <AdSupport />
      <Newsletter />
      <Footer />
    </main>
  );
}
