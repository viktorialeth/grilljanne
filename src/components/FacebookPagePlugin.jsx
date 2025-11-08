// src/components/FacebookPagePlugin.jsx
export default function FacebookPagePlugin() {
  const pageUrl = "https://www.facebook.com/p/Grill-Janne-100075682557073/";
  const height = 750;

  const src = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    pageUrl
  )}&tabs=timeline&width=500&height=${height}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <div className="fb-plugin-wrap">
      <iframe
        title="Facebook Page Plugin - Grill Janne"
        src={src}
        width="100%"
        height={height}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
}