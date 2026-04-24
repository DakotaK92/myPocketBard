import type { ReactNode } from "react";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.pocketbard.app"),
  title: "myPocketBard - Immersive Audio App",
  description:
    "Pocket Bard is an immersive audio app for tabletop roleplaying games, with music, ambience, and sound effects built for live storytelling.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "myPocketBard - Immersive Audio App",
    description:
      "Music, ambience, and sound effects built for live tabletop storytelling.",
    images: ["/assets/images/iPhonev2.png"],
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
