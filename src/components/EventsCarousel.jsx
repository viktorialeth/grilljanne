// src/components/EventsCarousel.jsx
import { useRef } from "react";
import { EVENTS } from "../data/events";

export default function EventsCarousel() {
  const trackRef = useRef(null);

  const scrollByOne = (dir = 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".event-card");
    const amount = card ? card.offsetWidth + 20 : 320; // +gap
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

  return (
    <section className="events">
      <div className="events-head">
  <div className="events-head-inner">
    <h2>Exempel på event</h2>
    <p className="lede">Bläddra i galleriet och hovra för mer info.</p>
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
        {EVENTS.map(ev => (
          <article
            key={ev.slug}
            className="event-card"
            style={{ backgroundImage: `url(${ev.img})` }}
          >
            <div className="event-gradient" aria-hidden="true" />
            <div className="event-title">{ev.title}</div>

            <div className="event-overlay">
              <h3>{ev.title}</h3>
              <p>{ev.blurb}</p>
              {/* Lägg ev. en länk här */}
              {/* <a className="text-cta" href={`/event/${ev.slug}`}>Läs mer →</a> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}