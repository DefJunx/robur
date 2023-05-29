import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import getRobur from "./actions/getRobur";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Robur Natisa",
  description: "Sito ufficiale ASD Robur Natisa",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-14 md:pt-28 container md:mx-24 mx-12">{children}</main>
      </body>
    </html>
  );
}
