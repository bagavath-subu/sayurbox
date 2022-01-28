import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import arrow from "../../../assets/images/up-arrow.svg";

const ScrollToTop: React.FC = (props) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {props.children}
      {isVisible && (
        <div
          className="rounded bg-white fixed bottom-10 right-10 p-2 cursor-pointer"
          onClick={scrollTop}
        >
          <img src={arrow} alt="to-top" width="30px" height="30px" />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
