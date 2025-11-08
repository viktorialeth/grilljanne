import { IMAGES } from "../data/images.js";

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
          <article className="feature-card">
            <h3>Vi fixar allt</h3>
            <p>
              När du bokar oss ingår allt som behövs för ett lyckat grilltillfälle.
              Vi tar med grillar, utrustning, råvaror och personal, samt ansvarar
              för transport och hantering på plats.
            </p>
          </article>

          <article className="feature-card">
            <h3>Flexibel meny</h3>
            <p>
              Våra menyer kan utformas helt efter önskemål. Vi erbjuder kött, fisk,
              vegetariskt och glutenfritt, och ser till att alla gäster hittar något
              som passar. Tillsammans planerar vi ett menyupplägg som fungerar för
              just ert event.
            </p>
            <a className="text-cta" href="/catering#menyforslag">Se menyförslag</a>
          </article>

          <article className="feature-card">
            <h3>Exempel på event</h3>
            <p>
              Vi levererar grillupplevelser till många olika sammanhang – allt från
              studenten, företagsevent och bröllop till privata grillkvällar. Oavsett
              storlek på tillställningen anpassar vi upplägget efter era behov.
            </p>
          </article>

          <article className="feature-card">
            <h3>Hög kvalitet</h3>
            <p>
              Vi använder alltid råvaror av hög kvalitet och grillar på plats för bästa smakupplevelse.
              Det innebär att vi väljer produkter som håller för höga temperaturer och som smakar bra 
              även i större sammanhang. För oss handlar kvalitet om enkel och vällagad mat som man med 
              glädje bjuder sina gäster på.
            </p>
          </article>

          <article className="feature-card">
            <h3>Helhetsupplevelse</h3>
            <p>
              Från planering till servering – vi hjälper er genom hela processen. 
              Vi sköter allt från planering till grillning på plats – logistik, 
              utrustning och detaljer. Ni kan slappna av och fokusera på gästerna, 
              så ser vi till att allt flyter på, oavsett om det är ett stort event 
              eller en mindre tillställning.
            </p>
          </article>

          <article className="feature-card">
            <h3>Personlig service</h3>
            <p>
              Vi lyssnar på era önskemål och ser till att varje event blir unikt och minnesvärt. 
              Det kan handla om att anpassa menyn, tiderna eller upplägget efter era behov. 
              Vårt mål är att göra det enkelt för er – med tydlig 
              kommunikation, smidiga beslut och ett resultat som känns både proffsigt och personligt.
            </p>
          </article>
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