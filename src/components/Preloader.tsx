"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Start fade-out animation
      setFadeOut(true);

      // Remove the preloader after animation
      setTimeout(() => {  
        setShow(false);
      }, 700); // duration matches the fade animation
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      id="preloader"
      className={`fixed top-0 left-0 w-full h-full bg-white z-[9999] flex items-center justify-center 
        transition-opacity duration-700 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
    ></div>
  );
};

export default Preloader;
