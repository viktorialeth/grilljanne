import { IMAGES } from "../data/images.js";

export default function Om() {
  return (
    <main className="catering-page">
      {/* Sida: H1 */}
        <section className="page-hero page-head">
          <div className="container">
            <h1>Om os</h1>
            <p>Vi utgår från Mölnlycke i Göteborg och erbjuder helhetslösningar för catering med fokus på grill.</p>
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
            <h2>Glöden som startade Grill Janne</h2>
            <p>
            Grill Janne föddes ur en enkel idé i Mölnlycke – att ta den äkta grillupplevelsen dit festen är.
            Det som började som ett par grillar och mycket passion har vuxit till ett uppskattat grillcateringföretag 
            Sedan starten har vi grillat på allt från företagsfester och bröllop till privata sommarkvällar. Med glöd, 
            erfarenhet och bra råvaror ser vi till att varje tillställning blir något att minnas – oavsett storlek.
            </p>
            <a href="/kontakt" className="cta-outline">Kontakta oss</a>
          </div>

          <div className="image" style={{ backgroundImage: `url(${IMAGES.grid5})` }} />
        </div>
      </section>
    </main>
  );
}