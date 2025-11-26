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

  // === Scroll to top-knapp ===
  const [showScroll, setShowScroll] = useState(false);

    // CMS-innehåll för startsidans hero
  const [homeContent, setHomeContent] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Om vi landar på /#events -> scrolla till event-sektionen
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

    // Hämta CMS-data för hero-sektionen
  useEffect(() => {
    fetch("/content/home.json")
      .then((res) => {
        if (!res.ok) throw new Error("Kunde inte läsa /content/home.json");
        return res.json();
      })
      .then((data) => {
        setHomeContent(data);
      })
      .catch((err) => {
        console.error("Fel vid hämtning av home.json:", err);
      });
  }, []);


  // Data för "Vad ingår?"-korten
  const featureCards = [
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
Vid planering får ni förmedla alla era önsekemål så kommer vi fram till vad ni 
behöver tillsammans.`,
    },
  ];

  const [openCardId, setOpenCardId] = useState(null);

  const toggleCard = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">
            {homeContent?.eyebrow ?? "GRILLEVENT MED GLÖD"}
          </p>
          <h1>
            {homeContent?.title ?? "VI GRILLAR PÅ DITT NÄSTA EVENT"}
          </h1>
          <p className="lede">
            {homeContent?.lede ??
              "Vill du ha gott grillat till ditt event eller fest? Vi erbjuder grillcatering till allt från företagsevenemang och privata tillställningar. Vi ansvarar för grillningen på plats, så att du kan ägna dig åt gästerna. Resultatet blir god grill – levererad dit du behöver den. Givetvis har vi också grillkurser."}
          </p>
          <button
            className="btn btn-solid hero-mobile-cta"
            onClick={() => navigate("/kontakt")}
          >
            {homeContent?.ctaLabel ?? "KONTAKTA OSS"}
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
            <h2>Vad ingår?</h2>
          </div>
          <div className="include-right">
            <p>
              Vi kommer till dig med all utrustning och bästa råvarorna och grillar för dig och
              dina vänner, kolleger, kunder etc. Vår idé är simpel - grill på plats för alla
              tillfällen!
            </p>
            <button
              className="btn btn-outline"
              onClick={() => navigate("/kontakt")}
            >
              KONTAKTA OSS
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
                    <a className="text-cta" href="/home#menyforslag">
                      Se menyförslag
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 🔹 TYP AV EVENT – denna sektion får id="events" */}
      <section id="events">
        <EventsCarousel />
      </section>

      {/* --- MENYFÖRSLAG --- */}
      <section className="menus" id="menyforslag">
        <div className="container">
          <h2 className="menus-title">Menyförslag</h2>
          <p className="menus-intro">
            Vi kan tillsammans komma fram till en meny, eller så kan ni välja någon av menyerna
            nedan. Alla menyer har vegetariskt alternativ. Gluten- och laktosfria alternativ
            erbjuds alltid.
          </p>

          <div className="menus-grid">
            {/* MENY 1 */}
            <article className="menu">
              <h3>Meny 1 – Mixed grill</h3>
              <p>En populär grundmeny som passar de flesta tillställningar.</p>
              <div
                className="menu-image"
                style={{ backgroundImage: `url(${IMAGES.grid13})` }}
              ></div>
              <div className="menu-sub">Innehåll:</div>
              <ul>
                <li>Entrecôte</li>
                <li>Fläskkarré/kotlett</li>
                <li>Kycklinglårfilé</li>
                <li>Två olika färska grillade korvar</li>
                <li>Potatisgratäng eller en wok</li>
                <li>Grillade grönsaker</li>
                <li>Majskolv</li>
                <li>Bearnaisesås</li>
              </ul>
              <p className="menu-note">
                Passar bra till privata tillställningar, företagsevent, studentfester och
                sommaravslutningar.
              </p>
            </article>

            {/* MENY 2 */}
            <article className="menu">
              <h3>Meny 2 – Mixed grill lyx</h3>
              <p>En mer exklusiv variant av Mixed Grill med lammracks. </p>
              <div
                className="menu-image"
                style={{ backgroundImage: `url(${IMAGES.grid14})` }}
              ></div>
              <div className="menu-sub">Innehåll:</div>
              <ul>
                <li>Lammracks</li>
                <li>Entrecôte</li>
                <li>Fläskkarré/kotlett</li>
                <li>Kycklinglårfilé</li>
                <li>Två olika färska grillade korvar</li>
                <li>Potatisgratäng eller en wok</li>
                <li>Grillade grönsaker</li>
                <li>Majskolv</li>
                <li>Bearnaisesås</li>
              </ul>
              <p className="menu-note">Perfekt för företagsevent, AW eller temafester.</p>
            </article>

            {/* MENY 3 */}
            <article className="menu">
              <h3>Meny 3 – Hamburgermeny</h3>
              <p>En klassisk hamburgermeny med fokus på kvalitet och smak.</p>
              <div
                className="menu-image"
                style={{ backgroundImage: `url(${IMAGES.grid15})` }}
              ></div>
              <div className="menu-sub">Innehåll:</div>
              <ul>
                <li>200g hamburgare med: lök, sallad, ostx2, bacon, jalapeno, briochebröd.</li>
                <li>Tillval: Pommes</li>
              </ul>
              <p className="menu-note">
                Festivaler, konserter, större event eller personalfester där en enklare men
                mättande rätt önskas.
              </p>
            </article>

            {/* MENY 4 */}
            <article className="menu">
              <h3>Meny 4 – Wraps</h3>
              <p>Ett flexibelt och lättserverat alternativ med wraps i olika varianter.</p>
              <div
                className="menu-image"
                style={{ backgroundImage: `url(${IMAGES.grid12})` }}
              ></div>
              <div className="menu-sub">Innehåll:</div>
              <ul>
                <li>
                  Pulled porkwrap: Isbergssallad, coleslaw, färsk gurka, barbecuesås och jalapeños
                  samt picklad rödlök.
                </li>
                <li>
                  Varmrökt laxwrap: Isbergssallad, småpotatis med dijonsenapssås och gräslök,
                  rädisor samt picklad rödlök.
                </li>
                <li>
                  Vegetariskt alternativ: Pulled Oumphwrap; Isbergssallad, coleslaw, färsk gurka,
                  barbecuesås och jalapeños samt picklad rödlök.
                </li>
              </ul>
              <p className="menu-note">
                Konserter, festivaler, marknader, lunchgrill och andra utomhusevent där maten ska
                vara enkel att äta.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* === MOSAIC 3-BILDER === */}
      <section className="mosaic3">
        <div className="container">
          <div className="mosaic3-grid">
            <a
              className="m3-item m3-left"
              style={{ backgroundImage: `url(${IMAGES.grid1})` }}
            />
            <a
              className="m3-item m3-right-top"
              style={{ backgroundImage: `url(${IMAGES.grid2})` }}
            />
            <a
              className="m3-item m3-right-bottom"
              style={{ backgroundImage: `url(${IMAGES.grid3})` }}
            />
          </div>

          <div className="m3-cta">
            <a className="btn btn-outline" href="/bilder">
              SE ALLA BILDER
            </a>
          </div>
        </div>
      </section>

      {/* === AKTUELLT (hem) === */}
      <section className="news news--home" id="aktuellt">
        <div className="container news-head">
          <h2>Aktuellt</h2>
          <p className="lede lede-news">
            Håll koll på Grill Janne! Här berättar vi när vi står på event och tillställningar. Följ
            oss på Facebook för att se fler bilder och uppdateringar.
          </p>
          <a
            href="https://www.facebook.com/people/Grill-Janne/100075682557073/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            FÖLJ OSS PÅ FACEBOOK
          </a>
        </div>

        {/* Två kolumner */}
        <div className="container news-columns">
          {/* Vänster: Kommande event */}
          <div className="news-col">
            <h3>Kommande event</h3>
            <ul className="upcoming-list">
              <li> Ullevi, Luke Combs, lördag 4/7-26</li>
              <li> Ullevi, Swedish House Maffia, fredag 28/8-26</li>
              <li> Ullevi, Swedish House Maffia, lördag 29/8-26</li>
            </ul>
          </div>
        </div>
      </section>


      {/* KONTAKT-CTA */}
      <section className="contact-cta">
        <div className="container contact-cta-inner">
          <h3>Vill du diskutera ditt nästa grillevent?</h3>
          <p>
            Ring <a href="tel:0705747013">070-574 70 13</a> eller maila{" "}
            <a href="mailto:janne.staffas@gmail.com">janne.staffas@gmail.com</a>.
          </p>
        </div>
      </section>

      {/* === Scroll to top-knapp === */}
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