import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMAGES } from "../data/images.js";
import FacebookPagePlugin from "../components/FacebookPagePlugin";

export default function Home() {
  const navigate = useNavigate();

  // === Scroll to top-knapp ===
  const [showScroll, setShowScroll] = useState(false);

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

  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">GRILLEVENT MED GLÖD</p>
          <h1>VI FIXAR GRILLEN PÅ DITT NÄSTA EVENT</h1>
          <p className="lede">
            Vill du ha gott grillat till ditt event eller fest? Vi erbjuder grill till allt från
            företagsevenemang och privata tillställningar. Vi ansvarar för grillningen på plats,
            så att du kan ägna dig åt gästerna. Resultatet blir god grill – levererad dit du
            behöver den. Givetvis har vi också grillkurser.
          </p>
        </div>
        <section className="fullbleed" style={{ backgroundImage: `url(${IMAGES.grid5})` }} />
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
              dina vänner, kolleger, kunder etc. Vår idé är simpel - grill på plats för alla tillfällen!
            </p>
            <button className="btn btn-outline" onClick={() => navigate("/kontakt")}>
              KONTAKTA OSS
            </button>
          </div>
        </div>

        <div className="feature-grid-home">
          <article className="feature-card-home">
            <h3>Vi fixar allt</h3>
            <p>
              När du bokar oss ingår allt som behövs för ett lyckat grilltillfälle.
              Vi tar med grillar, utrustning, råvaror och personal, samt ansvarar
              för transport och hantering på plats.
            </p>
          </article>

          <article className="feature-card-home">
            <h3>Flexibel meny</h3>
            <p>
              Våra menyer kan utformas helt efter önskemål. Vi erbjuder kött, fisk,
              vegetariskt och glutenfritt, och ser till att alla gäster hittar något
              som passar. Tillsammans planerar vi ett menyupplägg som fungerar för
              just ert event.
            </p>
            <a className="text-cta" href="/home#menyforslag">Se menyförslag</a>
          </article>

          <article className="feature-card-home">
            <h3>Personlig service</h3>
            <p>
              Vi lyssnar på era önskemål och ser till att varje event blir unikt och minnesvärt. 
              Det kan handla om att anpassa menyn, tiderna eller upplägget efter era behov.
            </p>
          </article>

           <article className="feature-card-home">
            <h3>Exempel på event</h3>
            <p>
             Vi levererar grillupplevelser till många olika sammanhang – allt från studenten, 
             företagsevent och bröllop till privata grillkvällar. Oavsett storlek på 
             tillställningen anpassar vi upplägget efter era behov.
            </p>
          </article>

           <article className="feature-card-home">
            <h3>Hög kvalitet</h3>
            <p>
              Vi använder alltid råvaror av hög kvalitet och grillar på plats för bästa smakupplevelse. 
              Det innebär att vi väljer produkter som håller för höga temperaturer och som smakar bra 
              även i större sammanhang.
            </p>
          </article>

           <article className="feature-card-home">
            <h3>All utrustning</h3>
            <p>
              På erat event kan vi ta med all utrustning, så som tallrikar, glas, bestick osv. 
              Vid planering får ni förmedla alla era önsekemål så kommer vi fram till vad ni 
              behöver tillsammans. 
            </p>
          </article>
        </div>
      </section>

      {/* === MOSAIC 3-BILDER === */}
      <section className="mosaic3">
        <div className="container">
          <div className="mosaic3-grid">
            <a className="m3-item m3-left" style={{ backgroundImage: `url(${IMAGES.grid1})` }} />
            <a className="m3-item m3-right-top" style={{ backgroundImage: `url(${IMAGES.grid2})` }} />
            <a className="m3-item m3-right-bottom" style={{ backgroundImage: `url(${IMAGES.grid3})` }} />
          </div>

          <div className="m3-cta">
            <a className="btn btn-outline" href="/bilder">SE ALLA BILDER</a>
          </div>
        </div>
      </section>

      {/* === AKTUELLT (hem) === */}
      <section className="news news--home" id="aktuellt">
        <div className="container news-head">
          <h2>Aktuellt</h2>
          <p className="lede lede-news">
            Håll koll på Grill Janne! Här berättar vi när vi står på event och tillställningar.
            Följ oss på Facebook för att se fler bilder och uppdateringar.
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
                <li>Ullevi, Luke Combs, lördag 4/7-26</li>
                <li>Ullevi, Swedish House Maffia, fredag 28/8-26</li>
                <li>Ullevi, Swedish House Maffia, lördag 29/8-26</li>
              </ul>
        </div>

    {/* Höger: Tidigare event + Facebook-tråd */}
    <div className="news-col news-col--right">
      <h3>Tidigare event</h3>
      <div className="follow-facebook">
        <FacebookPagePlugin /></div>
    </div>
    </div>
</section>

      {/* --- MENYFÖRSLAG --- */} 
      <section className="menus" id="menyforslag"> 
        <div className="container"> 
          <h2 className="menus-title">MENYFÖRSLAG</h2> 
          <p className="menus-intro"> Vi kan tillsammans komma fram till en meny, 
            eller så kan ni välja någon av menyerna nedan. Alla menyer har vegetariskt alternativ. 
            Gluten och laktosfritt erbjudande finns alltid. </p> 
        <div className="menus-grid"> 
          {/* MENY 1 */} <article className="menu"> 
            <h3>MENY 1 – MIXED GRILL</h3> 
            <p>En populär grundmeny som passar de flesta tillställningar.</p> 
            <div className="menu-sub">Innehåll:</div> <ul> 
              <li>Potatisgratäng eller en wok</li> 
              <li>Grillade grönsaker</li> 
              <li>Majskolv</li> 
              <li>Entrecôte</li>
              <li>Fläskkarré/kotlett</li>
              <li>Kycklinglårfilé</li>
              <li>Två olika färska grillade korvar</li>
              <li>Bearnaisesås</li> 
               </ul> 
              <p className="menu-note">Passar bra till privata tillställningar, företagsevent, studentfester och sommaravslutningar.</p> </article> 
          {/* MENY 2 */} <article className="menu"> 
            <h3>MENY 2 – MIXED GRILL LYX</h3> 
            <p>En mer exklusiv variant av Mixed Grill, med lammracks som höjer nivån.</p> 
            <div className="menu-sub">Innehåll:</div> <ul> 
              <li>Potatisgratäng eller en wok</li> 
              <li>Grillade grönsaker</li> 
              <li>Majskolv</li>
              <li>Lammwracks</li> 
              <li>Entrecôte</li>
              <li>Fläskkarré/kotlett</li>
              <li>Kycklinglårfilé</li>
              <li>Två olika färska grillade korvar</li>
              <li>Bearnaisesås</li> </ul> 
              <p className="menu-note">Perfekt för företagsevent, AW eller temafester.</p> </article>
            {/* MENY 3 */} <article className="menu"> 
              <h3>MENY 3 – HAMBURGERMENY</h3> 
              <p>En klassisk hamburgermeny med fokus på kvalitet och smak.</p> 
              <div className="menu-sub">Innehåll:</div> <ul> 
                <li>200g hamburgare med:</li> 
                <li>Lök</li> 
                <li>Sallad</li> 
                <li>Ostx2</li> 
                <li>Bacon</li> 
                <li>Jalapeno</li>
                <li>Briochebröd</li>
                <li>Tillval: Pommes</li> </ul> 
                <p className="menu-note">Festivaler/konserter, större event eller personalfester där en enklare men mättande rätt önskas.</p> </article> 
              {/* MENY 4 */} <article className="menu"> 
                <h3>MENY 4 – WRAPS</h3> 
                <p>Ett flexibelt och lättserverat alternativ med wraps i olika varianter.</p> 
                <div className="menu-sub">Innehåll:</div> <ul> 
                  <li>Pulled porkwraps: Isbergssallad, coleslaw, färsk gurka, barbecuesås och jalapeños samt picklad rödlök.</li>  
                  <li>Varmröktlaxwrap: Isbergssallad, kokt småpotatis med dijonsenap sås o gräslök, rädisor samt picklad rödlök.</li> 
                  <li>Vegetarisk alternativ: Pulled Oumphwrap; Isbergssallad, coleslaw, färsk gurka, barbecuesås och jalapeños samt picklad rödlök. </li>
                  </ul> 
                  <p className="menu-note">Konserter, festivaler, marknader, lunchgrill och andra utomhusevent där maten ska vara enkel att äta.</p> </article> 
                  </div> </div> 
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