import "./globals.css";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import ReduxProvider from "./redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// export const metadata: Metadata = {
//   title: "Cartle",
//   description: "Where the world sells",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </head>
      <ReduxProvider>
        <body className={`${inter.variable} min-w-[250px]`}>{children}</body>
      </ReduxProvider>
    </html>
  );
}
