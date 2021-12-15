import React, { useEffect } from "react";
import "./scroll.scss";

const ScrollToTop = () => {
  const [position, setPosition] = React.useState(0);

  const scrollToTop = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const positionScroll = window.pageYOffset;
      setPosition(positionScroll);
    });
    return () => {
      window.removeEventListener("scroll", function () {});
    };
  }, []);

  useEffect(() => {
    console.log(position);
  }, [position]);
  return (
    <div>
      <div className="scroll_container">
        <div className="container_1"></div>
        <div className="container_2"></div>
        <div className="container_3"></div>
        <button
          className="btn btn-info top_btn"
          onClick={scrollToTop}
          style={position > 100 ? { display: "block" } : { display: "none" }}
        >
          Top
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;
