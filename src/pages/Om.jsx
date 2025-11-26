import { IMAGES } from "../data/images.js";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"; // eller utan .jsx

export default function Om() {
  return (
    <main className="catering-page">
      {/* Sida: H1 */}
      <section className="page-hero page-head">
        <div className="container">
          <h1>Om oss</h1>
          <p>
            Vi utgår Mölnlycke nära Göteborg och erbjuder helhetslösningar inom grillcatering.
            Med fokus på grill, god service och råvaror av högsta kvalitet skapar vi minnesvärda 
            upplevelser för både företag och privatpersoner.
          </p>
        </div>
      </section>

      {/* Fullbreddsbild */}
      <section
        className="hero-image"
        style={{ backgroundImage: `url(${IMAGES.grid1})` }} />

      {/* Intro med bild till höger */}
      <section className="catering-intro">
        <div className="catering-content">
          <div className="text">
            <h2>Glöden som startade Grill Janne</h2>
            <p>
              Grill Janne startade 2013 med ett enkelt mål – att sprida glädje genom riktigt god grillmat.
              Det började med att vi hjälpte andra eventfirmor, men har idag vuxit till en verksamhet som 
              levererar grillcatering till både företag och privatpersoner över hela landet.
              Vi lagar maten på plats – oavsett om det gäller mässor, konserter på Ullevi, företagsevent, 
              bröllop eller privata fester. Vår mat är lagad från grunden, med fokus på smak, kvalitet och 
              upplevelse. Vi erbjuder allt från klassisk BBQ och slow-cooked kött till fräscha grillbufféer, 
              burgare och moderna streetfood-koncept. För den som vill lära sig mer arrangerar 
              vi även grillkurser, där du får grilla tillsammans med våra erfarna grillmästare.
            </p>
            <p>
              Grill Janne – din partner för grill, BBQ och event.
            </p>
            <button className="btn btn-outline" onClick={() => navigate("/kontakt")}>
              KONTAKTA OSS
            </button>
          </div>

          <div
            className="image"
            style={{ backgroundImage: `url(${IMAGES.grid5})` }}
          />
        </div>
      </section>

      {/* 👇 Lägg till scroll-till-top-knappen */}
      <ScrollToTopButton />
    </main>
  );
}