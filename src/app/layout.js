import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/common/Navbar/Nav";
// import Navbar from "@/components/common/Navbar/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HM Fashion",
  description: "A Bangladeshi Fashion Brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {/* <Navbar /> */}
        <Nav />
        {children}
      </body>
    </html>
  );
}
