import type { Metadata } from "next";
import "../../public/assets/flaticons/flaticon.css";
// import "../../public/assets/stylesheets/styles.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationProvider from "@/components/AnimationProvider";
import Preloader from "@/components/Preloader";
// import Link from "next/link";
import ScrollToTopButton from "@/components/ScrollButton";

export const metadata: Metadata = {
  title: "RedTheme - IT Solutions and Business Services for Success",
  description:
    "Harness the power of technology to boost productivity, optimize operations, and achieve your business goals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <Navbar />
        <AnimationProvider>{children}</AnimationProvider>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
