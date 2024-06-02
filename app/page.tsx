import Footer from "./components/landingpage_components/Footer";
import Hero from "./components/landingpage_components/Hero";
import { Features } from "./components/landingpage_components/Features";
import Faq from "./components/landingpage_components/Faq";
import AdSupport from "./components/landingpage_components/AdSupport";
import Newsletter from "./components/landingpage_components/Newsletter";
// import PageLoader from "next/dist/client/page-loader";

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
