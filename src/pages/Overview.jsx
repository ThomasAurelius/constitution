import { Link } from "react-router-dom";

export default function Overview() {
  return (
    <section className="container page">
      <div className="hero">
        <div>
          <h2>Why a Constitution Matters</h2>
          <p>
            A constitution is the rulebook that limits power, protects rights,
            and makes government answer to the people. It turns political values
            into enforceable promises so that freedom is not dependent on who
            holds office.
          </p>
        </div>
        <div className="hero-card">
          <h3>Quick Facts</h3>
          <ul>
            <li>Sets boundaries for every branch of government.</li>
            <li>Protects individual rights from sudden policy swings.</li>
            <li>Gives citizens a tool to challenge abuses of power.</li>
          </ul>
        </div>
      </div>

      <div className="grid">
        <article className="card">
          <h3>It must apply to everyone equally</h3>
          <p>
            The Constitution is the same for every person and every official.
            Equal application prevents special treatment, favoritism, and
            selective enforcement. That stability is what makes rights real,
            not just theoretical.
          </p>
        </article>
        <article className="card">
          <h3>It cannot be the whim of one official</h3>
          <p>
            A personal agenda should never rewrite the rules. Constitutional
            limits mean leaders cannot ignore rights, skip due process, or bend
            the law to fit a political moment. The rule of law protects the
            public from arbitrary power.
          </p>
        </article>
        <article className="card">
          <h3>Amendments keep the promise alive</h3>
          <p>
            The amendments show how the nation expands freedom and fixes flaws
            without abandoning the whole system. Each one tells a story about
            rights, accountability, and shared responsibility.
          </p>
        </article>
      </div>

      <div className="cta">
        <h3>Ready to explore the amendments?</h3>
        <p>
          Read the official words and the plain-language summaries for all 27
          amendments.
        </p>
        <Link className="button" to="/amendments">
          View all amendments
        </Link>
      </div>
    </section>
  );
}
