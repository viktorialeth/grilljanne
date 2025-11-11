import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastY = useRef(0);
  const lastDir = useRef("up");

  const navigate = useNavigate();          // <-- saknades
  const location = useLocation();

  // Visa/dölj nav vid scroll
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

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(v => !v);

  const scrollTopSmooth = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // Logga: gå hem och scrolla upp (om vi redan är på /, hoppa bara till toppen)
  function handleLogoClick(e) {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollTopSmooth, 0);
    } else {
      scrollTopSmooth();
    }
    closeMenu();
  }

  // Gemensam klickhanterare för nav-länkar (scrolla alltid upp)
  const handleNavClick = (path) => (e) => {
    e.preventDefault();
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(scrollTopSmooth, 0);
    } else {
      scrollTopSmooth();
    }
    closeMenu();
  };

  return (
    <>
      <header className={`nav ${hidden ? "nav--hidden" : ""}`}>
        <div className="container nav-inner">
          <div className="logo">
            <a href="/" onClick={handleLogoClick}>GRILL&nbsp;JANNE</a>
          </div>

          <nav className="nav-links">
            <a href="/aktuellt" onClick={handleNavClick("/aktuellt")}>Aktuellt</a>
            <a href="/bilder"   onClick={handleNavClick("/bilder")}>Bilder</a>
            <a href="/Om"       onClick={handleNavClick("/Om")}>Om oss</a>
          </nav>

          <a className="btn btn-solid nav-cta" href="/kontakt" onClick={handleNavClick("/kontakt")}>
            KONTAKTA OSS
          </a>

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
            <a href="/"         onClick={handleLogoClick}>Hem</a>
            <a href="/bilder"   onClick={handleNavClick("/bilder")}>Bilder</a>
            <a href="/aktuellt" onClick={handleNavClick("/aktuellt")}>Aktuellt</a>
            <a href="/kontakt"  onClick={handleNavClick("/kontakt")}>Kontakt</a>
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