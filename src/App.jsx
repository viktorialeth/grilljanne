import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Catering from "./pages/Catering.jsx";
import Aktuellt from "./pages/Aktuellt.jsx";
import Bilder from "./pages/Bilder.jsx";
import Kontakt from "./pages/Kontakt.jsx";
import Om from "./pages/Om.jsx";
import Brollop from "./pages/Brollop.jsx";
import Foretagsevent from "./pages/Foretagsevent.jsx";
import Grillkurser from "./pages/Grillkurser.jsx";
import Kundevent from "./pages/Kundevent.jsx";
import Privatfest from "./pages/Privatfest.jsx";
import Student from "./pages/Student.jsx";


function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/aktuellt" element={<Aktuellt />} />
        <Route path="/bilder" element={<Bilder />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/om" element={<Om />} />
        <Route path="*" element={<Home />} />
        <Route path="/brollop" element={<Brollop />} />
        <Route path="/foretagsevent" element={<Foretagsevent />} />
        <Route path="/grillkurser" element={<Grillkurser />} />
        <Route path="/kundevent" element={<Kundevent />} />
        <Route path="/privatfest" element={<Privatfest />} />
        <Route path="/student" element={<Student />} />
      </Routes>
      <Footer />
    </>
  );
}
