import Footer from "./components/home_components/Footer";
import Navbar from "./components/home_components/Navbar";
import Banner from "./components/home_components/Banner";
import Steps from "./components/home_components/Steps";
import Why_us from "./components/home_components/Why_us";
import FAQ from "./components/home_components/FAQ";
import Newsletter from "./components/home_components/Newsletter";
import styles from "../styles/Home.module.css";
import PageLoading from "./components/merchant_components/loading/PageLoading";
// import PageLoader from "next/dist/client/page-loader";

export default async function Home() {
  return (
    <main className={`text-[#353738] w-full  font-inter`}>
      <Navbar backgroundColor="bg-cream-100" />
      <Banner />
      <Steps />
      <Why_us />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
}
