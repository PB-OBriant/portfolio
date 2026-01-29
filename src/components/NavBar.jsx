import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) => (isActive ? "link active" : "link");

  return (
    <header className="nav">
      <div className="navInner">

        <button
          className="menuButton"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          ☰
        </button>

        <nav className={open ? "links open" : "links"}>
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/resume" className={linkClass} onClick={() => setOpen(false)}>
            Resume
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
