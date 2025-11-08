import { useNavigate } from "react-router-dom";
import { IMAGES } from "../data/images.js";
import { POSTS } from "../data/posts.js";
import EventsCarousel from "../components/EventsCarousel"; // 👈 Lägg till denna rad
import FacebookPagePlugin from "../components/FacebookPagePlugin";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      {/* HERO – sidans H1 */}
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
              {/* Vänster – stor bild (spänner över 2 rader) */}
              <a
                className="m3-item m3-left"
                style={{ backgroundImage: `url(${IMAGES.grid1})` }}
              />

              {/* Höger – övre bild */}
              <a
                className="m3-item m3-right-top"
                style={{ backgroundImage: `url(${IMAGES.grid2})` }}
              />

              {/* Höger – nedre bild */}
              <a
                className="m3-item m3-right-bottom"
                style={{ backgroundImage: `url(${IMAGES.grid3})` }}
              />
            </div>

            <div className="m3-cta">
              <a className="btn btn-outline" href="/bilder">SE ALLA BILDER</a>
            </div>
          </div>
        </section>

      
        {/* === FACEBOOK === */}
        <section className="news" id="aktuellt">
          <div className="container news-head">
            <h2>Aktuellt</h2>
            <p className="lede lede-news">
              Håll koll på Grill Janne! Här berättar vi när vi står på event och tillställningar.
            </p>
            <button
              className="btn btn-outline news-cta"
              onClick={() => navigate("/aktuellt")}
            >
              SE ALLA INLÄGG
            </button>
          </div>

          {/* === TVÅ KOLUMNER === */}
          <div className="container news-columns">
            <div className="news-col">
              <h3>Kommande event</h3>
              <ul className="upcoming-list">
                <li>Ullevi, Luke Combs, lördag 4/7-26</li>
                <li>Ullevi, Swedish House Maffia, fredag 28/8-26</li>
                <li>Ullevi, Swedish House Maffia, lördag 29/8-26</li>
              </ul>
            </div>

             {/* <div className="news-col">
              <a href="https://www.facebook.com/profile.php?id=100075682557073" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline">
            Följ oss på Facebook</a>
              <FacebookPagePlugin />
            </div> */}

          </div>

        <div className="container posts">
          <div className="container news-head">
          <h3>Tidigare event</h3>
        </div>
          {POSTS.map((p, i) => (
            <article className="post" key={i}>
              <div className="post-text">
                <h3>{p.title}</h3>
                <p className="date">{p.date}</p>
                <p>{p.text}</p>
              </div>
              <div
                className="post-image"
                style={{ backgroundImage: `url(${p.img})` }}
              />
            </article>
          ))}
        </div>

        </section>

      {/* --- MENYFÖRSLAG --- */}
      <section className="menus" id="menyforslag">
        <div className="container">
          <h2 className="menus-title">Menyförslag</h2>
          <p className="menus-intro">
            Vi kan tillsammans komma fram till en meny, eller så kan ni välja någon av menyerna nedan. Se de som inspiration så kommer vi fram till en meny tillsammans!
          </p>

          <div className="menus-grid">
            {/* MENY 1 */}
            <article className="menu">
              <h3>MENY 1 – KLASSISK GRILLMENY</h3>
              <p>En populär grundmeny som passar de flesta tillställningar.</p>
              <div className="menu-sub">Exempel på innehåll:</div>
              <ul>
                <li>Grillad fläskfilé med BBQ-glaze</li>
                <li>Grillspett med kyckling och grönsaker</li>
                <li>Rostad potatissallad med örtdressing</li>
                <li>Coleslaw med krispig kål och morot</li>
                <li>Färskt bröd och grillsås</li>
              </ul>
              <p className="menu-note">Passar bra till studentfester, sommaravslutningar och privata tillställningar.</p>
            </article>

            {/* MENY 2 */}
            <article className="menu">
              <h3>MENY 2 – AMERICAN BBQ</h3>
              <p>För dig som vill ha en mer rökig och klassisk BBQ-upplevelse.</p>
              <div className="menu-sub">Exempel på innehåll:</div>
              <ul>
                <li>Pulled pork med rökig BBQ-sås</li>
                <li>Grillade revbensspjäll med glaze</li>
                <li>Majskolv med smör och flingsalt</li>
                <li>Baked beans och potatissallad i amerikansk stil</li>
                <li>Picklad rödlök och coleslaw</li>
              </ul>
              <p className="menu-note">Perfekt för företagsevent, AW eller temafester.</p>
            </article>

            {/* MENY 3 */}
            <article className="menu">
              <h3>MENY 3 – PREMIUM GRILL</h3>
              <p>En mer exklusiv meny med fokus på exklusiva råvaror.</p>
              <div className="menu-sub">Exempel på innehåll:</div>
              <ul>
                <li>Grillad entrecôte eller flankstek med chimichurri</li>
                <li>Grillad laxfilé med citron och örter</li>
                <li>Ugnsrostad färskpotatis med havssalt</li>
                <li>Grillade grönsaker med olivolja och vitlök</li>
                <li>Fräsch sallad med fetaost, tomat och balsamvinäger</li>
                <li>Hembakad aioli och bröd</li>
              </ul>
              <p className="menu-note">Ett alternativ för bröllop, jubileum och större event.</p>
            </article>

            {/* MENY 4 */}
            <article className="menu">
              <h3>MENY 4 – VEGETARISK GRILL</h3>
              <p>Grillupplevelsen utan kött!</p>
              <div className="menu-sub">Exempel på innehåll:</div>
              <ul>
                <li>Grillade halloumispett med paprika, zucchini och lök</li>
                <li>Marinerade portabellosvampar med vitlök och örter</li>
                <li>Grillad majskolv med örtsmör</li>
                <li>Rostad potatissallad med dijondressing</li>
                <li>Fräsch grönsallad med bönor, tomat och krispiga grönsaker</li>
                <li>Hembakat bröd och aioli</li>
              </ul>
              <p className="menu-note">Ett populärt alternativ som passar både vegetarianer och flexitarianer.</p>
            </article>
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
    </main>
  );
}