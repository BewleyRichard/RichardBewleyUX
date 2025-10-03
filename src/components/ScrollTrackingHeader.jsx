import React, { useEffect, useRef, useState } from "react";

const ScrollTrackingHeader = ({ containerRef, children, offsetTop = 0 }) => {
  const [translateX, setTranslateX] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!containerRef?.current || !headerRef.current) return;
    const container = containerRef.current;
    const header = headerRef.current;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrollPercent = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      const containerWidth = container.clientWidth;
      const headerWidth = header.offsetWidth;

      // Max distance the header can travel
      const maxTravel = containerWidth - headerWidth;

      // Start left → move right
      setTranslateX(scrollPercent * maxTravel);
    };

    handleScroll(); // initialize once
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  return (
    <h1
      ref={headerRef}
      style={{
        position: "absolute",
        top: `${offsetTop}px`,
        left: 0,
        margin: 0,
        transform: `translateX(${translateX}px)`,
        transition: "transform 0.05s linear",
        pointerEvents: "none",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </h1>
  );
};

export default ScrollTrackingHeader;
