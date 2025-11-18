// src/components/Breadcrumbs.jsx
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  const paths = location.pathname.split("/").filter(Boolean);

  const crumbs = paths.map((segment, index) => {
    const url = "/" + paths.slice(0, index + 1).join("/");
    const pretty =
      segment.charAt(0).toUpperCase() +
      segment.slice(1).replace(/-/g, " ");

    return (
      <span key={url}>
        <span className="crumb-separator"> / </span>
        <Link to={url}>{pretty}</Link>
      </span>
    );
  });

  return (
    <nav className="breadcrumbs">
      <a href="/#events">Hem</a>
      {crumbs}
    </nav>
  );
}