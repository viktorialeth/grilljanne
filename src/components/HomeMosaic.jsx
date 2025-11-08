// src/components/HomeMosaic.jsx
import { IMAGES } from "../data/images";

export default function HomeMosaic() {
  return (
    <section className="mosaic">
      <div className="container">
        <div className="mosaic-grid">
          {/* Byt gärna bilderna mot de du vill visa */}
          <a
            href="/bilder"
            className="mosaic-item mosaic-left"
            aria-label="Se fler bilder"
            style={{ backgroundImage: `url(${IMAGES.grid1})` }}
          />
          <a
            href="/bilder"
            className="mosaic-item mosaic-mid-top"
            aria-label="Se fler bilder"
            style={{ backgroundImage: `url(${IMAGES.grid2})` }}
          />
          <a
            href="/bilder"
            className="mosaic-item mosaic-mid-bottom"
            aria-label="Se fler bilder"
            style={{ backgroundImage: `url(${IMAGES.grid3})` }}
          />
          <a
            href="/bilder"
            className="mosaic-item mosaic-right"
            aria-label="Se fler bilder"
            style={{ backgroundImage: `url(${IMAGES.grid4})` }}
          />
        </div>

        <div className="mosaic-cta">
          <a href="/bilder" className="mosaic-link">Se alla bilder →</a>
        </div>
      </div>
    </section>
  );
}