import { HomeContainer, Layout } from "@/app/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home: Welcome to Your Store",
  description: "Where the world sells",
};

function Home() {
  return (
    <Layout>
      <HomeContainer />
    </Layout>
  );
}

export default Home;
