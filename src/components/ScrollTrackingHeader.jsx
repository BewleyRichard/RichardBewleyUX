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
  const innerRef = useRef(null);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container || !innerRef.current) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrollPercent = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      const containerWidth = container.clientWidth;
      const innerWidth = innerRef.current.offsetWidth;
      const maxTravel = Math.max(containerWidth - innerWidth, 0);

      setTranslateX(scrollPercent * maxTravel);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  return (
    <div
      ref={headerRef}
      className={`scroll-tracking-header ${className}`}
      style={{ top: `${offsetTop}px` }}
    >
      <div
        ref={innerRef}
        className="scroll-tracking-header__inner"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollTrackingHeader;
