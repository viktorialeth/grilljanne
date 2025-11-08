// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer" id="kontakt">
      <div className="container">
        <hr className="footer-rule" />

        <div className="footer-brand">GRILL&nbsp;JANNE</div>

        <div className="footer-rows">
          {/* Kolumn 1: Stor titel */}
          <div>
            <div className="foot-title--big">Kontakt</div>
          </div>

          {/* Kolumn 2: Etiketter */}
          <div>
            <div className="foot-title">Telefon</div>
            <div className="foot-title">Email</div>
          </div>

          {/* Kolumn 3: Värden */}
          <div>
            <div className="foot-value">
              <a href="tel:0705747013">070-574&nbsp;70&nbsp;13</a>
            </div>
            <div className="foot-value">
              <a href="mailto:janne.staffas@gmail.com">janne.staffas@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}