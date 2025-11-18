import { IMAGES } from "../data/images.js";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";      // ← lägg till
import { useLocation, useNavigate } from "react-router-dom";  // ← lägg till

export default function Brollop() {
  const location = useLocation();
  const navigate = useNavigate();

  // visas bara om man kom via event-korten på startsidan
  const showBreadcrumbs = location.state?.fromHomeEvents === true;

  return (
    <main className="catering-page">
      <section className="catering-intro">
        {/* Breadcrumbs upp i vänstra hörnet */}
      {showBreadcrumbs && (
        <div className="container">
          <Breadcrumbs />
        </div>
      )}
        <div className="catering-content">
          <div className="text">
            <h2>Grillcatering till bröllop</h2>
            <p>På er stora dag ska maten vara lika minnesvärd som resten av bröllopet. Vi erbjuder bröllopscatering 
                med grill på plats, där varje rätt lagas med omtanke och noggrant utvalda råvaror. Perfekt för bröllop 
                i Göteborg, lantliga vigselplatser och privata gårdar.</p>
            <p>Vi hjälper er skapa en meny som passar ert tema – exklusiv grillbuffé, BBQ-meny, fisk, kyckling, 
                vegetariskt eller en kombination. Allt lagas på plats för bästa smak och upplevelse.</p>
            <div className="menu-sub">Vi kan även bistå med:</div>
              <ul>
                <li>Serveringspersonal</li>
                <li>Dukning</li>
                <li>Upplägg och presentation</li>
                <li>Porslin, bestick och utrustning</li>
                <li>Logistik och planering</li>
              </ul>
            <button
              className="btn btn-outline"
              onClick={() => navigate("/kontakt")}
            >
              KONTAKTA OSS
            </button>
          </div>

          <div
            className="image"
            style={{ backgroundImage: `url(${IMAGES.grid7})` }}
          />
        </div>
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

      <ScrollToTopButton />
    </main>
  );
}