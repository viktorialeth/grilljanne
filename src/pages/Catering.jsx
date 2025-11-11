// src/pages/Catering.jsx
import { IMAGES } from "../data/images.js";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"; // eller utan .jsx

export default function Catering() {
  return (
    <main className="catering-page">
      {/* Sida: H1 */}
      <section className="page-hero page-head">
        <div className="container">
          <h1>CATERING OCH EVENT</h1>
          <p>Vi erbjuder helhetslösningar för catering med fokus på grill.</p>
        </div>
      </section>

      {/* Fullbreddsbild */}
      <section
        className="hero-image"
        style={{ backgroundImage: `url(${IMAGES.grid1})` }}
      />

      {/* Intro med bild till höger */}
      <section className="catering-intro">
        <div className="catering-content">
          <div className="text">
            <h2>Grill på plats för alla tillfällen</h2>
            <p>
              GrillJanne erbjuder helhetslösningar för catering med fokus på grill.
              Kontakta oss så tar vi tillsammans fram ett skräddarsytt upplägg som
              passar just ert event. Vi kommer sedan till er med all utrustning,
              råvaror och personal – oavsett om det handlar om ett företagsevent eller
              en privat fest. Vår idé är enkel: god mat, smidig planering och en
              upplevelse som gästerna minns.
            </p>
            <a href="/kontakt" className="cta-outline">Kontakta oss</a>
          </div>

          <div className="image" style={{ backgroundImage: `url(${IMAGES.grid5})` }} />
        </div>
      </section>

      {/* FEATURE-KORT */}
      <section className="feature-cards">
        <div className="text">
          <h2>Vad kan du vänta dig?</h2>
        </div>
        <div className="feature-grid">
          {/* …dina kort… */}
        </div>
      </section>

      {/* --- MENYFÖRSLAG --- */}
      <section className="menus" id="menyforslag">
        <div className="container">
          <h2 className="menus-title">MENYFÖRSLAG</h2>
          <p className="menus-intro">
            Vi kan tillsammans komma fram till en meny, eller så kan ni välja någon av menyerna nedan. Se de som inspiration så kommer vi fram till en meny tillsammans!
          </p>

          <div className="menus-grid">
            {/* …menyer… */}
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

      {/* 👇 Scroll-to-top-knappen */}
      <ScrollToTopButton />
    </main>
  );
}