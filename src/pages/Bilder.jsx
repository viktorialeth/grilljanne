import { IMAGES } from "../data/images.js";
import { POSTS } from "../data/posts.js";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx"; // eller utan .jsx

const gallery = [
  IMAGES.grid1,
  IMAGES.grid2,
  IMAGES.grid3,
  IMAGES.grid4,
  IMAGES.grid5,
  IMAGES.grid6,
  IMAGES.grid7,
  IMAGES.grid8,
  IMAGES.grid9,
  IMAGES.grid10,
  IMAGES.grid11,
  IMAGES.grid12,
  IMAGES.grid13,
  IMAGES.grid14,
  IMAGES.grid15,
];

export default function Bilder() {
  return (
    <main className="bilder-page">
      <div className="bilder-head container">
        <h1>BILDER</h1>
        <p className="lede">
          Ta en titt i vårt galleri och se hur vi skapar stämning på plats!
        </p>
      </div>
      <div className="image-grid-full no-overlay">
        {gallery.map((src, i) => (
          <div
            key={i}
            className="grid-card"
            style={{ backgroundImage: `url(${src})` }}
          >
            <span />
          </div>
        ))}
      </div>
      <ScrollToTopButton />
    </main>
  );
}