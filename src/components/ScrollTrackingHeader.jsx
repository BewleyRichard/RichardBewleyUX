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

      const container =
        containerRef?.current ??
        (isMobile ? document.querySelector(".right-column") : null);

      if (!container || !innerRef.current || !headerRef.current) return;

      scrollContainerRef.current = container;

      const handleScroll = () => {
        const headerEl = headerRef.current;
        if (!headerEl) return;

        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight - container.clientHeight;
        const scrollPercent = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

        const innerWidth = innerRef.current.offsetWidth;

        // Compute available width from the header box itself (matches desktop behavior),
        // independent of parent padding/margins/bleed.
        const cs = getComputedStyle(headerEl);
        const paddingLeft = parseFloat(cs.paddingLeft) || 0;
        const paddingRight = parseFloat(cs.paddingRight) || 0;
        const availableWidth =
          headerEl.clientWidth - paddingLeft - paddingRight;

        const maxTravel = Math.max(availableWidth - innerWidth, 0);
        const clampedPercent = Math.min(Math.max(scrollPercent, 0), 1);

        setTranslateX(clampedPercent * maxTravel);
      };

      handleScroll();
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
