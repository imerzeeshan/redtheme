"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownState, setDropdownState] = useState({
    services: false,
    portfolios: false,
    blogs: false,
  });

  const navbarRef = useRef<HTMLDivElement | null>(null);

  const handleTreeLine = () => {
    if (navbarRef.current) {
      navbarRef.current.style.right = "0%";
      document.body.style.overflow = "hidden";
    }
    setIsClicked(true);
  };

  const handleCrossIcon = () => {
    if (navbarRef.current) {
      navbarRef.current.style.right = "-100%";
      document.body.style.overflow = "";
    }
    setIsClicked(false);
  };

  const handleServiceClick = (section: "services" | "portfolios" | "blogs") => {
    setDropdownState((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
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
        <Link href="/" className="logo flex items-center">
          <img src="/assets/images/logo.png" alt="logo" />
        </Link>

        <nav id="navbar" ref={navbarRef} className="navbar">
          {/* Desktop view navbar */}
          <ul className="hidden xl:flex">
            <li className="cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent">
              <Link href="/about">About Us</Link>
            </li>
            <li className="dropdown cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent">
              <Link href={"/services"}>
                <span>Services</span>{" "}
                <i className="bi bi-chevron-down dropdown-indicator"></i>
              </Link>
              <ul>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <Link href="/services">Services</Link>
                </li>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <Link href="/services/single-service">Single Service</Link>
                </li>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <Link href="/services/plans">Pricing</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent">
              <Link href={"/portfolio"}>
                <span>Portfolio</span>{" "}
                <i className="bi bi-chevron-down dropdown-indicator"></i>
              </Link>
              <ul>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <Link href="/portfolio">Projects</Link>
                </li>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <Link href="/portfolio/single-project">Single Project</Link>
                </li>
              </ul>
            </li>
            <li className="cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent">
              <Link href="/team">Team</Link>
            </li>
            <li className="dropdown cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent">
              <Link href={"/blogs"}>
                <span>Blogs</span>{" "}
                <i className="bi bi-chevron-down dropdown-indicator"></i>
              </Link>
              <ul>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <Link href="/blogs">Blogs Grid</Link>
                </li>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <Link href="/blogs/single-blog">Blog Details</Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Mobile view navbar */}
          <ul className="xl:hidden">
            <li className="cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent">
              <Link href="/about">About Us</Link>
            </li>
            <li
              className="dropdown cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent"
              onClick={() => handleServiceClick("services")}
            >
              <a>
                <span>Services</span>{" "}
                <i
                  id="serviceDropDown"
                  className={`bi bi-chevron-down dropdown-indicator ${
                    dropdownState.services ? "rotate-180" : ""
                  }`}
                ></i>
              </a>
              <ul
                id="services"
                className={`transition-all duration-300 overflow-hidden ${
                  dropdownState.services
                    ? "dropdown-active max-h-[1000px] opacity-100 scale-y-100"
                    : "max-h-0 opacity-0 scale-y-95"
                }`}
              >
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <Link href="/services">Services</Link>
                </li>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <Link href="/services/single-service">Single Service</Link>
                </li>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <Link href="/services/plans">Pricing</Link>
                </li>
              </ul>
            </li>
            <li
              className="dropdown cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent"
              onClick={() => handleServiceClick("portfolios")}
            >
              <a>
                <span>Portfolio</span>{" "}
                <i
                  id="portfolioDropDown"
                  className={`bi bi-chevron-down dropdown-indicator ${
                    dropdownState.portfolios ? "rotate-180" : ""
                  }`}
                ></i>
              </a>
              <ul
                id="portfolios"
                className={`transition-all duration-300 overflow-hidden ${
                  dropdownState.portfolios
                    ? "dropdown-active max-h-[1000px] opacity-100 scale-y-100"
                    : "max-h-0 opacity-0 scale-y-95"
                }`}
              >
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <Link href="/portfolio">Projects</Link>
                </li>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <Link href="/portfolio/single-project">Single Project</Link>
                </li>
              </ul>
            </li>
            <li className="cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent">
              <Link href="/team">Team</Link>
            </li>
            <li
              className="dropdown cursor-pointer hover:bg-gray-100/20 xl:hover:bg-transparent"
              onClick={() => handleServiceClick("blogs")}
            >
              <a>
                <span>Blogs</span>{" "}
                <i
                  id="blogsDropDown"
                  className={`bi bi-chevron-down dropdown-indicator ${
                    dropdownState.blogs ? "rotate-180" : ""
                  }`}
                ></i>
              </a>
              <ul
                id="blogs"
                className={`transition-all duration-300 overflow-hidden ${
                  dropdownState.blogs
                    ? "dropdown-active max-h-[1000px] opacity-100 scale-y-100"
                    : "max-h-0 opacity-0 scale-y-95"
                }`}
              >
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <Link href="/blogs">Blogs Grid</Link>
                </li>
                <li className="hover:bg-gray-100/20 xl:hover:bg-transparent">
                  <Link href="/blogs/single-blog">Blog Details</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <Link href="/contact" className="default-theme-btn-one">
          Contact Us <span></span>
        </Link>

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
