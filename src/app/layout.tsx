import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["400", "500", '600', '700', '800', '900'],
  variable: "--font-poppins-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Private rental cars",
  description: "Find the ideal car for your journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
