import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

const ArrowToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const changeVisible = () => {
      if (window.pageYOffset > document.documentElement.clientHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", changeVisible);
    return () => {
      window.removeEventListener("scroll", changeVisible);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div
        className="moveToTop"
        onClick={scrollToTop}
        style={{ display: visible ? "block" : "none" }}
      >
        <FontAwesomeIcon icon={faChevronCircleUp} size="2x" />
      </div>
    </>
  );
};

export default ArrowToTop;
