// src/components/PastEventsStrip.jsx
import { useRef } from "react";
import { IMAGES } from "../data/images";

const PAST_EVENTS = [
  {
    id: "pulled-pork-25kg",
    date: "17/10-25",
    text: "25 kg Pulled Pork",
    img: IMAGES.grid16,
  },
  {
    id: "konstant-ko",
    date: "1/8-24",
    text: "Konstant kö men den rörde sig snabbt",
    img: IMAGES.grid17,
  },
  {
    id: "regn-eller-sol",
    date: "1/8-24",
    text: "Regn eller sol vi har öppet. Välkomna.",
    img: IMAGES.grid18,
  },
  {
    id: "oppet-fran-nu",
    date: "28/7-2",
    text: "Vi har öppet. Från nu till sent. Välkomna.",
    img: IMAGES.grid19,
  },
  {
    id: "pulled-pork-acdc",
    date: "22/7-2",
    text: "Pulled Pork på G inför AC/DC på måndag. Grymma Pulled Pork Wraps.",
    img: IMAGES.grid6,
  },
  {
    id: "grymt-tack",
    date: "20/7-2",
    text: "Grymt mycket tack för i kväll.",
    img: IMAGES.grid3,
  },
  {
    id: "oppet",
    date: "19/7-2",
    text: "Öppet.",
    img: IMAGES.grid20,
  },
];

export default function PastEventsStrip() {
  const trackRef = useRef(null);

  const onWheel = (e) => {
    const track = trackRef.current;
    if (!track) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      track.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="past-events">
      <div
        ref={trackRef}
        className="events-track past-events-track"
        onWheel={onWheel}
        role="region"
        aria-label="Tidigare event – galleri som går att scrolla"
      >
        {PAST_EVENTS.map((ev) => (
          <div key={ev.id} className="event-card past-event-card">
            <div className="past-event-image">
              <img src={ev.img} alt={ev.text} />
            </div>

            <div className="past-event-body">
              {/* datum överst */}
              <div className="past-event-date">{ev.date}</div>

              {/* text under datumet */}
              <h4>{ev.text}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}