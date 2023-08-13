import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  const handleChange = () => {
    const scrollPosition = window.scrollY;
    setIsChanged(scrollPosition >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChange);

    return () => window.removeEventListener("scroll", handleChange);
  }, []);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // const handleLogo = () => {
  //   if (window.innerWidth < 768) {
  //     toggleMobileMenu();
  //   } else if (isOpen) {
  //     toggleMobileMenu();
  //   }
  // };

  const handleLogo = () => {
    if (isOpen && window.innerWidth < 768) {
      toggleMobileMenu();
    }
  };

  const location = useLocation();

  return (
    <header
      className={`${
        isChanged
          ? "bg-page-gradient sticky top-0 z-[1000]"
          : "sticky top-0 z-[1000]"
      } transition ease-in duration-300`}
    >
      <nav className={`container py-6 px-4`}>
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <Link onClick={handleLogo} to="/" className="flex items-center">
            <span className="self-center text-2xl font-normal font-roboto-slab md:text-[2.15081rem] whitespace-nowrap text-white">
              Cyberpay
            </span>
          </Link>
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle mobile menu</span>
            {isOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul
              onClick={toggleMobileMenu}
              className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:mt-0 bg-white md:bg-transparent rounded-lg border border-gray-100 md:border-0"
            >
              <li>
                <NavLink
                  to="/integration"
                  className={`block text-gray-500 md:text-white font-roboto-slab tracking-[-0.015rem] hover:opacity-50 transition duration-300 ease-in-out rounded p-2 md:py-2 md:px-4 md:bg-transparent ${
                    location.pathname === "/integration" &&
                    "bg-[#110E2F] text-white opacity-50"
                  }`}
                  aria-current="page"
                >
                  Integration
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/documentation"
                  className={`block text-gray-500 md:text-white font-roboto-slab tracking-[-0.015rem] hover:opacity-50 transition duration-300 ease-in-out rounded p-2 md:py-2 md:px-4 md:bg-transparent ${
                    location.pathname === "/documentation" &&
                    "bg-[#110E2F] text-white opacity-50"
                  }`}
                  aria-current="page"
                >
                  Documentation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  className={`block text-gray-500 md:text-white font-roboto-slab tracking-[-0.015rem] hover:opacity-50 transition duration-300 ease-in-out rounded p-2 md:py-2 md:px-4 md:bg-transparent ${
                    location.pathname === "/pricing" &&
                    "bg-[#110E2F] text-white opacity-50"
                  }`}
                  aria-current="page"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={`block text-gray-500 md:text-white font-manrope font-semibold text-base tracking-[-0.015rem] hover:opacity-50 transition duration-300 ease-in-out rounded p-2 md:py-2 md:px-4 md:bg-transparent ${
                    location.pathname === "/login" && "bg-[#110E2F] text-white"
                  }`}
                  aria-current="page"
                >
                  Log In
                </NavLink>
              </li>
              <li className="border border-white rounded">
                <NavLink
                  to="/signup"
                  className={`block text-gray-500 md:text-white font-manrope font-semibold text-base tracking-[-0.015rem] rounded hover:opacity-50 transition duration-300 ease-in-out p-2 md:py-2 md:px-4 md:bg-transparent ${
                    location.pathname === "/signup" && "bg-[#110E2F] text-white"
                  }`}
                  aria-current="page"
                >
                  SignUp
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
