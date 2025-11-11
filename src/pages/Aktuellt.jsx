import ScrollToTopButton from "../components/ScrollToTopButton.jsx";
import FacebookPagePlugin from "../components/FacebookPagePlugin";

export default function Aktuellt() {
  return (
    <main className="news news--page news--spacious">
      <div className="container news-head page-head">
        <h1>AKTUELLT</h1>
        <p className="lede lede-news">
          Här uppdaterar vi när vi står på event och tillställningar. Följ oss på Facebook för att se fler bilder och uppdateringar.
        </p>

        <div className="follow-facebook">
          <a
            href="https://www.facebook.com/people/Grill-Janne/100075682557073/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            FÖLJ OSS PÅ FACEBOOK
          </a>
        </div>
      </div>

      <div className="container news-columns">
        <div className="news-col">
          <h3>Kommande event</h3>
            <ul className="upcoming-list">
              <li>Ullevi, Luke Combs, lördag 4/7-26</li>
              <li>Ullevi, Swedish House Maffia, fredag 28/8-26</li>
              <li>Ullevi, Swedish House Maffia, lördag 29/8-26</li>
            </ul>
        </div>
        <div className="news-col news-col--right">
          <h3>Tidigare event</h3>
          <div className="follow-facebook">
            <FacebookPagePlugin />
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </main>
  );
}