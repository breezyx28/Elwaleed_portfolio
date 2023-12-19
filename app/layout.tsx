import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import UpperNav from "./components/navs/UpperNav";

const DM = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alwaleed | Portfolio",
  description:
    "i’m a product designer, Bringing your ideas to live through the design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${DM.className} overflow-x-hidden max-w-[1800px]`}>
        <UpperNav />
        <div className="h-[88px] w-full"></div>
        {children}
      </body>
    </html>
  );
}
