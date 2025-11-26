// src/pages/Bilder.jsx
import { useEffect, useState } from "react";
import { IMAGES } from "../data/images.js";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

// Standardgalleri (fallback, används alltid lokalt)
const DEFAULT_GALLERY = [
  { src: IMAGES.grid1, alt: "Grillevent 1" },
  { src: IMAGES.grid2, alt: "Grillevent 2" },
  { src: IMAGES.grid3, alt: "Grillevent 3" },
  { src: IMAGES.grid4, alt: "Grillevent 4" },
  { src: IMAGES.grid5, alt: "Grillevent 5" },
  { src: IMAGES.grid6, alt: "Grillevent 6" },
  { src: IMAGES.grid7, alt: "Grillevent 7" },
  { src: IMAGES.grid8, alt: "Grillevent 8" },
  { src: IMAGES.grid9, alt: "Grillevent 9" },
  { src: IMAGES.grid10, alt: "Grillevent 10" },
  { src: IMAGES.grid11, alt: "Grillevent 11" },
  { src: IMAGES.grid12, alt: "Grillevent 12" },
  { src: IMAGES.grid13, alt: "Grillevent 13" },
  { src: IMAGES.grid14, alt: "Grillevent 14" },
  { src: IMAGES.grid15, alt: "Grillevent 15" },
];

export default function Bilder() {
  const [galleryItems, setGalleryItems] = useState(DEFAULT_GALLERY);

  useEffect(() => {
    const isProd = window.location.hostname === "grilljanne.com";

    // Lokalt: behåll bara DEFAULT_GALLERY
    if (!isProd) return;

    // Produktion: försök läsa galleri från CMS
    fetch("/content/gallery.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Kunde inte läsa /content/gallery.json");
        }
        return res.json();
      })
      .then((data) => {
        if (data.items && Array.isArray(data.items) && data.items.length > 0) {
          const mapped = data.items.map((item) => ({
            src: item.image,
            alt: item.alt || "",
          }));
          setGalleryItems(mapped);
        }
      })
      .catch((err) => {
        console.error("Fel vid hämtning av galleri:", err);
        // Vid fel behåller vi DEFAULT_GALLERY
      });
  }, []);

  return (
    <main className="bilder-page">
      <div className="bilder-head container">
        <h1>BILDER</h1>
        <p className="lede">
          Ta en titt i vårt galleri och se hur vi skapar stämning på plats!
        </p>
      </div>

      <div className="image-grid-full no-overlay">
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className="grid-card"
            style={{ backgroundImage: `url(${item.src})` }}
            aria-label={item.alt}
          >
            <span />
          </div>
        ))}
      </div>

      <ScrollToTopButton />
    </main>
  );
}