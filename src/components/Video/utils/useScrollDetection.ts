import { useState, useEffect, useCallback } from "react";

function useScrollDetection(containerRef: React.RefObject<HTMLElement>) {
  const [isScrolling, setIsScrolling] = useState(0);

  const handleScroll = useCallback(() => {
    startScrolling(setIsScrolling);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      attachScrollListener(container, handleScroll);
    }

    return () => {
      if (container) {
        detachScrollListener(container, handleScroll);
      }
    };
  }, [containerRef, handleScroll]);

  return isScrolling;
}

function startScrolling(
  setIsScrolling: React.Dispatch<React.SetStateAction<number>>
) {
  setIsScrolling(1);
  setTimeout(() => {
    setIsScrolling(0);
  }, 1000);
}

function attachScrollListener(
  container: HTMLElement,
  handleScroll: EventListener
) {
  container.addEventListener("scroll", handleScroll);
}

function detachScrollListener(
  container: HTMLElement,
  handleScroll: EventListener
) {
  container.removeEventListener("scroll", handleScroll);
}

export { useScrollDetection };
