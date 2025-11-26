// src/pages/Home.jsx
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMAGES } from "../data/images.js";
import FacebookPagePlugin from "../components/FacebookPagePlugin";
import EventsCarousel from "../components/EventsCarousel";
import PastEventsStrip from "../components/PastEventsStrip";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll-to-top-knapp
  const [showScroll, setShowScroll] = useState(false);

  // CMS-innehåll för hela startsidan
  const [homeContent, setHomeContent] = useState(null);

  // Visa/dölj scroll-to-top
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scrolla till event-sektionen om vi landar på /#events
  useEffect(() => {
    if (location.hash === "#events") {
      setTimeout(() => {
        const el = document.getElementById("events");
        if (!el) return;

        const headerOffset = 80;
        const elementPosition =
          el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 0);
    }
  }, [location]);

  // Hämta CMS-data
  useEffect(() => {
    fetch("/content/home.json")
      .then((res) => {
        if (!res.ok) throw new Error("Kunde inte läsa /content/home.json");
        return res.json();
      })
      .then((data) => setHomeContent(data))
      .catch((err) =>
        console.error("Fel vid hämtning av home.json:", err)
      );
  }, []);

  // --- Hjälp-funktioner för att plocka ut innehåll med fallback ---

  const heroEyebrow =
    homeContent?.eyebrow ?? "GRILLEVENT MED GLÖD.";
  const heroTitle =
    homeContent?.title ?? "VI GRILLAR PÅ DITT NÄSTA EVENT";
  const heroLede =
    homeContent?.lede ??
    "Vill du ha gott grillat till ditt event eller fest? Vi erbjuder grillcatering till allt från företagsevenemang och privata tillställningar. Vi ansvarar för grillningen på plats, så att du kan ägna dig åt gästerna. Resultatet blir god grill – levererad dit du behöver den. Givetvis har vi också grillkurser.";
  const heroCtaLabel = homeContent?.ctaLabel ?? "KONTAKTA OSS";

  const includeTitle = homeContent?.includeTitle ?? "Vad ingår?";
  const includeBody =
    homeContent?.includeBody ??
    "Vi kommer till dig med all utrustning och bästa råvarorna och grillar för dig och dina vänner, kolleger, kunder etc. Vår idé är simpel – grill på plats för alla tillfällen!";
  const includeCtaLabel =
    homeContent?.includeCtaLabel ?? "KONTAKTA OSS";

  const featureCardsFromCms = homeContent?.featureCards ?? [];
  const defaultFeatureCards = [
    {
      id: "fixar-allt",
      title: "Vi fixar allt",
      body: `När du bokar oss ingår allt som behövs för ett lyckat grilltillfälle.
Vi tar med grillar, utrustning, råvaror och personal, samt ansvarar
för transport och hantering på plats.`,
    },
    {
      id: "flexibel-meny",
      title: "Flexibel meny",
      body: `Våra menyer kan utformas helt efter önskemål. Vi erbjuder kött, fisk,
vegetariskt och glutenfritt, och ser till att alla gäster hittar något
som passar. Tillsammans planerar vi ett menyupplägg som fungerar för
just ert event.`,
      hasLink: true,
    },
    {
      id: "personlig-service",
      title: "Personlig service",
      body: `Vi lyssnar på era önskemål och ser till att varje event blir unikt och minnesvärt. 
Det kan handla om att anpassa menyn, tiderna eller upplägget efter era behov.`,
    },
    {
      id: "exempel-event",
      title: "Exempel på event",
      body: `Vi levererar grillupplevelser till många olika sammanhang – allt från studenten, 
företagsevent och bröllop till privata grillkvällar. Oavsett storlek på 
tillställningen anpassar vi upplägget efter era behov.`,
    },
    {
      id: "hog-kvalitet",
      title: "Hög kvalitet",
      body: `Vi använder alltid råvaror av hög kvalitet och grillar på plats för bästa smakupplevelse. 
Det innebär att vi väljer produkter som håller för höga temperaturer och som smakar bra 
även i större sammanhang.`,
    },
    {
      id: "all-utrustning",
      title: "All utrustning",
      body: `På erat event kan vi ta med all utrustning, så som tallrikar, glas, bestick osv. 
Vid planering får ni förmedla alla era önskemål så kommer vi fram till vad ni 
behöver tillsammans.`,
    },
  ];
  const featureCards =
    featureCardsFromCms.length > 0
      ? featureCardsFromCms
      : defaultFeatureCards;

  const menusTitle =
    homeContent?.menusTitle ?? "Menyförslag";
  const menusIntro =
    homeContent?.menusIntro ??
    "Vi kan tillsammans komma fram till en meny, eller så kan ni välja någon av menyerna nedan. Alla menyer har vegetariskt alternativ. Gluten- och laktosfria alternativ erbjuds alltid.";

  const menusFromCms = homeContent?.menus ?? [];
  const defaultMenus = [
    {
      title: "Meny 1 – Mixed grill",
      intro: "En populär grundmeny som passar de flesta tillställningar.",
      imageKey: "grid13",
      items: [
        "Entrecôte",
        "Fläskkarré/kotlett",
        "Kycklinglårfilé",
        "Två olika färska grillade korvar",
        "Potatisgratäng eller en wok",
        "Grillade grönsaker",
        "Majskolv",
        "Bearnaisesås",
      ],
      note: "Passar bra till privata tillställningar, företagsevent, studentfester och sommaravslutningar.",
    },
    {
      title: "Meny 2 – Mixed grill lyx",
      intro: "En mer exklusiv variant av Mixed Grill med lammracks.",
      imageKey: "grid14",
      items: [
        "Lammracks",
        "Entrecôte",
        "Fläskkarré/kotlett",
        "Kycklinglårfilé",
        "Två olika färska grillade korvar",
        "Potatisgratäng eller en wok",
        "Grillade grönsaker",
        "Majskolv",
        "Bearnaisesås",
      ],
      note: "Perfekt för företagsevent, AW eller temafester.",
    },
    {
      title: "Meny 3 – Hamburgermeny",
      intro: "En klassisk hamburgermeny med fokus på kvalitet och smak.",
      imageKey: "grid15",
      items: [
        "200g hamburgare med: lök, sallad, ostx2, bacon, jalapeno, briochebröd.",
        "Tillval: Pommes",
      ],
      note: "Festivaler, konserter, större event eller personalfester där en enklare men mättande rätt önskas.",
    },
    {
      title: "Meny 4 – Wraps",
      intro: "Ett flexibelt och lättserverat alternativ med wraps i olika varianter.",
      imageKey: "grid12",
      items: [
        "Pulled porkwrap: Isbergssallad, coleslaw, färsk gurka, barbecuesås och jalapeños samt picklad rödlök.",
        "Varmrökt laxwrap: Isbergssallad, småpotatis med dijonsenapssås och gräslök, rädisor samt picklad rödlök.",
        "Vegetariskt alternativ: Pulled Oumphwrap; Isbergssallad, coleslaw, färsk gurka, barbecuesås och jalapeños samt picklad rödlök.",
      ],
      note: "Konserter, festivaler, marknader, lunchgrill och andra utomhusevent där maten ska vara enkel att äta.",
    },
  ];
  const menus =
    menusFromCms.length > 0 ? menusFromCms : defaultMenus;

  const newsTitle =
    homeContent?.newsTitle ?? "Aktuellt";
  const newsLede =
    homeContent?.newsLede ??
    "Håll koll på Grill Janne! Här berättar vi när vi står på event och tillställningar. Följ oss på Facebook för att se fler bilder och uppdateringar.";
  const newsFacebookLabel =
    homeContent?.newsFacebookLabel ?? "FÖLJ OSS PÅ FACEBOOK";

  const upcomingTitle =
    homeContent?.upcomingTitle ?? "Kommande event";
  const upcomingEventsFromCms =
    homeContent?.upcomingEvents ?? [];
  const defaultUpcoming = [
    "Ullevi, Luke Combs, lördag 4/7-26",
    "Ullevi, Swedish House Maffia, fredag 28/8-26",
    "Ullevi, Swedish House Maffia, lördag 29/8-26",
  ];
  const upcomingEvents =
    upcomingEventsFromCms.length > 0
      ? upcomingEventsFromCms.map((e) => e.event || e)
      : defaultUpcoming;

  const contactTitle =
    homeContent?.contactTitle ??
    "Vill du diskutera ditt nästa grillevent?";
  const contactBody =
    homeContent?.contactBody ??
    "Ring 070-574 70 13 eller maila janne.staffas@gmail.com.";

  const [openCardId, setOpenCardId] = useState(null);
  const toggleCard = (id) =>
    setOpenCardId((prev) => (prev === id ? null : id));

  const resolveImage = (key) => {
    if (!key) return null;
    return IMAGES[key] ?? null;
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">{heroEyebrow}</p>
          <h1>{heroTitle}</h1>
          <p className="lede">{heroLede}</p>
          <button
            className="btn btn-solid hero-mobile-cta"
            onClick={() => navigate("/kontakt")}
          >
            {heroCtaLabel}
          </button>
        </div>
        <section
          className="fullbleed"
          style={{ backgroundImage: `url(${IMAGES.grid5})` }}
        />
      </section>

      {/* VAD INGÅR */}
      <section className="feature-cards-home">
        <div className="container include-inner">
          <div className="include-left">
            <h2>{includeTitle}</h2>
          </div>
          <div className="include-right">
            <p>{includeBody}</p>
            <button
              className="btn btn-outline"
              onClick={() => navigate("/kontakt")}
            >
              {includeCtaLabel}
            </button>
          </div>
        </div>

        <div className="feature-grid-home">
          {featureCards.map((card) => {
            const isOpen = openCardId === card.id;
            return (
              <article key={card.id} className="feature-card-home">
                <button
                  type="button"
                  className="feature-card-home__header"
                  onClick={() => toggleCard(card.id)}
                >
                  <h3>{card.title}</h3>
                  <span
                    className={`feature-card-home__icon ${
                      isOpen ? "is-open" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`feature-card-home__content ${
                    isOpen ? "is-open" : ""
                  }`}
                >
                  <p>{card.body}</p>
                  {card.hasLink && (
                    <a
                      className="text-cta"
                      href="/home#menyforslag"
                    >
                      Se menyförslag
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* TYP AV EVENT */}
      <section id="events">
        <EventsCarousel />
      </section>

      {/* MENYFÖRSLAG */}
      <section className="menus" id="menyforslag">
        <div className="container">
          <h2 className="menus-title">{menusTitle}</h2>
          <p className="menus-intro">{menusIntro}</p>

          <div className="menus-grid">
            {menus.map((menu, idx) => {
              const img = resolveImage(menu.imageKey);
              return (
                <article className="menu" key={idx}>
                  <h3>{menu.title}</h3>
                  <p>{menu.intro}</p>
                  {img && (
                    <div
                      className="menu-image"
                      style={{
                        backgroundImage: `url(${img})`,
                      }}
                    />
                  )}
                  <div className="menu-sub">Innehåll:</div>
                  <ul>
                    {(menu.items ?? []).map((it, i) => (
                      <li key={i}>
                        {typeof it === "string" ? it : it.item}
                      </li>
                    ))}
                  </ul>
                  {menu.note && (
                    <p className="menu-note">{menu.note}</p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MOSAIC 3-BILDER */}
      <section className="mosaic3">
        <div className="container">
          <div className="mosaic3-grid">
            <a
              className="m3-item m3-left"
              style={{
                backgroundImage: `url(${IMAGES.grid1})`,
              }}
            />
            <a
              className="m3-item m3-right-top"
              style={{
                backgroundImage: `url(${IMAGES.grid2})`,
              }}
            />
            <a
              className="m3-item m3-right-bottom"
              style={{
                backgroundImage: `url(${IMAGES.grid3})`,
              }}
            />
          </div>

          <div className="m3-cta">
            <a className="btn btn-outline" href="/bilder">
              SE ALLA BILDER
            </a>
          </div>
        </div>
      </section>

      {/* AKTUELLT */}
      <section className="news news--home" id="aktuellt">
        <div className="container news-head">
          <h2>{newsTitle}</h2>
          <p className="lede lede-news">{newsLede}</p>
          <a
            href="https://www.facebook.com/people/Grill-Janne/100075682557073/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            {newsFacebookLabel}
          </a>
        </div>

        <div className="container news-columns">
          <div className="news-col">
            <h3>{upcomingTitle}</h3>
            <ul className="upcoming-list">
              {upcomingEvents.map((event, i) => (
                <li key={i}>{event}</li>
              ))}
            </ul>
          </div>

          <div className="news-col news-col--right">
            <h3>Tidigare event</h3>
            <PastEventsStrip />
          </div>
        </div>
      </section>

      {/* KONTAKT-CTA */}
      <section className="contact-cta">
        <div className="container contact-cta-inner">
          <h3>{contactTitle}</h3>
          <p>{contactBody}</p>
        </div>
      </section>

      {/* Scroll-to-top-knapp */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className={`scroll-to-top ${showScroll ? "show" : ""}`}
          aria-label="Till toppen"
        >
          ↑
        </button>
      )}
    </main>
  );
}