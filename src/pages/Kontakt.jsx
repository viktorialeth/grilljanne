// src/pages/Kontakt.jsx
import { useState } from "react";
import emailjs from "emailjs-com";
import { IMAGES } from "../data/images";

export default function Kontakt() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    guests: "",
    eventType: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("Skickar...");

    try {
      await emailjs.send(
        "service_497f1s2",
        "template_f2u431d",
        {
          from_name: `${form.first} ${form.last}`,
          reply_to: form.email,
          phone: form.phone,
          guests: form.guests,
          event_type: form.eventType,
          message: form.message,
        },
        "uiXM-ZqesBmPx7rDh"
      );

      setStatus("Tack! Ditt meddelande har skickats.");
      setForm({ first:"", last:"", email:"", phone:"", guests:"", eventType:"", message:"" });
    } catch (error) {
      console.error(error);
      setStatus("Något gick fel, försök igen senare.");
    }
  }

  return (
    <main className="contact">
      <div className="container contact-grid">
        <div className="contact-left">
          <h2 className="contact-title">KONTAKTA OSS</h2>
          <p className="contact-intro">
            Fyll i formuläret nedan eller maila oss på{" "}
            <a href="mailto:janne.staffas@gmail.com">janne.staffas@gmail.com</a> eller ring på{" "}
            <a href="tel:0705747013">070–574 70 13</a>, så hjälper vi dig ta fram ett upplägg som
            passar ditt event.
          </p>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="row two">
              <div className="field">
                <label>Förnamn</label>
                <input type="text" name="first" value={form.first} onChange={onChange} required />
              </div>
              <div className="field">
                <label>Efternamn</label>
                <input type="text" name="last" value={form.last} onChange={onChange} required />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>E-post</label>
                <input type="email" name="email" value={form.email} onChange={onChange} required />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Telefonnummer</label>
                <input type="tel" name="phone" value={form.phone} onChange={onChange} />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Antal gäster</label>
                <input type="text" name="guests" value={form.guests} onChange={onChange} />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Typ av event</label>
                <input type="text" name="eventType" value={form.eventType} onChange={onChange} placeholder="T.ex. företagsevent, privat grillkväll…" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Önskad meny eller upplägg </label>
                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-solid contact-send">SKICKA</button>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>

        <div
          className="contact-image"
          style={{ backgroundImage: `url(${IMAGES.grid5})` }}
          aria-label="Grill Janne på event"
        />
      </div>
    </main>
  );
}