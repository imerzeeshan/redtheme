"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scroll position is more than 100px
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      href="#"
      onClick={scrollToTop}
      className={`scroll-top flex items-center justify-center ${
        showButton ? "opacity-100 active" : "opacity-0 pointer-events-none"
      }`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </Link>
  );
}
