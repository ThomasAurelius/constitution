import { Link, useParams } from "react-router-dom";
import { amendmentsById } from "../data/amendments.js";

export default function AmendmentDetail() {
  const params = useParams();
  const id = Number(params.id);
  const amendment = amendmentsById[id];

  if (!amendment) {
    return (
      <section className="container page">
        <h2>Amendment not found</h2>
        <p>We could not locate that amendment.</p>
        <Link className="button" to="/amendments">
          Back to all amendments
        </Link>
      </section>
    );
  }

  return (
    <section className="container page">
      <div className="page-header">
        <p className="eyebrow">Amendment {amendment.id}</p>
        <h2>{amendment.name}</h2>
        <p className="muted">Ratified {amendment.year}</p>
      </div>

      <div className="detail-grid">
        <article className="card">
          <h3>Official Text</h3>
          <blockquote>{amendment.text}</blockquote>
        </article>
        <article className="card emphasis">
          <h3>No-Nonsense Summary</h3>
          <p>{amendment.summary}</p>
          <p className="callout">
            This amendment applies to everyone equally — no exceptions for title
            or position.
          </p>
        </article>
      </div>

      <div className="detail-actions">
        <Link className="button" to="/amendments">
          Back to all amendments
        </Link>
        <Link className="button ghost" to="/">
          Back to overview
        </Link>
      </div>
    </section>
  );
}
