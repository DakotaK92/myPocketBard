import { Caudex } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const caudex = Caudex({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caudex",
});

export const metadata = {
  title: "myPocketBard",
  description: "Pocket Bard - Immersive Audio App",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={caudex.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
