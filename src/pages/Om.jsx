import { useEffect, useState } from "react";
import { IMAGES } from "../data/images.js";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

export default function Om() {
  const navigate = useNavigate();

  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/content/om.json")
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Kunde inte läsa om.json", err));
  }, []);

  if (!content) return null; // eller loading-spinner

  return (
    <main className="catering-page">

      {/* H1 + intro */}
      <section className="page-hero page-head">
        <div className="container">
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
        </div>
      </section>

      {/* Fullbreddsbild */}
      <section
        className="hero-image"
        style={{ backgroundImage: `url(${IMAGES.grid1})` }}
      />

      {/* Intro med bild */}
      <section className="catering-intro">
        <div className="catering-content">
          <div className="text">
            <h2>{content.sectionTitle}</h2>
            <p>{content.sectionBody}</p>
            <p>{content.sectionEnd}</p>

            <button
              className="btn btn-outline"
              onClick={() => navigate("/kontakt")}
            >
              {content.ctaLabel}
            </button>
          </div>

          <div
            className="image"
            style={{ backgroundImage: `url(${IMAGES.grid5})` }}
          />
        </div>
      </section>

      <ScrollToTopButton />
    </main>
  );
}