import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastY = useRef(0);
  const lastDir = useRef("up");

  // show/hide on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const diff = y - lastY.current;
      if (y < 80) { setHidden(false); lastY.current = y; lastDir.current = "up"; return; }
      if (Math.abs(diff) < 8) return;
      if (diff > 0 && lastDir.current !== "down") { setHidden(true); lastDir.current = "down"; }
      else if (diff < 0 && lastDir.current !== "up") { setHidden(false); lastDir.current = "up"; }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // stäng overlay när man byter route (enkelt: stäng på klick)
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(v => !v);

  return (
    <>
      <header className={`nav ${hidden ? "nav--hidden" : ""}`}>
        <div className="container nav-inner">
          <div className="logo">
            <Link to="/">GRILL&nbsp;JANNE</Link>
          </div>

          <nav className="nav-links">
            {/* <NavLink to="/catering">Catering och event</NavLink> */}
            <NavLink to="/aktuellt">Aktuellt</NavLink>
            <NavLink to="/bilder">Bilder</NavLink>
            <NavLink to="/Om">Om oss</NavLink>
          </nav>

          <Link className="btn btn-solid nav-cta" to="/kontakt">KONTAKTA OSS</Link>

          {/* hamburger – syns bara <980px via CSS */}
          <button
            className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
            aria-label="Öppna meny"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobil overlay */}
      <aside className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <button className="mobile-close" aria-label="Stäng meny" onClick={closeMenu}>
          <span></span><span></span>
        </button>

        <div className="mobile-menu-inner">
          <div className="mobile-links">
            <NavLink to="/" onClick={closeMenu}>Hem</NavLink>
            {/* <NavLink to="/catering" onClick={closeMenu}>Catering</NavLink> */}
            <NavLink to="/bilder" onClick={closeMenu}>Bilder</NavLink>
            <NavLink to="/aktuellt" onClick={closeMenu}>Aktuellt</NavLink>
            <NavLink to="/kontakt" onClick={closeMenu}>Kontakt</NavLink>
          </div>
            <div>
              <div className="foot-value"><a href="mailto:janne.staffas@gmail.com">janne.staffas@gmail.com</a></div>
              <div className="foot-value"><a href="tel:0705747013">070-574 70 13</a></div>
            </div>
        </div>
      </aside>
    </>
  );
}
