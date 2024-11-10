import React from "react";
import Image from "next/image";
import './style/page.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Main from "./components/Main";
import Cold from "./components/Cold";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function Page() {
  return (
    <>
      <div className="section">
        {/* Navbar on top of the background image */}
        <div className="navbar-wrapper">
         <Navbar />
        </div>

        {/* Background image */}
        <div className="bg-image">
          <Image
            src="/images/coffee bg.jpg"
            alt="bg image"
            layout="fill"
            quality={100}
            priority
          />
        </div>
      </div>
      
       <div className="section">
        <About />
      </div>
      
       <div className="section">
        <Main />
      </div>
      
     <div className="section">
        <Cold />
      </div>       
      <div className="section">
        <Contact />
      </div>
      
      <Footer />
    </>
  );
}

export default Page;
