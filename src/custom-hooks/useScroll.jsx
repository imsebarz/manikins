import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = () => setScroll({ x: window.scrollX, y: window.scrollY });
    window.addEventListener("scroll", setFromEvent);

    return () => {
      window.removeEventListener("scroll", setFromEvent);
    };
  }, []);

  return scroll;
};