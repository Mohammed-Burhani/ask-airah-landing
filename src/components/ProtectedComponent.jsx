"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./constants/Navbar";
import Footer from "./constants/Footer";

const ProtectedComponent = ({ children }) => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a loading time of 1.5 seconds before displaying the content
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2.5); // 1.5 seconds

  //   return () => clearTimeout(timer); // Clean up the timer
  // }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default ProtectedComponent;
