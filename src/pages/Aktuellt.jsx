import { POSTS } from "../data/posts.js";

export default function Aktuellt() {
  return (
    <main className="news news--spacious">
      <div className="container news-head page-head">
        <h1>AKTUELLT</h1>
        <p className="lede lede-news">
          Här uppdaterar vi när vi står på event och tillställningar. Följ oss på Facebook för att se fler bilder och uppdateringar.</p>
        <div className="follow-facebook">
        <a href="https://www.facebook.com/profile.php?id=100075682557073" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline">
            Följ oss på Facebook</a>
      </div>
      </div>

      <div className="container posts">
        {POSTS.map((p, i) => (
          <article className="post" key={i}>
            <div className="post-text">
              <h3>{p.title}</h3>
              <p className="date">{p.date}</p>
              <p>{p.text}</p>
            </div>
            <div
              className="post-image"
              style={{ backgroundImage: `url(${p.img})` }}
            />
          </article>
        ))}
      </div>
    </main>
  );
}