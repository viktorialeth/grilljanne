// Visar Facebook-flödet utan header (beskuren) och med korrekt width-parameter
import { useEffect } from "react";

const PAGE_URL = "https://www.facebook.com/p/Grill-Janne-100075682557073/";

// Du kan justera höjden och hur mycket av toppen som ska döljas
const FB_HEIGHT = 720;  // totalhöjd
const CROP_TOP = 64;    // pixlar att dölja (rubriken)

export default function FacebookPagePlugin() {
  useEffect(() => {
    // Lägg till Facebook root-element om det saknas
    if (!document.getElementById("fb-root")) {
      const root = document.createElement("div");
      root.id = "fb-root";
      document.body.prepend(root);
    }

    // Ladda SDK en gång
    if (!document.getElementById("facebook-jssdk")) {
      const s = document.createElement("script");
      s.id = "facebook-jssdk";
      s.async = true;
      s.defer = true;
      s.crossOrigin = "anonymous";
      s.src = "https://connect.facebook.net/sv_SE/sdk.js#xfbml=1&version=v19.0";
      document.body.appendChild(s);
    } else if (window.FB?.XFBML?.parse) {
      window.FB.XFBML.parse();
    }
  }, []);

  const iframeSrc =
    "https://www.facebook.com/plugins/page.php" +
    `?href=${encodeURIComponent(PAGE_URL)}` +
    "&tabs=timeline" +
    "&width=600" +                    // 👈 viktigt för Facebook men hanteras av CSS
    `&height=${FB_HEIGHT}` +
    "&small_header=true" +            // kompakt header
    "&hide_cover=true" +              // ta bort omslagsbild
    "&show_facepile=false" +          // göm profilbilder
    "&adapt_container_width=true";    // fyll kolumnen

  return (
    <div className="fb-plugin-wrap">
      <div
        className="fb-crop"
        style={{ "--fb-height": `${FB_HEIGHT}px`, "--fb-crop": `${CROP_TOP}px` }}
      >
        <iframe
          title="Grill Janne – Facebook"
          src={iframeSrc}
          width="600"
          height={FB_HEIGHT}
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
}