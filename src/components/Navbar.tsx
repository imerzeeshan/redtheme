"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
// import "../../public/assets/stylesheets/styles.css";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleAddRemove = () => {
    const nav = document.getElementById("navbar");
    if (nav) {
      nav.style.right = "0%";
      document.body.classList.add("mobile-nav-active");
    }
  };
  const handleAddRight = () => {
    const nav = document.getElementById("navbar");
    if (nav) {
      nav.style.right = "-100%";
      document.body.classList.remove("mobile-nav-active");
    }
  };

  const handleTreeLine = () => {
    handleAddRemove();
    setIsClicked(true);
  };

  const handleCrossIcon = () => {
    handleAddRight();
    setIsClicked(false);
  };

  const handleServiceClick = (parentClass: string, childClass: string) => {
    const service = document.getElementById(parentClass);
    if (service) {
      service?.classList.toggle("dropdown-active");
      service?.classList.toggle("max-h-0");
      service?.classList.toggle("opacity-0");
      service?.classList.toggle("scale-y-95");

      service?.classList.toggle("max-h-[1000px]");
      service?.classList.toggle("opacity-100");
      service?.classList.toggle("scale-y-100");
    }

    const indicator = document.getElementById(childClass);
    indicator?.classList.toggle("rotate-180");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`header fixed w-full top-0 left-0 z-50 flex items-center transition-all duration-300 ${
        scrolled ? "bg-[#C00113] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[90%] mx-auto lg:mx-10 xl:mx-35 flex items-center justify-between py-4">
        <a href="/" className="logo flex items-center">
          <img src="/assets/images/logo.png" alt="logo" />
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li className="cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent">
              <a href="/">Home</a>
            </li>
            <li className="cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent">
              <a href="/about">About Us</a>
            </li>
            <li
              className="dropdown cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent"
              onClick={() => handleServiceClick("services", "serviceDropDown")}
            >
              <a>
                <span>Services</span>{" "}
                <i
                  id="serviceDropDown"
                  className="bi bi-chevron-down dropdown-indicator"
                ></i>
              </a>
              <ul id="services">
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <a href="/services">Services</a>
                </li>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <a href="/services/single-service">Single Service</a>
                </li>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <a href="/services/plans">Pricing</a>
                </li>
              </ul>
            </li>
            <li
              className="dropdown cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent"
              onClick={() =>
                handleServiceClick("portfolios", "portfolioDropDown")
              }
            >
              <a>
                <span>Portfolio</span>{" "}
                <i
                  id="portfolioDropDown"
                  className="bi bi-chevron-down dropdown-indicator"
                ></i>
              </a>
              <ul id="portfolios">
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <a href="/portfolio">Projects</a>
                </li>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <a href="/portfolio/single-project">Single Project</a>
                </li>
              </ul>
            </li>
            <li className="cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent">
              <a href="/team">Team</a>
            </li>
            <li
              className="dropdown cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent"
              onClick={() => handleServiceClick("blogs", "blogsDropDown")}
            >
              <a>
                <span>Blogs</span>{" "}
                <i
                  id="blogsDropDown"
                  className="bi bi-chevron-down dropdown-indicator"
                ></i>
              </a>
              <ul id="blogs">
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <a href="/blogs">Blogs Grid</a>
                </li>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <a href="/blogs/single-blog">Blog Details</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <a href="/contact" className="default-theme-btn-one">
          Contact Us <span></span>
        </a>
        <i
          onClick={handleTreeLine}
          className={`mobile-nav-toggle mobile-nav-show bi bi-list ${
            isClicked ? "hidden" : ""
          }`}
        ></i>
        <i
          onClick={handleCrossIcon}
          className={`mobile-nav-toggle mobile-nav-hide bi bi-x ${
            isClicked ? "block" : "hidden"
          }`}
        ></i>
      </div>
    </header>
  );
};

export default Navbar;
