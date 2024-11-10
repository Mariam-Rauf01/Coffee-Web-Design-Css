"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiUser, HiSearch } from "react-icons/hi";

// Import the CSS file
import '../style/Navbar.css';

const Header: React.FC = () => {
  const CurrentRoute = usePathname();

  return (
    <>
      <header className="header">
        {/* Left Logo */}
        <Image
          src="/images/COFFOHOLICS.png"
          alt="Coffoholics logo"
          width={180}
          height={180}
          priority
          className="logo"
        />

        {/* Navigation Links */}
        <nav className="navbar">
          <Link
            href={"/"}
            className={`nav-link ${CurrentRoute === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={`nav-link ${CurrentRoute === "/about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href={"/coffees"}
            className={`nav-link ${CurrentRoute === "/coffees" ? "active" : ""}`}
          >
            Coffees
          </Link>
          <Link
            href={"/contact"}
            className={`nav-link ${CurrentRoute === "/contact" ? "active" : ""}`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Icons Section */}
        <div className="icons">
          <HiSearch className="icon" aria-label="Search" />
          <Link
            href={"/login"}
            className="login"
          >
            <HiUser className="icon" />
            Login
          </Link>
        </div>
      </header>

      {/* Centered Container */}
      <div className="center-container">
        <h1>Welcome to our coffee shop!</h1>
        <h2>Brewed to Perfection, Served with Love!</h2>

        <p>
          At the heart of Coffoholics is a commitment to quality. We source our beans from sustainable farms, ensuring
          that every sip you take is packed with rich, bold flavors. Our expert baristas are passionate about the craft,
          serving up everything from the classic espresso to unique specialty drinks. Whether you are a coffee
          connoisseur or just starting to explore the world of coffee, you will find something to fall in love with here.
        </p>

        {/* Button Container */}
        <div className="button-container">
          {/* First Button */}
          <Link
            href="/about"
            className="button about-us"
          >
            ABOUT US
          </Link>

          {/* Second Button */}
          <Link
            href="/contact"
            className="button call-now"
          >
            CALL NOW
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
