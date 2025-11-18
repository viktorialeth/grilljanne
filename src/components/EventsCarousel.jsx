// src/components/EventsCarousel.jsx
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { EVENTS } from "../data/events";

export default function EventsCarousel() {
  const trackRef = useRef(null);
  const navigate = useNavigate();

  const scrollByOne = (dir = 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".event-card");
    const amount = card ? card.offsetWidth + 20 : 320;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const onWheel = (e) => {
    const track = trackRef.current;
    if (!track) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      track.scrollLeft += e.deltaY;
    }
  };

  const handleCardClick = (slug) => {
    navigate(`/${slug}`, {
      state: { fromHomeEvents: true }, // <-- flagga (oförändrad)
    });
  };

  return (
    <section className="events" id="events">
      <div className="events-head">
        <div className="events-head-inner">
          <h2>Exempel på event</h2>
          <p className="lede">
            Bläddra i galleriet och tryck på bilderna för mer information.
          </p>
        </div>
        <div className="events-ctrl">
          <button className="events-nav" onClick={() => scrollByOne(-1)} aria-label="Föregående">‹</button>
          <button className="events-nav" onClick={() => scrollByOne(1)} aria-label="Nästa">›</button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="events-track"
        onWheel={onWheel}
        role="region"
        aria-label="Horizontellt galleri med exempel på event"
      >
        {EVENTS.map((ev) => (
          <article
            key={ev.slug}
            className="event-card"
            style={{ backgroundImage: `url(${ev.img})` }}
            onClick={() => handleCardClick(ev.slug)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleCardClick(ev.slug)}
          >
            <div className="event-gradient" aria-hidden="true" />
            <div className="event-title">{ev.title}</div>

            <div className="event-overlay">
              <h3>{ev.title}</h3>
              <p>{ev.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}