import { Link } from "react-router-dom";
import { amendments } from "../data/amendments.js";

export default function Amendments() {
  return (
    <section className="container page">
      <div className="page-header">
        <h2>All 27 Amendments</h2>
        <p>
          Click any amendment for the official text and a clear, no-nonsense
          summary.
        </p>
      </div>
      <div className="amendment-grid">
        {amendments.map((amendment) => (
          <Link
            key={amendment.id}
            className="amendment-card"
            to={`/amendments/${amendment.id}`}
          >
            <span className="amendment-number">Amendment {amendment.id}</span>
            <h3>{amendment.name}</h3>
            <p className="muted">Ratified {amendment.year}</p>
            <p>{amendment.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
