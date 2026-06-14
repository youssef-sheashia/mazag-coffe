import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Experience from "./components/Experience/Experience";
import Location from "./components/Location/Location";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FloatingWhatsApp from "./components/UI/FloatingWhatsApp";
import LoadingScreen from "./components/UI/LoadingScreen";
import GoldBanner from "./components/UI/GoldBanner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div
        style={{
          opacity: isLoading ? 1 : 0,
          visibility: isLoading ? "visible" : "hidden",
          transition: "opacity 0.6s ease, visibility 0.6s ease",
          position: "fixed",
          inset: 0,
          zIndex: 9999,
        }}
      >
        <LoadingScreen />
      </div>

      {/* Main Content */}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.8s ease 0.3s",
          direction: "rtl",
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <GoldBanner />
          <About />
          <Products />
          <GoldBanner text="القهوة أكثر من مجرد مشروب... إنها مزاج" />
          <Experience />
          <Location />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />

        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </>
  );
}

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="العودة للأعلى"
      style={{
        position: "fixed",
        bottom: "6rem",
        left: "1.5rem",
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #2C1810, #4A2C2A)",
        border: "1px solid rgba(201,168,76,0.3)",
        color: "#E8C97A",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 15px rgba(44,24,16,0.4)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
        zIndex: 40,
        fontSize: "1.1rem",
      }}
    >
      ↑
    </button>
  );
};

export default App;
