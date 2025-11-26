// src/components/Header.jsx
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventOpenDesktop, setEventOpenDesktop] = useState(false);
  const [eventOpenMobile, setEventOpenMobile] = useState(false);

  const lastY = useRef(0);
  const lastDir = useRef("up");

  const navigate = useNavigate();
  const location = useLocation();

  const desktopEventRef = useRef(null);
  const mobileEventRef = useRef(null);

  // Visa/dölj nav vid scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const diff = y - lastY.current;

      if (y < 80) {
        setHidden(false);
        lastY.current = y;
        lastDir.current = "up";
        return;
      }

      if (Math.abs(diff) < 8) return;

      if (diff > 0 && lastDir.current !== "down") {
        setHidden(true);
        lastDir.current = "down";
      } else if (diff < 0 && lastDir.current !== "up") {
        setHidden(false);
        lastDir.current = "up";
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setEventOpenDesktop(false);
    setEventOpenMobile(false);
  };

  const toggleMenu = () => setMenuOpen((v) => !v);

  const scrollTopSmooth = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // Scroll till sektion med givet id
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 80;
    const elementPosition =
      el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  // Klick på loggan
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollTopSmooth, 0);
    } else {
      scrollTopSmooth();
    }
    closeMenu();
  };

  // Vanliga nav-länkar (till sidor)
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

  // 🔹 NYTT: Event → hem + scroll till sektionen "events"
  const handleEventSectionClick = (e) => {
    e.preventDefault();

    const goToEvents = () => scrollToSection("events");

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(goToEvents, 50);
    } else {
      goToEvents();
    }

    closeMenu();
  };

  // Aktuellt → hem + scroll
  const handleAktuelltClick = (e) => {
    e.preventDefault();
    const goToAktuellt = () => scrollToSection("aktuellt");

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(goToAktuellt, 50);
    } else {
      goToAktuellt();
    }
    closeMenu();
  };

  // Menyförslag → hem + scroll
  const handleMenyforslagClick = (e) => {
    e.preventDefault();
    const goToSection = () => scrollToSection("menyforslag");

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(goToSection, 50);
    } else {
      goToSection();
    }
    closeMenu();
  };

  // Click-outside för att stänga dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        eventOpenDesktop &&
        desktopEventRef.current &&
        !desktopEventRef.current.contains(e.target)
      ) {
        setEventOpenDesktop(false);
      }

      if (
        eventOpenMobile &&
        mobileEventRef.current &&
        !mobileEventRef.current.contains(e.target)
      ) {
        setEventOpenMobile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [eventOpenDesktop, eventOpenMobile]);

  return (
    <>
      <header className={`nav ${hidden ? "nav--hidden" : ""}`}>
        <div className="container nav-inner">
          <div className="logo">
            <a href="/" onClick={handleLogoClick}>
              GRILL&nbsp;JANNE
            </a>
          </div>

          {/* DESKTOP-NAV */}
          <nav className="nav-links">
            {/* Event + dropdown */}
            <div
              className="nav-item nav-item--has-dropdown"
              ref={desktopEventRef}
              onMouseEnter={() => setEventOpenDesktop(true)}
              onMouseLeave={() => setEventOpenDesktop(false)}
            >
              <button
                type="button"
                className={`nav-link nav-link--dropdown ${
                  eventOpenDesktop ? "is-open" : ""
                }`}
                onClick={handleEventSectionClick} // ⬅️ scrollar till "events"
              >
                Event
                <span className="nav-link-arrow">▾</span>
              </button>

              <div
                className={`nav-dropdown ${
                  eventOpenDesktop ? "is-open" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={handleNavClick("/foretagsevent")}
                >
                  Företagsevent
                </button>
                <button
                  type="button"
                  onClick={handleNavClick("/privatfest")}
                >
                  Privat fest
                </button>
                <button
                  type="button"
                  onClick={handleNavClick("/grillkurser")}
                >
                  Grillkurser
                </button>
                <button
                  type="button"
                  onClick={handleNavClick("/kundevent")}
                >
                  Kundevent
                </button>
                <button
                  type="button"
                  onClick={handleNavClick("/brollop")}
                >
                  Bröllop
                </button>
                <button
                  type="button"
                  onClick={handleNavClick("/student")}
                >
                  Student
                </button>
              </div>
            </div>
            
            <a href="/#menyforslag" onClick={handleMenyforslagClick}>
              Menyförslag
            </a>
            <a href="/bilder" onClick={handleNavClick("/bilder")}>
              Bilder
            </a>
            <a href="/#aktuellt" onClick={handleAktuelltClick}>
              Aktuellt
            </a>
            <a href="/om" onClick={handleNavClick("/om")}>
              Om oss
            </a>
          </nav>

          <a
            className="btn btn-solid nav-cta"
            href="/kontakt"
            onClick={handleNavClick("/kontakt")}
          >
            KONTAKTA OSS
          </a>

          {/* Hamburger-knapp */}
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

      {/* MOBIL OVERLAY */}
      <aside
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="mobile-close"
          aria-label="Stäng meny"
          onClick={closeMenu}
        >
          <span></span>
          <span></span>
        </button>

        <div className="mobile-menu-inner">
          <div className="mobile-links">
            <a href="/" onClick={handleLogoClick}>
              Hem
            </a>

            {/* Mobil: Event med egen dropdown (låt den vara som innan) */}
            <div ref={mobileEventRef}>
              <button
                type="button"
                className={`mobile-link mobile-link--dropdown ${
                  eventOpenMobile ? "is-open" : ""
                }`}
                onClick={() =>
                  setEventOpenMobile((open) => !open)
                }
              >
                Event <span className="nav-link-arrow">▾</span>
              </button>
              {eventOpenMobile && (
                <div className="mobile-dropdown">
                  <button
                    type="button"
                    onClick={handleNavClick("/foretagsevent")}
                  >
                    Företagsevent
                  </button>
                  <button
                    type="button"
                    onClick={handleNavClick("/privatfest")}
                  >
                    Privat fest
                  </button>
                  <button
                    type="button"
                    onClick={handleNavClick("/grillkurser")}
                  >
                    Grillkurser
                  </button>
                  <button
                    type="button"
                    onClick={handleNavClick("/kundevent")}
                  >
                    Kundevent
                  </button>
                  <button
                    type="button"
                    onClick={handleNavClick("/brollop")}
                  >
                    Bröllop
                  </button>
                  <button
                    type="button"
                    onClick={handleNavClick("/student")}
                  >
                    Student
                  </button>
                </div>
              )}
            </div>

            <a href="/#aktuellt" onClick={handleAktuelltClick}>
              Aktuellt
            </a>
            <a href="/bilder" onClick={handleNavClick("/bilder")}>
              Bilder
            </a>
            <a href="/om" onClick={handleNavClick("/om")}>
              Om oss
            </a>
            <a href="/#menyforslag" onClick={handleMenyforslagClick}>
              Menyförslag
            </a>
            <a href="/kontakt" onClick={handleNavClick("/kontakt")}>
              Kontakt
            </a>
          </div>

          <div>
            <div className="foot-value">
              <a href="mailto:janne.staffas@gmail.com">
                janne.staffas@gmail.com
              </a>
            </div>
            <div className="foot-value">
              <a href="tel:0705747013">070-574 70 13</a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
