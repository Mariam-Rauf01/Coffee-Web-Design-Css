import React from 'react';
import Image from 'next/image';
import { HiPhone } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../style/Footer.css'; // Import the custom CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Logo & Address */}
        <div className="space-y-4 text-center lg:text-left">
          <Image
            src="/images/COFFOHOLICS (1).png"
            alt="Coffoholics logo"
            width={180}
            height={180}
            className="logo"
          />
          <p className="section-title">Coffee Shop</p>
          <address className="text">
            123 Coffee St.<br />
            Downtown, Your City<br />
            Espresso Country, Caffeine State, USA
          </address>
          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="section-title">Follow Us</h3>
            <div className="social-links">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4 text-center lg:text-left">
          <h3 className="section-title">Quick Links</h3>
          <ul className="text space-y-2">
            <li><a href="#home" className="link">Home</a></li>
            <li><a href="#about" className="link">About Us</a></li>
            <li><a href="#menu" className="link">Our Menu</a></li>
            <li><a href="#contact" className="link">Contact Us</a></li>
          </ul>
        </div>

        {/* Opening Times & Contact */}
        <div className="space-y-4 text-center lg:text-left">
          <h3 className="section-title">Opening Times</h3>
          <p className="text">Mon - Fri: 8:00 AM - 10:00 PM</p>
          <p className="text">Sat - Sun: 9:00 AM - 12:00 AM</p>
          
          <h3 className="section-title mt-4">Contact Us</h3>
          <p className="phone">
            <HiPhone className="h-6 w-6 mr-2" /> +1 (123) 456-7890
          </p>
        </div>
      </div>
      
      <div className="footer-text">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
