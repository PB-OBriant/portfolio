import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="nav">
      <div className="navInner">
        <nav className="links">
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/projects" className="link">Projects</NavLink>
          <NavLink to="/resume" className="link">Resume</NavLink>
          <NavLink to="/contact" className="link">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
