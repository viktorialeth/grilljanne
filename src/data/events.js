// src/data/events.js
import aw from "../assets/bilder/AW.jpg";
import privatFest3 from "../assets/bilder/privat_fest_3.jpeg";
import forberedelser from "../assets/bilder/forberedelser.jpeg";
import foretagsevent2 from "../assets/bilder/foretagsevent_2.jpeg";
import fintEvent from "../assets/bilder/fint_event.jpeg";
import privatFest2 from "../assets/bilder/privat_fest_2.jpeg";

export const EVENTS = [
  {
    slug: "foretagsevent",
    path: "/foretagsevent",
    title: "Företagsevent",
    img: aw,
    blurb:
      "Planerar ni en företagsfest, kickoff eller personaldag? Grill Janne erbjuder grillcatering till företag – på plats hos er."
  },
  {
    slug: "privatfest",
    path: "/privatfest",
    title: "Privat fest",
    img: privatFest3,
    blurb:
      "Gör festen oförglömlig med grillcatering hemma hos dig. Vi tar med grill, utrustning och personal."
  },
  {
    slug: "grillkurser",
    path: "/grillkurser",
    title: "Grillkurser",
    img: forberedelser,
    blurb:
      "Vi erbjuder grillkurser i Göteborg med erfarna grillmästare som lär ut tekniker, smak­kombinationer och säker grillning."
  },
  {
    slug: "kundevent",
    path: "/kundevent",
    title: "Kundevent",
    img: foretagsevent2,
    blurb:
      "Skapa rätt intryck med grillcatering till kundevent, invigningar och mässor. Vi serverar burgare, BBQ eller buffé."
  },
  {
    slug: "brollop",
    path: "/brollop",
    title: "Bröllop",
    img: fintEvent,
    blurb:
      "Gör er dag unik med grillcatering till bröllop – en middagsupplevelse som gästerna sent glömmer. Vi kan även hjälpa med servering."
  },
  {
    slug: "student",
    path: "/student",
    title: "Student",
    img: privatFest2,
    blurb:
      "Fira studenten med en grillfest som gästerna minns! Vi erbjuder grillcatering för studentmottagningar i alla storlekar."
  }
];