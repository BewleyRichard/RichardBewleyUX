import React, { useEffect, useRef, useState } from "react";
import "./ScrollTrackingHeader.css";

const ScrollTrackingHeader = ({
  containerRef,
  children,
  offsetTop = 0,
  className = "",
}) => {
  const [translateX, setTranslateX] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container || !headerRef.current) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrollPercent = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      const containerWidth = container.clientWidth;
      const headerWidth = headerRef.current.offsetWidth;
      const maxTravel = Math.max(containerWidth - headerWidth, 0);

      setTranslateX(scrollPercent * maxTravel);
    };

    handleScroll(); // initialize once
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  return (
    <div
      ref={headerRef}
      className={`scroll-tracking-header ${className}`}
      style={{
        top: `${offsetTop}px`,
        transform: `translateX(${translateX}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollTrackingHeader;
