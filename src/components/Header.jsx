import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div>
          <p className="eyebrow">Constitution Facts</p>
          <h1>Rights, rules, and accountability for everyone.</h1>
        </div>
        <nav className="nav">
          <NavLink to="/" end>
            Overview
          </NavLink>
          <NavLink to="/amendments">Amendments</NavLink>
        </nav>
      </div>
    </header>
  );
}
