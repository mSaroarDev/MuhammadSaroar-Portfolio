import Appnav from "@/components/Sections/Appnav";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Saroar",
  description: "Professional Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Appnav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
