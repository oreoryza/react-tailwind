import React, { useRef, useState, useEffect } from "react";
import Navbar from "./container/Navbar";
import Header from "./container/Header";
import BlogList from "./container/BlogList";
import Footer from "./container/Footer";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const topRef = useRef(null);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={topRef}>
      <Navbar />
      <div className="flex flex-col justify-center md:px-24 px-0">
        <Header />
        <BlogList />
      </div>
      {isVisible && (
        <button
          className="fixed right-2 bottom-2 bg-blue p-3 text-white slideUp"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
            />
          </svg>
        </button>
      )}
      <Footer />
    </div>
  );
}
