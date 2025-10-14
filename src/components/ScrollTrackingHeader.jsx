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
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const setupScrollTracking = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      // Choose the scroll container
      const container = isMobile
        ? document.querySelector(".right-column")
        : containerRef?.current;

      if (!container || !innerRef.current) return;

      scrollContainerRef.current = container;

      const handleScroll = () => {
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight - container.clientHeight;
        const scrollPercent = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

        const containerWidth = container.clientWidth;
        const innerWidth = innerRef.current.offsetWidth;
        const maxTravel = Math.max(containerWidth - innerWidth, 0);

        setTranslateX(scrollPercent * maxTravel);
      };

      handleScroll(); // run once on mount
      container.addEventListener("scroll", handleScroll, { passive: true });

      return () => container.removeEventListener("scroll", handleScroll);
    };

    // Setup initially
    let cleanup = setupScrollTracking();

    // Re-run when resizing between desktop and mobile
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleResize = () => {
      if (cleanup) cleanup();
      cleanup = setupScrollTracking();
    };
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      if (cleanup) cleanup();
      mediaQuery.removeEventListener("change", handleResize);
    };
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
