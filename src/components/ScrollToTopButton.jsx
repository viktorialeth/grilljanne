// src/components/ScrollToTopButton.jsx
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      className={`scroll-to-top ${show ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Till toppen"
    >
      ↑
    </button>
  );
}